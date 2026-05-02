import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UsefulInfoArticleContent } from "@/components/UsefulInfoArticleContent";
import { blogPosts, getBlogPostBySlug, getServiceBySlug, type ServiceItem } from "@/lib/data";
import { defaultLanguage, getLocalized } from "@/lib/i18n";

type UsefulInfoArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: UsefulInfoArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article introuvable",
      description: "Cet article n'existe pas sur Afro Izmir Hub.",
    };
  }

  return {
    title: getLocalized(post.title, defaultLanguage),
    description: getLocalized(post.excerpt, defaultLanguage),
    openGraph: {
      title: getLocalized(post.title, defaultLanguage),
      description: getLocalized(post.excerpt, defaultLanguage),
      type: "article",
      locale: "fr_FR",
    },
  };
}

export default async function UsefulInfoArticlePage({ params }: UsefulInfoArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedServices = post.relatedServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is ServiceItem => Boolean(service));

  const relatedArticles = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .filter(
      (candidate) =>
        candidate.category.fr === post.category.fr ||
        candidate.relatedServices.some((serviceSlug) => post.relatedServices.includes(serviceSlug)),
    )
    .slice(0, 2);

  return <UsefulInfoArticleContent post={post} relatedServices={relatedServices} relatedArticles={relatedArticles} />;
}
