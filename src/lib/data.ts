import { localized, type LocalizedText } from "@/lib/i18n";

export const SITE_CONFIG = {
  name: "Afro Izmir Hub",
  tagline: localized(
    "Services, annonces et bons plans pour la communauté africaine en Turquie.",
    "Services, listings and deals for the African community in Turkey.",
    "Türkiye’deki Afrika topluluğu için hizmetler, ilanlar ve fırsatlar.",
  ),
  whatsappNumber: "+905317818795",
  whatsappDisplay: "+905317818795",
  email: "contact@afro-izmir-hub.com",
  city: localized("Izmir, Turquie", "Izmir, Turkey", "İzmir, Türkiye"),
  socials: {
    instagram: "https://instagram.com/afroizmirhub",
    facebook: "https://www.facebook.com/afro.izmir.hub/",
    tiktok: "https://tiktok.com/@afroizmirhub",
  },
};

export const FATOUSHOP_CONFIG = {
  name: "FatouShop",
  url: "https://fatoushop.vercel.app",
  whatsappNumber: "+905317818795",
  whatsappUrl: "https://wa.me/905317818795",
  description: localized(
    "FatouShop est une boutique africaine et un restaurant/bar à Izmir. Commandez vos produits africains, réservez vos plats camerounais et profitez d’un espace convivial afro.",
    "FatouShop is an African shop and restaurant/bar in Izmir. Order African products, book Cameroonian dishes and enjoy a friendly Afro space in Izmir.",
    "FatouShop, İzmir’de Afrika ürünleri satan bir mağaza ve restoran/bardır. Afrika ürünlerinizi sipariş edin, Kamerun yemeklerinizi rezerve edin ve İzmir’de samimi bir Afro mekandan yararlanın.",
  ),
  shortDescription: localized(
    "Boutique africaine, plats camerounais, restaurant/bar et commandes à Izmir.",
    "African shop, Cameroonian dishes, restaurant/bar and orders in Izmir.",
    "İzmir’de Afrika mağazası, Kamerun yemekleri, restoran/bar ve sipariş.",
  ),
};

export const navLinks = [
  { href: "/", labelKey: "navHome" },
  { href: "/services", labelKey: "navServices" },
  { href: "/consultation-medicale-en-ligne", labelKey: "navMedical" },
  { href: "/annuaire", labelKey: "navDirectory" },
  { href: "/annonces", labelKey: "navAnnouncements" },
  { href: "/bons-plans", labelKey: "navDeals" },
  { href: "/infos-utiles", labelKey: "navInfo" },
  { href: "/partenariat", labelKey: "navPartnership" },
  { href: "/contact", labelKey: "navContact" },
] as const;

export const categories = [
  "Restaurants africains",
  "Boutiques africaines",
  "Coiffure afro",
  "Logement",
  "Etudiants",
  "Transfert d'argent",
  "Evenements",
  "Transport",
  "Assistance visa / documents",
  "Emploi / petits jobs",
  "Santé",
] as const;

export type Category = (typeof categories)[number];

export const categoryLabels: Record<Category, LocalizedText> = {
  "Restaurants africains": localized("Restaurants africains", "African restaurants", "Afrika restoranları"),
  "Boutiques africaines": localized("Boutiques africaines", "African shops", "Afrika mağazaları"),
  "Coiffure afro": localized("Coiffure afro", "Afro hair styling", "Afro saç ve kuaför"),
  Logement: localized("Logement", "Housing", "Konut"),
  Etudiants: localized("Étudiants", "Students", "Öğrenciler"),
  "Transfert d'argent": localized("Transfert d’argent", "Money transfer", "Para transferi"),
  Evenements: localized("Événements", "Events", "Etkinlikler"),
  Transport: localized("Transport", "Transport", "Ulaşım"),
  "Assistance visa / documents": localized("Assistance visa / documents", "Visa / document support", "Vize / belge desteği"),
  "Emploi / petits jobs": localized("Emploi / petits jobs", "Jobs / side gigs", "İş / ek işler"),
  Santé: localized("Santé", "Health", "Sağlık"),
};

export type BadgeLabel = "Partenaire" | "Premium" | "Urgent" | "Sponsorise";

export type ServiceIconName =
  | "utensils"
  | "shopping-bag"
  | "scissors"
  | "home"
  | "graduation-cap"
  | "banknote"
  | "calendar-days"
  | "car"
  | "file-text"
  | "briefcase"
  | "stethoscope";

export type ServiceProvider = {
  name: string;
  city: LocalizedText;
  description: LocalizedText;
  whatsapp: string;
  isPremium?: boolean;
};

export type ServiceFaq = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type ServiceItem = {
  id: string;
  slug: string;
  category: Category;
  title: LocalizedText;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  icon: ServiceIconName;
  image?: string;
  backgroundImage: string;
  href?: string;
  benefits: LocalizedText[];
  practicalInfo: LocalizedText[];
  providers: ServiceProvider[];
  faq: ServiceFaq[];
  whatsappMessage: LocalizedText;
  highlights: LocalizedText[];
  city: LocalizedText;
  featured?: boolean;
};

const phone = SITE_CONFIG.whatsappNumber;

export const services: ServiceItem[] = [
  {
    id: "restaurants",
    slug: "restaurants-africains",
    category: "Restaurants africains",
    title: categoryLabels["Restaurants africains"],
    shortDescription: localized(
      "Trouvez les meilleurs restaurants africains à Izmir.",
      "Find the best African restaurants in Izmir.",
      "İzmir’deki en iyi Afrika restoranlarını bulun.",
    ),
    longDescription: localized(
      "Découvrez les restaurants, bars et traiteurs africains disponibles à Izmir pour manger sur place, commander des plats maison ou réserver un événement.",
      "Discover African restaurants, bars and caterers in Izmir for dining in, ordering homemade dishes or booking events.",
      "İzmir’de yerinde yemek, ev yapımı yemek siparişi veya etkinlik rezervasyonu için Afrika restoranları, barları ve catering bağlantılarını keşfedin.",
    ),
    icon: "utensils",
    image: "/images/afro-izmir-hero.png",
    backgroundImage: "/images/services/restaurant-africain.jpg",
    benefits: [
      localized("Trouver rapidement un restaurant africain fiable", "Quickly find a trusted African restaurant", "Güvenilir bir Afrika restoranını hızlıca bulun"),
      localized("Commander des plats africains à l’avance", "Order African dishes in advance", "Afrika yemeklerini önceden sipariş edin"),
      localized("Réserver pour un anniversaire ou événement", "Book for a birthday or event", "Doğum günü veya etkinlik için rezervasyon yapın"),
      localized("Contacter directement par WhatsApp", "Contact directly on WhatsApp", "WhatsApp üzerinden doğrudan iletişime geçin"),
    ],
    practicalInfo: [
      localized("Vérifiez les horaires avant de vous déplacer", "Check opening hours before going", "Gitmeden önce çalışma saatlerini kontrol edin"),
      localized("Demandez si la livraison est disponible", "Ask whether delivery is available", "Teslimat olup olmadığını sorun"),
      localized("Réservez à l’avance pour les grands groupes", "Book ahead for large groups", "Kalabalık gruplar için önceden rezervasyon yapın"),
    ],
    providers: [
      {
        name: "FatouShop",
        city: localized("Izmir", "Izmir", "İzmir"),
        description: FATOUSHOP_CONFIG.description,
        whatsapp: FATOUSHOP_CONFIG.whatsappNumber,
        isPremium: true,
      },
      {
        name: "Fatou Restaurant & Bar",
        city: localized("Izmir", "Izmir", "İzmir"),
        description: localized(
          "Restaurant africain recommandé pour plats africains, ambiance afro, commandes et événements.",
          "Recommended African restaurant for African dishes, Afro atmosphere, orders and events.",
          "Afrika yemekleri, afro atmosfer, siparişler ve etkinlikler için önerilen Afrika restoranı.",
        ),
        whatsapp: phone,
        isPremium: true,
      },
      {
        name: "Mama Africa Kitchen",
        city: localized("Basmane, Izmir", "Basmane, Izmir", "Basmane, İzmir"),
        description: localized(
          "Plats sénégalais, ivoiriens et camerounais sur commande, livraison possible.",
          "Senegalese, Ivorian and Cameroonian dishes by order, delivery possible.",
          "Senegal, Fildişi Sahili ve Kamerun yemekleri siparişle, teslimat mümkün.",
        ),
        whatsapp: phone,
      },
    ],
    faq: [
      {
        question: localized("Puis-je commander à l’avance ?", "Can I order in advance?", "Önceden sipariş verebilir miyim?"),
        answer: localized(
          "Oui, la majorité des restaurants et traiteurs acceptent les commandes et réservations via WhatsApp.",
          "Yes, most restaurants and caterers accept orders and bookings via WhatsApp.",
          "Evet, çoğu restoran ve catering hizmeti WhatsApp üzerinden sipariş ve rezervasyon alır.",
        ),
      },
    ],
    whatsappMessage: localized(
      "Bonjour, je cherche un restaurant africain à Izmir.",
      "Hello, I am looking for an African restaurant in Izmir.",
      "Merhaba, İzmir’de bir Afrika restoranı arıyorum.",
    ),
    highlights: [
      localized("Cuisine ouest-africaine", "West African cuisine", "Batı Afrika mutfağı"),
      localized("Plats camerounais", "Cameroonian dishes", "Kamerun yemekleri"),
      localized("Livraison possible", "Delivery possible", "Teslimat mümkün"),
    ],
    city: localized("Izmir", "Izmir", "İzmir"),
    featured: true,
  },
  {
    id: "boutiques",
    slug: "boutiques-africaines",
    category: "Boutiques africaines",
    title: categoryLabels["Boutiques africaines"],
    shortDescription: localized(
      "Achetez produits alimentaires, cosmétiques, épices et accessoires africains.",
      "Shop African food products, cosmetics, spices and accessories.",
      "Afrika gıda ürünleri, kozmetik, baharat ve aksesuarlarını satın alın.",
    ),
    longDescription: localized(
      "Retrouvez les boutiques africaines d'Izmir pour acheter produits importés, épices, cosmétiques, tissus, accessoires et articles du quotidien.",
      "Find African shops in Izmir for imported products, spices, cosmetics, fabrics, accessories and everyday items.",
      "İzmir’de ithal ürünler, baharatlar, kozmetik, kumaş, aksesuar ve günlük ihtiyaçlar için Afrika mağazalarını bulun.",
    ),
    icon: "shopping-bag",
    image: "/images/afro-izmir-hero.png",
    backgroundImage: "/images/services/boutique-africaine.jpg",
    benefits: [
      localized("Identifier les boutiques proches de votre quartier", "Find shops near your area", "Mahallenize yakın mağazaları bulun"),
      localized("Vérifier la disponibilité avant de vous déplacer", "Check availability before going", "Gitmeden önce stok durumunu kontrol edin"),
      localized("Commander certains articles par WhatsApp", "Order some items by WhatsApp", "Bazı ürünleri WhatsApp ile sipariş edin"),
      localized("Découvrir des offres partenaires", "Discover partner offers", "Partner fırsatlarını keşfedin"),
    ],
    practicalInfo: [
      localized("Envoyez une photo du produit recherché si possible", "Send a photo of the product if possible", "Mümkünse aradığınız ürünün fotoğrafını gönderin"),
      localized("Demandez le prix et le stock avant de partir", "Ask for price and stock before going", "Gitmeden önce fiyat ve stok sorun"),
      localized("Comparez les options pour les produits rares", "Compare options for rare products", "Nadir ürünler için seçenekleri karşılaştırın"),
    ],
    providers: [
      {
        name: "FatouShop",
        city: localized("Izmir", "Izmir", "İzmir"),
        description: FATOUSHOP_CONFIG.description,
        whatsapp: FATOUSHOP_CONFIG.whatsappNumber,
        isPremium: true,
      },
      {
        name: "Fatou Produits Africains",
        city: localized("Izmir", "Izmir", "İzmir"),
        description: localized(
          "Produits africains, épices, nourriture, produits frais et secs selon disponibilité.",
          "African products, spices, food, fresh and dry goods depending on availability.",
          "Stok durumuna göre Afrika ürünleri, baharatlar, gıda, taze ve kuru ürünler.",
        ),
        whatsapp: phone,
        isPremium: true,
      },
    ],
    faq: [
      {
        question: localized("Puis-je demander un produit spécifique ?", "Can I request a specific product?", "Belirli bir ürün sorabilir miyim?"),
        answer: localized(
          "Oui, envoyez le nom ou une photo pour vérifier le stock ou une prochaine livraison.",
          "Yes, send the name or a photo to check stock or the next delivery.",
          "Evet, stok veya sonraki teslimatı kontrol etmek için isim veya fotoğraf gönderin.",
        ),
      },
    ],
    whatsappMessage: localized(
      "Bonjour Fatou, je viens depuis Afro Izmir Hub. Je cherche des produits africains disponibles à Izmir.",
      "Hello Fatou, I come from Afro Izmir Hub. I am looking for African products available in Izmir.",
      "Merhaba Fatou, Afro Izmir Hub’dan geliyorum. İzmir’de mevcut Afrika ürünlerini arıyorum.",
    ),
    highlights: [
      localized("Produits importés", "Imported products", "İthal ürünler"),
      localized("Cosmétiques", "Cosmetics", "Kozmetik"),
      localized("Tissus et accessoires", "Fabrics and accessories", "Kumaş ve aksesuarlar"),
    ],
    city: localized("Izmir", "Izmir", "İzmir"),
    featured: true,
  },
  {
    id: "coiffure",
    slug: "coiffure-afro",
    category: "Coiffure afro",
    title: categoryLabels["Coiffure afro"],
    shortDescription: localized("Trouvez une coiffeuse ou un barbier spécialisé afro.", "Find an Afro hair stylist or barber.", "Afro saç uzmanı kuaför veya berber bulun."),
    longDescription: localized(
      "Prenez rendez-vous pour tresses, locks, perruques, soins naturels et coupes.",
      "Book braids, locks, wigs, natural hair care and cuts.",
      "Örgü, locks, peruk, doğal saç bakımı ve kesim için randevu alın.",
    ),
    icon: "scissors",
    image: "/images/afro-izmir-hero.png",
    backgroundImage: "/images/services/coiffure-afro.jpg",
    benefits: [
      localized("Comparer les spécialités avant de réserver", "Compare specialties before booking", "Randevu almadan önce uzmanlıkları karşılaştırın"),
      localized("Obtenir un rendez-vous plus rapidement", "Get an appointment faster", "Daha hızlı randevu alın"),
      localized("Demander le prix et la durée", "Ask for price and duration", "Fiyat ve süreyi sorun"),
      localized("Trouver des prestataires proches", "Find nearby providers", "Yakındaki hizmet sağlayıcıları bulun"),
    ],
    practicalInfo: [
      localized("Envoyez une photo du modèle souhaité", "Send a photo of the style you want", "İstediğiniz modelin fotoğrafını gönderin"),
      localized("Confirmez si les mèches sont incluses", "Confirm whether hair extensions are included", "Ek saçların dahil olup olmadığını teyit edin"),
      localized("Arrivez à l'heure pour les prestations longues", "Be on time for long appointments", "Uzun işlemler için zamanında gelin"),
    ],
    providers: [
      {
        name: "Akwa Beauty Braids",
        city: localized("Basmane, Izmir", "Basmane, Izmir", "Basmane, İzmir"),
        description: localized("Tresses, knotless braids, locks, pose perruque et soins naturels.", "Braids, knotless braids, locks, wigs and natural care.", "Örgü, knotless braids, locks, peruk ve doğal bakım."),
        whatsapp: phone,
        isPremium: true,
      },
    ],
    faq: [
      {
        question: localized("Dois-je acheter les mèches moi-même ?", "Should I buy hair extensions myself?", "Ek saçları kendim mi almalıyım?"),
        answer: localized("Cela dépend du prestataire. Demandez avant de confirmer.", "It depends on the provider. Ask before confirming.", "Hizmet sağlayıcıya bağlıdır. Onaylamadan önce sorun."),
      },
    ],
    whatsappMessage: localized("Bonjour, je cherche une coiffure afro à Izmir.", "Hello, I am looking for Afro hair styling in Izmir.", "Merhaba, İzmir’de afro saç hizmeti arıyorum."),
    highlights: [localized("Tresses", "Braids", "Örgü"), localized("Locks", "Locks", "Locks"), localized("Soins cheveux crépus", "Afro hair care", "Afro saç bakımı")],
    city: localized("Izmir", "Izmir", "İzmir"),
    featured: true,
  },
  {
    id: "medical-online",
    slug: "consultation-medicale-en-ligne",
    href: "/consultation-medicale-en-ligne",
    category: "Santé",
    title: localized(
      "Consultations médicales en ligne",
      "Online medical consultations",
      "Online tıbbi konsültasyonlar",
    ),
    shortDescription: localized(
      "Besoin d’un avis médical ? Réservez une consultation en ligne avec un médecin agréé.",
      "Need medical guidance? Book an online consultation with a licensed doctor.",
      "Tıbbi görüşe mi ihtiyacınız var? Lisanslı bir doktorla online konsültasyon ayırın.",
    ),
    longDescription: localized(
      "Afro Izmir Hub propose un service de consultation médicale en ligne avec un médecin agréé pour les personnes vivant à Izmir ou ailleurs en Turquie.",
      "Afro Izmir Hub offers online medical consultations with a licensed doctor for people living in Izmir or elsewhere in Turkey.",
      "Afro Izmir Hub, İzmir’de veya Türkiye’nin başka şehirlerinde yaşayan kişiler için lisanslı doktorla online tıbbi konsültasyon hizmeti sunar.",
    ),
    icon: "stethoscope",
    image: "/images/afro-izmir-hero.png",
    backgroundImage: "/images/services/consultation-medicale.svg",
    benefits: [
      localized("Parler à un médecin agréé à distance", "Speak remotely with a licensed doctor", "Lisanslı bir doktorla uzaktan görüşün"),
      localized("Obtenir une orientation médicale professionnelle", "Get professional medical guidance", "Profesyonel tıbbi yönlendirme alın"),
      localized("Préparer une visite médicale en Turquie", "Prepare for a medical visit in Turkey", "Türkiye’de tıbbi ziyaret için hazırlanın"),
      localized("Comprendre les prochaines étapes possibles", "Understand possible next steps", "Olası sonraki adımları anlayın"),
    ],
    practicalInfo: [
      localized("Ce service ne remplace pas les urgences médicales", "This service does not replace medical emergencies", "Bu hizmet acil tıbbi durumların yerini tutmaz"),
      localized("Préparez vos symptômes, questions et documents utiles", "Prepare your symptoms, questions and useful documents", "Belirtilerinizi, sorularınızı ve gerekli belgeleri hazırlayın"),
      localized("Les langues disponibles dépendent de la disponibilité du médecin", "Available languages depend on the doctor’s availability", "Mevcut diller doktorun uygunluğuna bağlıdır"),
    ],
    providers: [
      {
        name: "Consultation médicale Afro Izmir Hub",
        city: localized("Izmir / Turquie", "Izmir / Turkey", "İzmir / Türkiye"),
        description: localized(
          "Orientation médicale en ligne avec un médecin agréé, selon disponibilité.",
          "Online medical guidance with a licensed doctor, depending on availability.",
          "Uygunluğa bağlı olarak lisanslı doktorla online tıbbi yönlendirme.",
        ),
        whatsapp: phone,
        isPremium: true,
      },
    ],
    faq: [
      {
        question: localized("Est-ce adapté aux urgences ?", "Is it suitable for emergencies?", "Acil durumlar için uygun mu?"),
        answer: localized(
          "Non. En cas d’urgence, appelez immédiatement le 112 en Turquie.",
          "No. In an emergency, call 112 immediately in Turkey.",
          "Hayır. Acil durumda Türkiye’de hemen 112’yi arayın.",
        ),
      },
      {
        question: localized("Puis-je recevoir une ordonnance ?", "Can I receive a prescription?", "Reçete alabilir miyim?"),
        answer: localized(
          "Les possibilités d’ordonnance dépendent du cadre légal, du type de consultation et de l’évaluation du médecin.",
          "Prescription possibilities depend on the legal framework, consultation type and the doctor’s assessment.",
          "Reçete imkanı yasal çerçeveye, konsültasyon türüne ve doktor değerlendirmesine bağlıdır.",
        ),
      },
    ],
    whatsappMessage: localized(
      "Bonjour Afro Izmir Hub, je souhaite réserver une consultation médicale en ligne.",
      "Hello Afro Izmir Hub, I would like to book an online medical consultation.",
      "Merhaba Afro Izmir Hub, online tıbbi konsültasyon ayırmak istiyorum.",
    ),
    highlights: [
      localized("Médecin agréé", "Licensed doctor", "Lisanslı doktor"),
      localized("Français / Anglais / Turc", "French / English / Turkish", "Fransızca / İngilizce / Türkçe"),
      localized("En ligne", "Online", "Online"),
    ],
    city: localized("Izmir / Turquie", "Izmir / Turkey", "İzmir / Türkiye"),
    featured: true,
  },
  ...[
    {
      id: "logement",
      slug: "logement",
      category: "Logement" as Category,
      icon: "home" as ServiceIconName,
      backgroundImage: "/images/services/logement-izmir.jpg",
      title: categoryLabels.Logement,
      shortDescription: localized("Trouvez une chambre, une colocation ou un studio à Izmir.", "Find a room, shared flat or studio in Izmir.", "İzmir’de oda, paylaşımlı ev veya stüdyo bulun."),
      longDescription: localized("Contacts et conseils pour trouver rapidement un logement à Izmir.", "Contacts and tips to quickly find housing in Izmir.", "İzmir’de hızlıca konut bulmak için bağlantılar ve öneriler."),
      highlights: [localized("Colocations", "Shared flats", "Paylaşımlı evler"), localized("Studios", "Studios", "Stüdyolar"), localized("Quartiers étudiants", "Student areas", "Öğrenci bölgeleri")],
      whatsappMessage: localized("Bonjour, je cherche un logement à Izmir.", "Hello, I am looking for housing in Izmir.", "Merhaba, İzmir’de konut arıyorum."),
    },
    {
      id: "etudiants",
      slug: "etudiants",
      category: "Etudiants" as Category,
      icon: "graduation-cap" as ServiceIconName,
      backgroundImage: "/images/services/etudiants-africains.jpg",
      title: categoryLabels.Etudiants,
      shortDescription: localized("Infos pratiques pour les étudiants africains en Turquie.", "Practical info for African students in Turkey.", "Türkiye’deki Afrikalı öğrenciler için pratik bilgiler."),
      longDescription: localized("Conseils pour université, résidence, transport, logement et vie quotidienne.", "Tips for university, residence, transport, housing and daily life.", "Üniversite, ikamet, ulaşım, konut ve günlük yaşam için öneriler."),
      highlights: [localized("Universités", "Universities", "Üniversiteler"), localized("Résidence", "Residence", "İkamet"), localized("Vie pratique", "Practical life", "Günlük yaşam")],
      whatsappMessage: localized("Bonjour, je suis étudiant africain et je cherche des informations pratiques à Izmir.", "Hello, I am an African student looking for practical information in Izmir.", "Merhaba, İzmir’de pratik bilgi arayan Afrikalı bir öğrenciyim."),
    },
    {
      id: "money",
      slug: "transfert-argent",
      category: "Transfert d'argent" as Category,
      icon: "banknote" as ServiceIconName,
      backgroundImage: "/images/services/transfert-argent.jpg",
      title: categoryLabels["Transfert d'argent"],
      shortDescription: localized("Trouvez des contacts pour envoyer ou recevoir de l’argent.", "Find contacts to send or receive money.", "Para göndermek veya almak için bağlantılar bulun."),
      longDescription: localized("Mise en relation avec des partenaires utiles pour les transferts d’argent.", "Connections with useful partners for money transfers.", "Para transferi için faydalı partnerlerle bağlantı."),
      highlights: [localized("Commissions claires", "Clear fees", "Net komisyonlar"), localized("Contacts vérifiés", "Verified contacts", "Doğrulanmış kişiler"), localized("Support WhatsApp", "WhatsApp support", "WhatsApp desteği")],
      whatsappMessage: localized("Bonjour, je cherche une solution de transfert d’argent en Turquie.", "Hello, I am looking for a money transfer solution in Turkey.", "Merhaba, Türkiye’de para transferi çözümü arıyorum."),
    },
    {
      id: "events",
      slug: "evenements",
      category: "Evenements" as Category,
      icon: "calendar-days" as ServiceIconName,
      backgroundImage: "/images/services/evenements-afro.jpg",
      title: categoryLabels.Evenements,
      shortDescription: localized("Découvrez les soirées, rencontres et événements afro à Izmir.", "Discover Afro parties, meetups and events in Izmir.", "İzmir’de afro geceleri, buluşmalar ve etkinlikleri keşfedin."),
      longDescription: localized("Sorties, musique, networking et événements culturels pour la communauté.", "Outings, music, networking and cultural events for the community.", "Topluluk için etkinlikler, müzik, networking ve kültürel buluşmalar."),
      highlights: [localized("Soirées", "Parties", "Geceler"), localized("Networking", "Networking", "Networking"), localized("Culture", "Culture", "Kültür")],
      whatsappMessage: localized("Bonjour, je cherche des événements africains à Izmir.", "Hello, I am looking for African events in Izmir.", "Merhaba, İzmir’de Afrika etkinlikleri arıyorum."),
    },
    {
      id: "transport",
      slug: "transport",
      category: "Transport" as Category,
      icon: "car" as ServiceIconName,
      backgroundImage: "/images/services/transport-izmir.jpg",
      title: categoryLabels.Transport,
      shortDescription: localized("Trouvez chauffeurs, transferts aéroport et aides au déménagement.", "Find drivers, airport transfers and moving help.", "Şoför, havaalanı transferi ve taşınma yardımı bulun."),
      longDescription: localized("Contacts utiles pour trajets en ville, aéroport, déménagements et courses.", "Useful contacts for city rides, airport, moving and errands.", "Şehir içi yolculuk, havaalanı, taşınma ve işler için faydalı bağlantılar."),
      highlights: [localized("Aéroport", "Airport", "Havaalanı"), localized("Déménagement", "Moving", "Taşınma"), localized("Intervilles", "Intercity", "Şehirler arası")],
      whatsappMessage: localized("Bonjour, je cherche un service de transport à Izmir.", "Hello, I am looking for transport in Izmir.", "Merhaba, İzmir’de ulaşım hizmeti arıyorum."),
    },
    {
      id: "documents",
      slug: "assistance-visa-documents",
      category: "Assistance visa / documents" as Category,
      icon: "file-text" as ServiceIconName,
      backgroundImage: "/images/services/documents-turquie.jpg",
      title: categoryLabels["Assistance visa / documents"],
      shortDescription: localized("Obtenez une orientation pour résidence, traductions et documents.", "Get guidance for residence, translations and documents.", "İkamet, çeviri ve belgeler için yönlendirme alın."),
      longDescription: localized("Conseils généraux pour résidence, assurance, traduction et dossiers administratifs.", "General guidance for residence, insurance, translation and administrative files.", "İkamet, sigorta, çeviri ve idari dosyalar için genel yönlendirme."),
      highlights: [localized("Résidence", "Residence", "İkamet"), localized("Traduction", "Translation", "Çeviri"), localized("Rendez-vous", "Appointments", "Randevular")],
      whatsappMessage: localized("Bonjour, je cherche une assistance pour visa ou documents en Turquie.", "Hello, I need visa or document support in Turkey.", "Merhaba, Türkiye’de vize veya belge desteği arıyorum."),
    },
    {
      id: "jobs",
      slug: "emploi-petits-jobs",
      category: "Emploi / petits jobs" as Category,
      icon: "briefcase" as ServiceIconName,
      backgroundImage: "/images/services/emploi-jobs.jpg",
      title: categoryLabels["Emploi / petits jobs"],
      shortDescription: localized("Trouvez des missions, petits jobs et opportunités locales.", "Find gigs, side jobs and local opportunities.", "Görevler, ek işler ve yerel fırsatlar bulun."),
      longDescription: localized("Offres locales, missions ponctuelles, services et opportunités étudiantes.", "Local offers, one-off gigs, services and student opportunities.", "Yerel teklifler, kısa işler, hizmetler ve öğrenci fırsatları."),
      highlights: [localized("Jobs étudiants", "Student jobs", "Öğrenci işleri"), localized("Missions", "Gigs", "Görevler"), localized("Services", "Services", "Hizmetler")],
      whatsappMessage: localized("Bonjour, je cherche un emploi ou un petit job à Izmir.", "Hello, I am looking for a job or side gig in Izmir.", "Merhaba, İzmir’de iş veya ek iş arıyorum."),
    },
  ].map((service) => ({
    image: "/images/afro-izmir-hero.png",
    benefits: [
      localized("Gagner du temps avec des contacts utiles", "Save time with useful contacts", "Faydalı bağlantılarla zaman kazanın"),
      localized("Contacter directement par WhatsApp", "Contact directly on WhatsApp", "WhatsApp üzerinden doğrudan iletişime geçin"),
      localized("Comparer les options disponibles", "Compare available options", "Mevcut seçenekleri karşılaştırın"),
      localized("Avancer avec des informations pratiques", "Move forward with practical information", "Pratik bilgilerle ilerleyin"),
    ],
    practicalInfo: [
      localized("Confirmez les détails avant de vous déplacer", "Confirm details before going", "Gitmeden önce detayları doğrulayın"),
      localized("Gardez une trace écrite des échanges importants", "Keep written records of important exchanges", "Önemli görüşmelerin yazılı kaydını tutun"),
      localized("Demandez les conditions avant de valider", "Ask for conditions before confirming", "Onaylamadan önce koşulları sorun"),
    ],
    providers: [
      {
        name: "Afro Izmir Hub",
        city: localized("Izmir", "Izmir", "İzmir"),
        description: localized(
          "Orientation et mise en relation avec des contacts locaux selon votre besoin.",
          "Guidance and connection with local contacts based on your need.",
          "İhtiyacınıza göre yerel bağlantılarla yönlendirme ve tanıştırma.",
        ),
        whatsapp: phone,
        isPremium: true,
      },
    ],
    faq: [
      {
        question: localized("Puis-je demander une recommandation ?", "Can I ask for a recommendation?", "Öneri isteyebilir miyim?"),
        answer: localized(
          "Oui, envoyez votre besoin par WhatsApp et Afro Izmir Hub vous orientera vers un contact adapté.",
          "Yes, send your need by WhatsApp and Afro Izmir Hub will guide you to a suitable contact.",
          "Evet, ihtiyacınızı WhatsApp ile gönderin; Afro Izmir Hub sizi uygun bir bağlantıya yönlendirir.",
        ),
      },
    ],
    city: localized("Izmir", "Izmir", "İzmir"),
    featured: false,
    ...service,
  })),
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export type Professional = {
  id: string;
  name: string;
  category: Category;
  description: LocalizedText;
  city: LocalizedText;
  whatsapp: string;
  badge?: Extract<BadgeLabel, "Partenaire" | "Premium">;
};

export const professionals: Professional[] = [
  {
    id: "consultation-medicale-online",
    name: "Consultation médicale en ligne",
    category: "Santé",
    description: localized(
      "Consultation médicale en ligne avec un médecin agréé, pour une orientation professionnelle selon disponibilité.",
      "Online medical consultation with a licensed doctor for professional guidance depending on availability.",
      "Uygunluğa bağlı olarak profesyonel yönlendirme için lisanslı doktorla online tıbbi konsültasyon.",
    ),
    city: localized("Izmir / Turquie", "Izmir / Turkey", "İzmir / Türkiye"),
    whatsapp: phone,
    badge: "Premium",
  },
  {
    id: "fatoushop",
    name: "FatouShop",
    category: "Boutiques africaines",
    description: FATOUSHOP_CONFIG.description,
    city: localized("Izmir", "Izmir", "İzmir"),
    whatsapp: FATOUSHOP_CONFIG.whatsappNumber,
    badge: "Premium",
  },
  {
    id: "fatou-restaurant-bar",
    name: "Fatou Restaurant & Bar",
    category: "Restaurants africains",
    description: localized(
      "Restaurant africain recommandé pour plats africains, ambiance afro, commandes et événements.",
      "Recommended African restaurant for dishes, Afro atmosphere, orders and events.",
      "Afrika yemekleri, afro atmosfer, siparişler ve etkinlikler için önerilen restoran.",
    ),
    city: localized("Izmir", "Izmir", "İzmir"),
    whatsapp: phone,
    badge: "Premium",
  },
  {
    id: "fatou-produits",
    name: "Fatou Produits Africains",
    category: "Boutiques africaines",
    description: localized(
      "Produits africains, épices, nourriture, produits frais et secs selon disponibilité.",
      "African products, spices, food, fresh and dry goods depending on availability.",
      "Stok durumuna göre Afrika ürünleri, baharatlar, gıda, taze ve kuru ürünler.",
    ),
    city: localized("Izmir", "Izmir", "İzmir"),
    whatsapp: phone,
    badge: "Premium",
  },
  {
    id: "akwa-beauty",
    name: "Akwa Beauty Braids",
    category: "Coiffure afro",
    description: localized(
      "Tresses, knotless braids, locks, pose perruque et soins naturels sur rendez-vous.",
      "Braids, knotless braids, locks, wig install and natural care by appointment.",
      "Randevuyla örgü, knotless braids, locks, peruk ve doğal bakım.",
    ),
    city: localized("Basmane, Izmir", "Basmane, Izmir", "Basmane, İzmir"),
    whatsapp: phone,
    badge: "Partenaire",
  },
  {
    id: "visa-help-tr",
    name: "Visa Help TR",
    category: "Assistance visa / documents",
    description: localized(
      "Aide pour résidence, assurance, traduction, notarisation et suivi de rendez-vous.",
      "Support for residence, insurance, translation, notarization and appointment follow-up.",
      "İkamet, sigorta, çeviri, noter ve randevu takibi için destek.",
    ),
    city: localized("Izmir", "Izmir", "İzmir"),
    whatsapp: phone,
    badge: "Partenaire",
  },
];

export type Announcement = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  price: LocalizedText;
  category: Category;
  city: LocalizedText;
  whatsapp: string;
  date: string;
  badge?: Extract<BadgeLabel, "Urgent" | "Sponsorise">;
};

export const announcements: Announcement[] = [
  {
    id: "colocation-bornova",
    title: localized("Chambre en colocation à Bornova", "Room in shared flat in Bornova", "Bornova’da paylaşımlı evde oda"),
    description: localized(
      "Chambre meublée proche métro et universités. Charges partagées, disponible rapidement.",
      "Furnished room near metro and universities. Shared bills, available soon.",
      "Metro ve üniversitelere yakın mobilyalı oda. Giderler paylaşımlı, yakında müsait.",
    ),
    price: localized("6 500 TL / mois", "6,500 TL / month", "Aylık 6.500 TL"),
    category: "Logement",
    city: localized("Bornova", "Bornova", "Bornova"),
    whatsapp: phone,
    date: "2026-05-01",
    badge: "Urgent",
  },
  {
    id: "livraison-plats",
    title: localized("Plats camerounais sur FatouShop ce week-end", "Cameroonian dishes on FatouShop this weekend", "Bu hafta sonu FatouShop’ta Kamerun yemekleri"),
    description: localized(
      "Commandez vos plats africains et camerounais sur FatouShop ou via WhatsApp avant vendredi soir.",
      "Order African and Cameroonian dishes on FatouShop or via WhatsApp before Friday evening.",
      "Afrika ve Kamerun yemeklerinizi cuma akşamına kadar FatouShop veya WhatsApp üzerinden sipariş edin.",
    ),
    price: localized("À partir de 250 TL", "From 250 TL", "250 TL’den başlayan"),
    category: "Restaurants africains",
    city: localized("Izmir", "Izmir", "İzmir"),
    whatsapp: FATOUSHOP_CONFIG.whatsappNumber,
    date: "2026-04-30",
    badge: "Sponsorise",
  },
  {
    id: "petit-job-serveur",
    title: localized("Serveur bilingue pour événement", "Bilingual waiter for event", "Etkinlik için iki dilli garson"),
    description: localized(
      "Mission samedi soir pour événement privé. Français ou anglais demandé.",
      "Saturday evening gig for a private event. French or English required.",
      "Özel etkinlik için cumartesi akşamı iş. Fransızca veya İngilizce gerekli.",
    ),
    price: localized("1 200 TL", "1,200 TL", "1.200 TL"),
    category: "Emploi / petits jobs",
    city: localized("Alsancak", "Alsancak", "Alsancak"),
    whatsapp: phone,
    date: "2026-04-29",
  },
];

export type Deal = {
  id: string;
  title: LocalizedText;
  partner: string;
  description: LocalizedText;
  value: LocalizedText;
  category: Category;
  validUntil: LocalizedText;
  whatsapp: string;
};

export const deals: Deal[] = [
  {
    id: "fatou-products",
    title: localized("Pack produits africains", "African products bundle", "Afrika ürünleri paketi"),
    partner: "FatouShop",
    description: localized(
      "Produits africains, épices, nourriture, produits frais et secs selon disponibilité.",
      "African products, spices, food, fresh and dry goods depending on availability.",
      "Stok durumuna göre Afrika ürünleri, baharatlar, gıda, taze ve kuru ürünler.",
    ),
    value: localized("Offre partenaire", "Partner offer", "Partner fırsatı"),
    category: "Boutiques africaines",
    validUntil: localized("Selon disponibilité", "Depending on availability", "Stok durumuna göre"),
    whatsapp: FATOUSHOP_CONFIG.whatsappNumber,
  },
  {
    id: "braids-student",
    title: localized("Tarif étudiant coiffure", "Student hair styling rate", "Öğrenci saç hizmeti fiyatı"),
    partner: "Akwa Beauty Braids",
    description: localized("Remise spéciale sur tresses et soins afro avec carte étudiante.", "Special discount on braids and Afro care with student card.", "Öğrenci kartı ile örgü ve afro bakımda özel indirim."),
    value: localized("-10%", "-10%", "-10%"),
    category: "Coiffure afro",
    validUntil: localized("15 juin 2026", "June 15, 2026", "15 Haziran 2026"),
    whatsapp: phone,
  },
  {
    id: "fatou-restaurant",
    title: localized("Menu week-end chez Fatou", "Weekend menu at Fatou", "Fatou’da hafta sonu menüsü"),
    partner: "FatouShop",
    description: localized(
      "Plats africains et camerounais, commandes et réservations via FatouShop ou WhatsApp.",
      "African and Cameroonian dishes, orders and bookings via FatouShop or WhatsApp.",
      "Afrika ve Kamerun yemekleri, FatouShop veya WhatsApp üzerinden sipariş ve rezervasyon.",
    ),
    value: localized("Sur demande", "On request", "Talep üzerine"),
    category: "Restaurants africains",
    validUntil: localized("Chaque week-end", "Every weekend", "Her hafta sonu"),
    whatsapp: FATOUSHOP_CONFIG.whatsappNumber,
  },
];

export type BlogContentSection = {
  heading: LocalizedText;
  paragraphs: LocalizedText[];
};

export type BlogPost = {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  readingTime: LocalizedText;
  updatedAt: string;
  contentSections: BlogContentSection[];
  usefulTips: LocalizedText[];
  warnings: LocalizedText[];
  relatedServices: string[];
  ctaWhatsappMessage: LocalizedText;
  ctaLabel?: LocalizedText;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "trouver-logement-izmir",
    category: categoryLabels.Logement,
    title: localized("Comment trouver un logement à Izmir", "How to find housing in Izmir", "İzmir’de konut nasıl bulunur"),
    excerpt: localized(
      "Quartiers populaires, contrat, caution, charges, chauffage et points à vérifier avant de payer.",
      "Popular neighborhoods, contract, deposit, bills, heating and checks before paying.",
      "Popüler semtler, sözleşme, depozito, aidatlar, ısınma ve ödeme öncesi kontroller.",
    ),
    readingTime: localized("7 min", "7 min", "7 dk"),
    updatedAt: "2026-05-02",
    contentSections: [
      {
        heading: localized("Choisir le bon quartier", "Choose the right neighborhood", "Doğru semti seçin"),
        paragraphs: [
          localized(
            "Konak est central, Bornova est populaire auprès des étudiants, Buca offre beaucoup d'options résidentielles, Karşıyaka est agréable et Alsancak est vivant et central.",
            "Konak is central, Bornova is popular with students, Buca has many residential options, Karşıyaka is pleasant and Alsancak is lively and central.",
            "Konak merkezi, Bornova öğrenciler arasında popüler, Buca’da çok konut seçeneği var, Karşıyaka keyifli ve Alsancak canlı ve merkezidir.",
          ),
        ],
      },
      {
        heading: localized("Contrat, caution et charges", "Contract, deposit and bills", "Sözleşme, depozito ve giderler"),
        paragraphs: [
          localized(
            "Demandez ce qui est inclus : eau, électricité, gaz, internet, chauffage et charges communes. Gardez toujours une trace écrite et un reçu.",
            "Ask what is included: water, electricity, gas, internet, heating and building fees. Always keep written records and receipts.",
            "Su, elektrik, gaz, internet, ısınma ve apartman giderlerinin dahil olup olmadığını sorun. Her zaman yazılı kayıt ve makbuz saklayın.",
          ),
        ],
      },
    ],
    usefulTips: [
      localized("Visitez avant de payer si possible.", "Visit before paying if possible.", "Mümkünse ödemeden önce evi görün."),
      localized("Demandez si le chauffage est inclus.", "Ask whether heating is included.", "Isınmanın dahil olup olmadığını sorun."),
      localized("Comparez le temps de transport quotidien.", "Compare daily commute time.", "Günlük ulaşım süresini karşılaştırın."),
    ],
    warnings: [
      localized("Évitez de payer sans visite, contrat clair ou reçu.", "Avoid paying without a visit, clear contract or receipt.", "Evi görmeden, net sözleşme veya makbuz olmadan ödeme yapmayın."),
      localized("Vérifiez toujours l'identité du contact.", "Always verify the contact identity.", "İletişim kurduğunuz kişinin kimliğini doğrulayın."),
    ],
    relatedServices: ["logement", "transport", "assistance-visa-documents"],
    ctaWhatsappMessage: localized(
      "Bonjour, je viens depuis Afro Izmir Hub. J’ai besoin d’informations pour trouver un logement à Izmir.",
      "Hello, I come from Afro Izmir Hub. I need information to find housing in Izmir.",
      "Merhaba, Afro Izmir Hub’dan geliyorum. İzmir’de konut bulmak için bilgiye ihtiyacım var.",
    ),
  },
  {
    slug: "produits-africains-izmir",
    category: localized("Shopping", "Shopping", "Alışveriş"),
    title: localized("Où acheter des produits africains à Izmir", "Where to buy African products in Izmir", "İzmir’de Afrika ürünleri nereden alınır"),
    excerpt: localized("Fatou est le contact principal pour produits africains, épices, nourriture et produits frais ou secs.", "Fatou is the main contact for African products, spices, food and fresh or dry goods.", "Fatou, Afrika ürünleri, baharat, gıda ve taze/kuru ürünler için ana bağlantıdır."),
    readingTime: localized("5 min", "5 min", "5 dk"),
    updatedAt: "2026-05-02",
    contentSections: [
      {
        heading: localized("Fatou, contact principal", "Fatou, the main contact", "Ana bağlantı Fatou"),
        paragraphs: [
          localized(
            "Fatou propose des produits africains, épices, nourriture, produits frais et secs selon disponibilité. Envoyez un message avec le produit recherché.",
            "Fatou offers African products, spices, food, fresh and dry goods depending on availability. Send a message with what you need.",
            "Fatou stok durumuna göre Afrika ürünleri, baharat, gıda, taze ve kuru ürünler sunar. Aradığınız ürünü mesajla gönderin.",
          ),
          localized(
            "Vous pouvez commander directement depuis FatouShop : produits africains, épices, nourriture, produits frais et secs selon disponibilité.",
            "You can order directly from FatouShop: African products, spices, food, fresh and dry goods depending on availability.",
            "FatouShop üzerinden doğrudan sipariş verebilirsiniz: stok durumuna göre Afrika ürünleri, baharatlar, gıda, taze ve kuru ürünler.",
          ),
        ],
      },
    ],
    usefulTips: [
      localized("Envoyez une photo du produit si possible.", "Send a product photo if possible.", "Mümkünse ürün fotoğrafı gönderin."),
      localized("Confirmez disponibilité et prix avant de vous déplacer.", "Confirm availability and price before going.", "Gitmeden önce stok ve fiyatı doğrulayın."),
    ],
    warnings: [
      localized("La disponibilité dépend des arrivages.", "Availability depends on deliveries.", "Stok durumu gelen ürünlere bağlıdır."),
    ],
    relatedServices: ["boutiques-africaines", "restaurants-africains"],
    ctaWhatsappMessage: localized(
      "Bonjour Fatou, je viens depuis Afro Izmir Hub. Je cherche des produits africains disponibles à Izmir.",
      "Hello Fatou, I come from Afro Izmir Hub. I am looking for African products available in Izmir.",
      "Merhaba Fatou, Afro Izmir Hub’dan geliyorum. İzmir’de mevcut Afrika ürünlerini arıyorum.",
    ),
    ctaLabel: localized("Contacter Fatou", "Contact Fatou", "Fatou ile iletişime geç"),
  },
  {
    slug: "conseils-etudiants-africains",
    category: categoryLabels.Etudiants,
    title: localized("Conseils pour étudiants africains en Turquie", "Tips for African students in Turkey", "Türkiye’deki Afrikalı öğrenciler için öneriler"),
    excerpt: localized("Résidence, transport, carte étudiant, banque, téléphone, logement et intégration.", "Residence, transport, student card, bank, phone, housing and integration.", "İkamet, ulaşım, öğrenci kartı, banka, telefon, konut ve uyum."),
    readingTime: localized("8 min", "8 min", "8 dk"),
    updatedAt: "2026-05-02",
    contentSections: [
      {
        heading: localized("Organiser les premières démarches", "Organize your first steps", "İlk adımları düzenleyin"),
        paragraphs: [
          localized(
            "Gardez vos documents, inscription universitaire, assurance, adresse, téléphone turc et informations de résidence bien organisés.",
            "Keep your documents, university registration, insurance, address, Turkish phone and residence information organized.",
            "Belgelerinizi, üniversite kaydınızı, sigortanızı, adresinizi, Türk telefonunuzu ve ikamet bilgilerinizi düzenli tutun.",
          ),
        ],
      },
    ],
    usefulTips: [
      localized("Rejoignez des groupes étudiants fiables.", "Join trusted student groups.", "Güvenilir öğrenci gruplarına katılın."),
      localized("Apprenez quelques phrases utiles en turc.", "Learn a few useful Turkish phrases.", "Birkaç faydalı Türkçe cümle öğrenin."),
    ],
    warnings: [
      localized("Ne partagez pas vos documents dans des groupes publics.", "Do not share your documents in public groups.", "Belgelerinizi herkese açık gruplarda paylaşmayın."),
    ],
    relatedServices: ["etudiants", "logement", "assistance-visa-documents"],
    ctaWhatsappMessage: localized(
      "Bonjour, je viens depuis Afro Izmir Hub. Je suis étudiant africain en Turquie et j’ai besoin de conseils pratiques.",
      "Hello, I come from Afro Izmir Hub. I am an African student in Turkey and need practical advice.",
      "Merhaba, Afro Izmir Hub’dan geliyorum. Türkiye’de Afrikalı bir öğrenciyim ve pratik tavsiyeye ihtiyacım var.",
    ),
  },
  {
    slug: "restaurants-africains-izmir",
    category: categoryLabels["Restaurants africains"],
    title: localized("Restaurants africains à Izmir", "African restaurants in Izmir", "İzmir’de Afrika restoranları"),
    excerpt: localized("Fatou Restaurant & Bar est l’adresse recommandée pour plats africains, ambiance afro, commandes et événements.", "Fatou Restaurant & Bar is the recommended spot for African dishes, Afro atmosphere, orders and events.", "Fatou Restaurant & Bar, Afrika yemekleri, afro atmosfer, siparişler ve etkinlikler için önerilen yerdir."),
    readingTime: localized("5 min", "5 min", "5 dk"),
    updatedAt: "2026-05-02",
    contentSections: [
      {
        heading: localized("Fatou Restaurant & Bar", "Fatou Restaurant & Bar", "Fatou Restaurant & Bar"),
        paragraphs: [
          localized(
            "C’est une adresse recommandée pour plats africains, cuisine camerounaise, ambiance afro, commandes et événements. Les commandes et réservations peuvent passer par FatouShop.",
            "It is a recommended spot for African dishes, Cameroonian cuisine, Afro atmosphere, orders and events. Orders and bookings can go through FatouShop.",
            "Afrika yemekleri, Kamerun mutfağı, afro atmosfer, siparişler ve etkinlikler için önerilen bir yerdir. Sipariş ve rezervasyonlar FatouShop üzerinden yapılabilir.",
          ),
        ],
      },
    ],
    usefulTips: [
      localized("Demandez les plats disponibles avant de venir.", "Ask about available dishes before going.", "Gitmeden önce mevcut yemekleri sorun."),
      localized("Réservez à l’avance pour les groupes.", "Book ahead for groups.", "Gruplar için önceden rezervasyon yapın."),
    ],
    warnings: [
      localized("Les plats peuvent varier selon le jour.", "Dishes can vary by day.", "Yemekler güne göre değişebilir."),
    ],
    relatedServices: ["restaurants-africains", "evenements"],
    ctaWhatsappMessage: localized(
      "Bonjour Fatou, je viens depuis Afro Izmir Hub. Je souhaite réserver ou commander un plat africain.",
      "Hello Fatou, I come from Afro Izmir Hub. I would like to book or order an African dish.",
      "Merhaba Fatou, Afro Izmir Hub’dan geliyorum. Rezervasyon yapmak veya Afrika yemeği sipariş etmek istiyorum.",
    ),
    ctaLabel: localized("Réserver chez Fatou", "Book at Fatou", "Fatou’da rezervasyon yap"),
  },
  {
    slug: "documents-vivre-turquie",
    category: localized("Documents", "Documents", "Belgeler"),
    title: localized("Documents utiles pour vivre en Turquie", "Useful documents for living in Turkey", "Türkiye’de yaşamak için gerekli belgeler"),
    excerpt: localized("Ikamet, assurance santé, adresse officielle, compte bancaire, numéro fiscal, téléphone turc et documents selon profil.", "Ikamet, health insurance, official address, bank account, tax number, Turkish phone and profile-specific documents.", "İkamet, sağlık sigortası, resmi adres, banka hesabı, vergi numarası, Türk telefonu ve profile göre belgeler."),
    readingTime: localized("9 min", "9 min", "9 dk"),
    updatedAt: "2026-05-02",
    contentSections: [
      {
        heading: localized("Les documents souvent demandés", "Commonly requested documents", "Sık istenen belgeler"),
        paragraphs: [
          localized(
            "Selon votre profil, vous pouvez avoir besoin d’un ikamet, d’une assurance santé, d’une adresse officielle, d’un compte bancaire, d’un numéro fiscal et d’un téléphone turc.",
            "Depending on your profile, you may need an ikamet, health insurance, official address, bank account, tax number and Turkish phone.",
            "Profilinize göre ikamet, sağlık sigortası, resmi adres, banka hesabı, vergi numarası ve Türk telefonu gerekebilir.",
          ),
          localized(
            "Ces informations sont générales et ne remplacent pas un avis juridique ou une décision officielle.",
            "This information is general and does not replace legal advice or an official decision.",
            "Bu bilgiler geneldir; hukuki danışmanlık veya resmi karar yerine geçmez.",
          ),
        ],
      },
    ],
    usefulTips: [
      localized("Gardez des copies papier et numériques.", "Keep paper and digital copies.", "Kağıt ve dijital kopyalar saklayın."),
      localized("Vérifiez les exigences officielles avant chaque rendez-vous.", "Check official requirements before each appointment.", "Her randevu öncesi resmi gereklilikleri kontrol edin."),
    ],
    warnings: [
      localized("Les règles peuvent changer. Vérifiez toujours les informations auprès des autorités turques ou des services officiels.", "Rules can change. Always verify information with Turkish authorities or official services.", "Kurallar değişebilir. Bilgileri her zaman Türk makamları veya resmi hizmetlerden doğrulayın."),
    ],
    relatedServices: ["assistance-visa-documents", "etudiants"],
    ctaWhatsappMessage: localized(
      "Bonjour, je viens depuis Afro Izmir Hub. J’ai besoin d’informations générales sur les documents utiles pour vivre en Turquie.",
      "Hello, I come from Afro Izmir Hub. I need general information about useful documents for living in Turkey.",
      "Merhaba, Afro Izmir Hub’dan geliyorum. Türkiye’de yaşamak için gerekli belgeler hakkında genel bilgiye ihtiyacım var.",
    ),
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export type PricingPlan = {
  name: "Basic" | "Premium" | "Sponsorise";
  label: LocalizedText;
  price: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    label: localized("Basic", "Basic", "Basic"),
    price: localized("499 TL / mois", "499 TL / month", "Aylık 499 TL"),
    description: localized("Visibilité simple dans l'annuaire et contact WhatsApp direct.", "Simple directory visibility and direct WhatsApp contact.", "Rehberde temel görünürlük ve doğrudan WhatsApp iletişimi."),
    features: [
      localized("Fiche professionnelle", "Professional profile", "Profesyonel profil"),
      localized("Catégorie visible", "Visible category", "Görünür kategori"),
      localized("Bouton WhatsApp", "WhatsApp button", "WhatsApp düğmesi"),
      localized("Modification mensuelle", "Monthly update", "Aylık güncelleme"),
    ],
  },
  {
    name: "Premium",
    label: localized("Premium", "Premium", "Premium"),
    price: localized("1 499 TL / mois", "1,499 TL / month", "Aylık 1.499 TL"),
    description: localized("Mise en avant sur la page d'accueil et badge Premium.", "Featured placement on the homepage and Premium badge.", "Ana sayfada öne çıkarma ve Premium rozeti."),
    features: [
      localized("Tout Basic", "Everything in Basic", "Basic’teki her şey"),
      localized("Badge Premium", "Premium badge", "Premium rozeti"),
      localized("Placement accueil", "Homepage placement", "Ana sayfa konumu"),
      localized("Publication réseaux sociaux", "Social media post", "Sosyal medya paylaşımı"),
    ],
    highlighted: true,
  },
  {
    name: "Sponsorise",
    label: localized("Sponsorisé", "Sponsored", "Sponsorlu"),
    price: localized("2 499 TL / mois", "2,499 TL / month", "Aylık 2.499 TL"),
    description: localized("Annonce prioritaire avec badge sponsorisé pour vendre plus vite.", "Priority listing with sponsored badge to sell faster.", "Daha hızlı satış için sponsorlu rozetli öncelikli ilan."),
    features: [
      localized("Tout Premium", "Everything in Premium", "Premium’daki her şey"),
      localized("Annonce prioritaire", "Priority listing", "Öncelikli ilan"),
      localized("Badge Sponsorisé", "Sponsored badge", "Sponsorlu rozet"),
      localized("Campagne WhatsApp ciblée", "Targeted WhatsApp campaign", "Hedefli WhatsApp kampanyası"),
    ],
  },
];
