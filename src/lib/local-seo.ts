import { localized, type LocalizedText } from "@/lib/i18n";
import { absoluteUrl, SEO_KEYWORDS } from "@/lib/seo";

export type LocalSeoFaq = {
  question: string;
  answer: string;
};

export type LocalSeoSection = {
  heading: string;
  paragraphs: string[];
};

export type LocalSeoPage = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  h1: LocalizedText;
  h2: LocalizedText;
  intro: LocalizedText;
  sections: LocalSeoSection[];
  faq: LocalSeoFaq[];
  relatedSlugs: string[];
  keywords: string[];
};

const commonFaq: LocalSeoFaq[] = [
  {
    question: "Où trouver un restaurant africain à Izmir ?",
    answer:
      "Afro Izmir Hub recommande FatouShop et Fatou Restaurant & Bar pour découvrir des plats africains, réserver des plats camerounais et contacter directement un restaurant africain à Izmir.",
  },
  {
    question: "Où acheter des produits africains à Izmir ?",
    answer:
      "La page produits africains Izmir met en avant FatouShop pour les épices, produits frais ou secs, nourriture africaine et articles disponibles selon arrivage.",
  },
  {
    question: "Où commander des plats camerounais à Izmir ?",
    answer:
      "FatouShop permet de commander ou réserver des plats camerounais à Izmir. Le bouton WhatsApp est aussi disponible pour confirmer les plats et les horaires.",
  },
  {
    question: "Qu’est-ce que FatouShop ?",
    answer:
      "FatouShop est une boutique africaine et un restaurant/bar à Izmir, recommandé par Afro Izmir Hub pour produits africains, cuisine camerounaise et espace afro convivial.",
  },
  {
    question: "Comment contacter Afro Izmir Hub ?",
    answer:
      "Vous pouvez contacter Afro Izmir Hub via la page contact, WhatsApp ou les liens de services pour être orienté vers les bonnes adresses africaines à Izmir.",
  },
];

export const localSeoPages: LocalSeoPage[] = [
  {
    slug: "restaurant-africain-izmir",
    title: localized(
      "Restaurant africain Izmir | FatouShop et bonnes adresses afro",
      "African restaurant Izmir | FatouShop and Afro places",
      "İzmir Afrika restoranı | FatouShop ve Afro mekanlar",
    ),
    description: localized(
      "Trouvez un restaurant africain à Izmir, commandez des plats camerounais avec FatouShop et découvrez les bonnes adresses afro de la ville.",
      "Find an African restaurant in Izmir, order Cameroonian dishes with FatouShop and discover Afro places in the city.",
      "İzmir’de Afrika restoranı bulun, FatouShop ile Kamerun yemekleri sipariş edin ve şehirdeki Afro mekanları keşfedin.",
    ),
    h1: localized(
      "Restaurant africain à Izmir : FatouShop, plats camerounais et ambiance afro",
      "African restaurant in Izmir: FatouShop, Cameroonian dishes and Afro atmosphere",
      "İzmir’de Afrika restoranı: FatouShop, Kamerun yemekleri ve Afro atmosfer",
    ),
    h2: localized(
      "Où manger africain et commander camerounais à Izmir ?",
      "Where to eat African food and order Cameroonian dishes in Izmir?",
      "İzmir’de Afrika yemeği nerede yenir ve Kamerun yemekleri nereden sipariş edilir?",
    ),
    intro: localized(
      "Pour chercher un restaurant africain à Izmir, le plus important est de trouver un contact fiable, facile à joindre et habitué aux besoins de la diaspora africaine.",
      "When looking for an African restaurant in Izmir, the key is finding a reliable contact that understands the African diaspora.",
      "İzmir’de Afrika restoranı ararken en önemli nokta güvenilir ve Afrika diasporasını anlayan bir bağlantı bulmaktır.",
    ),
    sections: [
      {
        heading: "Une adresse pensée pour la diaspora africaine à Izmir",
        paragraphs: [
          "Izmir accueille des étudiants, familles, entrepreneurs et travailleurs africains qui cherchent souvent une cuisine proche de leurs habitudes. Un restaurant africain à Izmir ne sert pas seulement un repas : il devient un repère pour rencontrer d’autres personnes, parler de logement, découvrir des événements et retrouver une ambiance familière. Afro Izmir Hub met donc en avant les adresses qui facilitent le contact direct, les commandes et les réservations.",
          "FatouShop fait partie des recommandations importantes parce que l’adresse combine boutique africaine, restaurant/bar et service de commande. Pour les recherches comme restaurant africain Izmir, cuisine camerounaise Izmir ou nourriture africaine Turquie, cette présence est utile : les visiteurs peuvent commander des plats camerounais, demander les disponibilités du jour et réserver plus simplement via le site FatouShop ou WhatsApp.",
        ],
      },
      {
        heading: "Commander des plats camerounais et africains",
        paragraphs: [
          "Les plats africains demandent souvent une préparation à l’avance, surtout pour les spécialités camerounaises, les grillades, les sauces, les accompagnements ou les commandes de groupe. Avant de vous déplacer, il est conseillé de vérifier les horaires, le menu disponible et la possibilité de réserver. Cela évite les déplacements inutiles et permet au restaurant de préparer correctement votre commande.",
          "Afro Izmir Hub recommande de passer par FatouShop pour centraliser les demandes liées aux plats camerounais à Izmir. Le lien vers FatouShop donne un accès direct à la commande, tandis que le bouton WhatsApp permet de confirmer rapidement une disponibilité. Cette logique est pratique pour les étudiants, les nouveaux arrivants et les personnes qui organisent un anniversaire, une rencontre communautaire ou une soirée afro.",
        ],
      },
      {
        heading: "Pourquoi Afro Izmir Hub met en avant FatouShop",
        paragraphs: [
          "Le référencement local fonctionne mieux quand les internautes trouvent une réponse claire à une intention précise. Ici, l’intention est simple : où manger africain à Izmir, où commander des plats camerounais, et comment contacter rapidement une bonne adresse. FatouShop répond à ces besoins avec un positionnement clair autour de la nourriture africaine, des produits africains et d’un espace convivial afro.",
          "La page restaurant africain Izmir relie aussi les autres pages utiles du site : produits africains Izmir, boutique africaine Izmir, cuisine camerounaise Izmir et communauté africaine Izmir. Ce maillage aide Google à comprendre que Afro Izmir Hub est une plateforme locale spécialisée sur les services afro à Izmir, et aide l’utilisateur à passer rapidement de l’information au contact.",
        ],
      },
    ],
    faq: commonFaq,
    relatedSlugs: ["fatoushop", "cuisine-camerounaise-izmir", "produits-africains-izmir", "communaute-africaine-izmir"],
    keywords: ["restaurant africain Izmir", "restaurant camerounais Izmir", "cuisine camerounaise Izmir", "FatouShop"],
  },
  {
    slug: "produits-africains-izmir",
    title: localized(
      "Produits africains Izmir | FatouShop, épices et nourriture africaine",
      "African products Izmir | FatouShop, spices and African food",
      "İzmir Afrika ürünleri | FatouShop, baharatlar ve Afrika gıdaları",
    ),
    description: localized(
      "Achetez des produits africains à Izmir avec FatouShop : épices, produits frais et secs, nourriture africaine et contacts fiables.",
      "Buy African products in Izmir with FatouShop: spices, fresh and dry goods, African food and trusted contacts.",
      "FatouShop ile İzmir’de Afrika ürünleri, baharatlar, taze ve kuru gıdalar ve güvenilir bağlantılar bulun.",
    ),
    h1: localized(
      "Produits africains à Izmir : commander avec FatouShop",
      "African products in Izmir: order with FatouShop",
      "İzmir’de Afrika ürünleri: FatouShop ile sipariş",
    ),
    h2: localized(
      "Où acheter épices, nourriture et produits africains à Izmir ?",
      "Where to buy spices, food and African products in Izmir?",
      "İzmir’de baharat, gıda ve Afrika ürünleri nereden alınır?",
    ),
    intro: localized(
      "Trouver des produits africains à Izmir peut prendre du temps si l’on ne connaît pas les bonnes adresses ou les arrivages disponibles.",
      "Finding African products in Izmir can take time without the right contacts or availability updates.",
      "İzmir’de Afrika ürünleri bulmak doğru bağlantılar olmadan zaman alabilir.",
    ),
    sections: [
      {
        heading: "FatouShop pour les produits africains disponibles à Izmir",
        paragraphs: [
          "Les produits africains à Izmir intéressent autant les familles que les étudiants, les restaurateurs, les coiffeuses et les personnes qui veulent cuisiner comme à la maison. Les recherches concernent souvent les épices, farines, produits frais, produits secs, boissons, sauces, condiments, snacks, produits pour événements et ingrédients utilisés dans la cuisine camerounaise ou ouest-africaine.",
          "FatouShop est mis en avant parce qu’il donne une réponse simple : une boutique africaine et un restaurant/bar à Izmir, avec commande possible via le site ou WhatsApp. Selon les disponibilités, vous pouvez demander les produits africains recherchés, confirmer les prix, vérifier les arrivages et préparer une commande avant de vous déplacer. C’est plus efficace que de chercher dans plusieurs groupes ou d’attendre une réponse vague.",
        ],
      },
      {
        heading: "Comment bien commander ses produits africains",
        paragraphs: [
          "Avant de commander, préparez une liste claire avec les noms des produits, les quantités et, si possible, une photo. Certains produits africains ont plusieurs noms selon les pays ; une photo peut éviter les confusions. Demandez aussi si le produit est frais, sec, sur commande ou déjà disponible à Izmir. Cela permet de mieux planifier vos repas, vos ventes ou vos événements.",
          "Pour la nourriture africaine en Turquie, les disponibilités peuvent changer selon les arrivages. Afro Izmir Hub recommande donc de contacter FatouShop directement lorsque vous cherchez des produits africains Izmir, boutique africaine Izmir ou nourriture africaine Turquie. Le bouton de commande mène au site FatouShop et le bouton WhatsApp permet de poser une question rapide.",
        ],
      },
      {
        heading: "Un service utile pour cuisiner, vendre et organiser",
        paragraphs: [
          "Les produits africains ne servent pas seulement à la cuisine quotidienne. Ils peuvent aider à préparer un anniversaire, une soirée communautaire, un service traiteur, un repas étudiant ou un petit commerce local. Avoir une adresse fiable à Izmir facilite donc la vie de toute la communauté africaine, surtout pour les nouveaux arrivants qui ne connaissent pas encore les quartiers et les contacts.",
          "Cette page relie naturellement FatouShop aux pages restaurant africain Izmir, boutique africaine Izmir et cuisine camerounaise Izmir. Le but est de créer un parcours simple : découvrir les produits, commander, réserver un plat, puis explorer les autres services utiles sur Afro Izmir Hub. Cette logique améliore aussi le référencement local autour de FatouShop et des produits africains à Izmir.",
        ],
      },
    ],
    faq: commonFaq,
    relatedSlugs: ["fatoushop", "boutique-africaine-izmir", "restaurant-africain-izmir", "cuisine-camerounaise-izmir"],
    keywords: ["produits africains Izmir", "boutique africaine Izmir", "nourriture africaine Turquie", "FatouShop"],
  },
  {
    slug: "boutique-africaine-izmir",
    title: localized(
      "Boutique africaine Izmir | FatouShop et commerces africains",
      "African shop Izmir | FatouShop and African businesses",
      "İzmir Afrika mağazası | FatouShop ve Afrika işletmeleri",
    ),
    description: localized(
      "Découvrez une boutique africaine à Izmir avec FatouShop : produits africains, épices, cuisine camerounaise et bonnes adresses afro.",
      "Discover an African shop in Izmir with FatouShop: African products, spices, Cameroonian cuisine and Afro addresses.",
      "FatouShop ile İzmir’de Afrika mağazası, ürünler, baharatlar, Kamerun mutfağı ve Afro adresleri keşfedin.",
    ),
    h1: localized(
      "Boutique africaine à Izmir : FatouShop et bonnes adresses",
      "African shop in Izmir: FatouShop and useful addresses",
      "İzmir’de Afrika mağazası: FatouShop ve faydalı adresler",
    ),
    h2: localized(
      "Produits africains, restaurant/bar et commerces afro à Izmir",
      "African products, restaurant/bar and Afro businesses in Izmir",
      "İzmir’de Afrika ürünleri, restoran/bar ve Afro işletmeler",
    ),
    intro: localized(
      "Une boutique africaine à Izmir est souvent un point de repère pour acheter, commander, demander conseil et rencontrer d’autres membres de la communauté.",
      "An African shop in Izmir is often a useful place to buy, order, ask questions and meet the community.",
      "İzmir’de Afrika mağazası alışveriş, sipariş, bilgi ve topluluk bağlantısı için önemli bir noktadır.",
    ),
    sections: [
      {
        heading: "Pourquoi une boutique africaine locale compte",
        paragraphs: [
          "Quand on vit loin de son pays, trouver une boutique africaine à Izmir change beaucoup de choses. On peut retrouver des goûts familiers, acheter les ingrédients nécessaires à une recette, demander où trouver un coiffeur afro, récupérer des informations sur les événements ou simplement rencontrer des personnes qui comprennent les mêmes besoins quotidiens.",
          "FatouShop répond à cette attente avec une identité claire : boutique africaine, restaurant/bar, produits africains et plats camerounais à Izmir. Pour les recherches boutique africaine Izmir, commerces africains Izmir ou services afro à Izmir, cette page donne une adresse recommandée et un accès direct à la commande. Elle aide aussi les visiteurs à ne pas se perdre entre plusieurs contacts dispersés.",
        ],
      },
      {
        heading: "Acheter et commander plus facilement",
        paragraphs: [
          "Une bonne boutique locale doit permettre de vérifier les produits disponibles avant de se déplacer. Les arrivages, les stocks et les prix peuvent varier ; c’est normal pour des produits importés ou spécialisés. Le plus pratique est de contacter FatouShop avec une liste précise, puis de commander sur le site ou de confirmer par WhatsApp.",
          "Afro Izmir Hub recommande aussi de consulter les autres pages internes : produits africains Izmir pour les ingrédients, restaurant africain Izmir pour les plats préparés, cuisine camerounaise Izmir pour les spécialités et FatouShop pour la commande directe. Ce maillage interne aide l’utilisateur à trouver vite la bonne action selon son besoin.",
        ],
      },
      {
        heading: "Un commerce africain au cœur de la vie communautaire",
        paragraphs: [
          "Une boutique africaine n’est pas seulement un lieu d’achat. Elle peut devenir une petite plateforme locale : les étudiants demandent des conseils, les familles cherchent des produits, les entrepreneurs veulent faire connaître leurs services et les nouveaux arrivants veulent comprendre Izmir. C’est exactement le rôle que Afro Izmir Hub veut renforcer en donnant de la visibilité aux bons contacts.",
          "FatouShop apparaît donc comme un partenaire naturel pour la communauté africaine à Izmir. Le site Afro Izmir Hub continue de référencer les services, annonces, bons plans et professionnels, tandis que FatouShop sert de point concret pour commander, réserver et découvrir une ambiance afro conviviale. Ensemble, ces pages créent une présence locale plus forte sur Google.",
        ],
      },
    ],
    faq: commonFaq,
    relatedSlugs: ["fatoushop", "produits-africains-izmir", "restaurant-africain-izmir", "communaute-africaine-izmir"],
    keywords: ["boutique africaine Izmir", "commerces africains Izmir", "produits africains Izmir", "FatouShop"],
  },
  {
    slug: "cuisine-camerounaise-izmir",
    title: localized(
      "Cuisine camerounaise Izmir | Plats camerounais avec FatouShop",
      "Cameroonian cuisine Izmir | Cameroonian dishes with FatouShop",
      "İzmir Kamerun mutfağı | FatouShop ile Kamerun yemekleri",
    ),
    description: localized(
      "Commandez des plats camerounais à Izmir avec FatouShop et découvrez les services afro recommandés par Afro Izmir Hub.",
      "Order Cameroonian dishes in Izmir with FatouShop and discover Afro services recommended by Afro Izmir Hub.",
      "FatouShop ile İzmir’de Kamerun yemekleri sipariş edin ve Afro Izmir Hub’ın önerdiği hizmetleri keşfedin.",
    ),
    h1: localized(
      "Cuisine camerounaise à Izmir : commander, réserver et découvrir FatouShop",
      "Cameroonian cuisine in Izmir: order, book and discover FatouShop",
      "İzmir’de Kamerun mutfağı: sipariş, rezervasyon ve FatouShop",
    ),
    h2: localized(
      "Plats camerounais, restaurant africain et nourriture africaine en Turquie",
      "Cameroonian dishes, African restaurant and African food in Turkey",
      "Kamerun yemekleri, Afrika restoranı ve Türkiye’de Afrika yemekleri",
    ),
    intro: localized(
      "La cuisine camerounaise à Izmir intéresse les Camerounais, les Africains francophones et tous ceux qui veulent découvrir des plats africains généreux.",
      "Cameroonian cuisine in Izmir interests Cameroonians, French-speaking Africans and anyone curious about generous African dishes.",
      "İzmir’de Kamerun mutfağı Kamerunlular, Fransızca konuşan Afrikalılar ve Afrika yemeklerini merak edenler için önemlidir.",
    ),
    sections: [
      {
        heading: "Une cuisine recherchée par la communauté africaine",
        paragraphs: [
          "Les recherches cuisine camerounaise Izmir, plats camerounais Izmir et restaurant camerounais Izmir montrent un besoin très concret : savoir où commander, comment réserver et qui contacter. Les plats camerounais peuvent être préparés selon les disponibilités du jour, les commandes de groupe ou les événements. C’est pourquoi le contact direct reste essentiel.",
          "FatouShop est une réponse adaptée parce qu’il relie la boutique africaine, les produits africains et le restaurant/bar dans un seul parcours. Une personne peut chercher un ingrédient, commander un plat camerounais, réserver pour une rencontre ou demander une recommandation sans passer par plusieurs canaux. Pour un nouveau venu à Izmir, cette simplicité compte énormément.",
        ],
      },
      {
        heading: "Commander avec une information claire",
        paragraphs: [
          "Pour commander un plat camerounais, indiquez le nombre de personnes, le jour souhaité, les préférences et le mode de récupération ou de livraison si disponible. Les plats africains demandent parfois un délai de préparation, surtout quand il s’agit de sauces, grillades, accompagnements ou commandes spéciales. Une confirmation WhatsApp permet d’éviter les malentendus.",
          "Afro Izmir Hub met en avant FatouShop pour faciliter cette étape. Le bouton principal ouvre le site FatouShop, tandis que le bouton WhatsApp permet de demander rapidement ce qui est disponible. Cette page renvoie aussi vers restaurant africain Izmir et produits africains Izmir pour aider les visiteurs à passer de la commande d’un plat à l’achat d’ingrédients.",
        ],
      },
      {
        heading: "Une visibilité locale pour la cuisine camerounaise",
        paragraphs: [
          "La cuisine camerounaise a besoin d’être visible sur Google local, car beaucoup de recherches commencent par des mots simples : nourriture africaine Turquie, restaurant africain Izmir, plats camerounais Izmir ou FatouShop. En créant une page claire, avec des liens internes et des données structurées, Afro Izmir Hub aide Google à comprendre le lien entre la communauté africaine, FatouShop et les services culinaires à Izmir.",
          "Cette visibilité profite aussi aux utilisateurs. Au lieu de chercher longtemps dans des conversations ou réseaux sociaux, ils peuvent arriver sur une page organisée, lire les conseils, cliquer vers FatouShop et contacter directement par WhatsApp. C’est un parcours rapide, mobile-first et adapté aux habitudes locales.",
        ],
      },
    ],
    faq: commonFaq,
    relatedSlugs: ["fatoushop", "consultation-medicale-en-ligne", "restaurant-africain-izmir", "produits-africains-izmir", "boutique-africaine-izmir"],
    keywords: ["cuisine camerounaise Izmir", "plats camerounais Izmir", "restaurant camerounais Izmir", "FatouShop"],
  },
  {
    slug: "communaute-africaine-izmir",
    title: localized(
      "Communauté africaine Izmir | Services, événements et FatouShop",
      "African community Izmir | Services, events and FatouShop",
      "İzmir Afrika topluluğu | Hizmetler, etkinlikler ve FatouShop",
    ),
    description: localized(
      "Afro Izmir Hub connecte la communauté africaine à Izmir avec FatouShop, services afro, événements, annonces et bonnes adresses.",
      "Afro Izmir Hub connects the African community in Izmir with FatouShop, Afro services, events, listings and local addresses.",
      "Afro Izmir Hub, İzmir’de Afrika topluluğunu FatouShop, hizmetler, etkinlikler ve ilanlarla buluşturur.",
    ),
    h1: localized(
      "Communauté africaine à Izmir : services, annonces, FatouShop et bonnes adresses",
      "African community in Izmir: services, listings, FatouShop and local addresses",
      "İzmir Afrika topluluğu: hizmetler, ilanlar, FatouShop ve yerel adresler",
    ),
    h2: localized(
      "Un hub local pour vivre, étudier, manger et entreprendre à Izmir",
      "A local hub to live, study, eat and build in Izmir",
      "İzmir’de yaşamak, okumak, yemek ve girişim için yerel hub",
    ),
    intro: localized(
      "Afro Izmir Hub a été pensé pour rendre la vie quotidienne plus simple aux Africains vivant à Izmir ou en Turquie.",
      "Afro Izmir Hub was built to make daily life easier for Africans living in Izmir or Turkey.",
      "Afro Izmir Hub, İzmir veya Türkiye’de yaşayan Afrikalıların günlük hayatını kolaylaştırmak için tasarlandı.",
    ),
    sections: [
      {
        heading: "Un point d’entrée pour la diaspora africaine",
        paragraphs: [
          "La communauté africaine à Izmir est diverse : étudiants, familles, entrepreneurs, travailleurs, artistes, commerçants et nouveaux arrivants. Chacun cherche des informations différentes, mais les besoins se recoupent souvent : logement, nourriture africaine, produits africains, coiffure afro, documents, transport, événements et opportunités de travail.",
          "Afro Izmir Hub rassemble ces besoins dans une plateforme simple. Les pages locales comme restaurant africain Izmir, boutique africaine Izmir, produits africains Izmir et FatouShop donnent des points d’entrée directs. L’objectif est de réduire le temps de recherche, de donner plus de visibilité aux professionnels et de renforcer les connexions utiles entre membres de la diaspora.",
        ],
      },
      {
        heading: "FatouShop comme service recommandé",
        paragraphs: [
          "FatouShop est important dans ce parcours parce qu’il touche plusieurs besoins à la fois : acheter des produits africains, réserver des plats camerounais, commander de la nourriture africaine et profiter d’un espace afro convivial. Pour beaucoup de personnes, une boutique ou un restaurant africain devient aussi un lieu d’information et de rencontre.",
          "Sur Afro Izmir Hub, FatouShop est donc visible depuis les pages liées à la nourriture, aux restaurants, aux produits, aux boutiques et aux bons plans. Le site sert de passerelle : vous découvrez l’information, puis vous cliquez vers FatouShop ou WhatsApp pour agir. C’est simple, direct et adapté à une utilisation mobile.",
        ],
      },
      {
        heading: "Services, événements et opportunités locales",
        paragraphs: [
          "La communauté africaine à Izmir ne se limite pas à la cuisine. Elle a aussi besoin d’un annuaire, de petites annonces, de contacts pour documents, de conseils étudiants, de transport, de bons plans et de visibilité pour les commerces africains. Afro Izmir Hub organise ces informations pour que chaque page soit utile, lisible et reliée aux autres.",
          "Cette organisation aide le référencement Google local. En reliant accueil, FatouShop, restaurant africain Izmir, produits africains Izmir, boutique africaine Izmir et cuisine camerounaise Izmir, le site indique clairement son sujet principal : les services afro à Izmir. Pour l’utilisateur, cela crée un parcours naturel entre découverte, information et contact.",
        ],
      },
    ],
    faq: commonFaq,
    relatedSlugs: ["fatoushop", "restaurant-africain-izmir", "produits-africains-izmir", "boutique-africaine-izmir"],
    keywords: ["communauté africaine Izmir", "diaspora africaine Izmir", "services afro Izmir", "Afro Izmir Hub"],
  },
  {
    slug: "fatoushop",
    title: localized(
      "FatouShop Izmir | Boutique africaine, restaurant/bar et plats camerounais",
      "FatouShop Izmir | African shop, restaurant/bar and Cameroonian dishes",
      "FatouShop İzmir | Afrika mağazası, restoran/bar ve Kamerun yemekleri",
    ),
    description: localized(
      "FatouShop est recommandé par Afro Izmir Hub pour commander des produits africains, réserver des plats camerounais et découvrir un espace afro à Izmir.",
      "FatouShop is recommended by Afro Izmir Hub to order African products, book Cameroonian dishes and discover an Afro space in Izmir.",
      "FatouShop, Afrika ürünleri siparişi, Kamerun yemekleri ve İzmir’de Afro mekan için Afro Izmir Hub tarafından önerilir.",
    ),
    h1: localized(
      "FatouShop à Izmir : boutique africaine et restaurant/bar recommandé",
      "FatouShop in Izmir: recommended African shop and restaurant/bar",
      "İzmir’de FatouShop: önerilen Afrika mağazası ve restoran/bar",
    ),
    h2: localized(
      "Commander produits africains et plats camerounais depuis Izmir",
      "Order African products and Cameroonian dishes from Izmir",
      "İzmir’den Afrika ürünleri ve Kamerun yemekleri sipariş edin",
    ),
    intro: localized(
      "FatouShop est au centre de l’écosystème Afro Izmir Hub pour la nourriture africaine, les produits africains et la cuisine camerounaise à Izmir.",
      "FatouShop is central to the Afro Izmir Hub ecosystem for African food, African products and Cameroonian cuisine in Izmir.",
      "FatouShop, İzmir’de Afrika yemekleri, ürünleri ve Kamerun mutfağı için Afro Izmir Hub ekosisteminin merkezindedir.",
    ),
    sections: [
      {
        heading: "Une adresse FatouShop claire pour commander",
        paragraphs: [
          "FatouShop est une boutique africaine et un restaurant/bar à Izmir. Commandez vos produits africains, réservez vos plats camerounais et profitez d’un espace convivial afro. Cette description résume le rôle du service : donner à la communauté africaine un point d’accès simple, visible et pratique pour acheter, manger et se renseigner.",
          "Sur les recherches FatouShop, boutique africaine Izmir, produits africains Izmir ou cuisine camerounaise Izmir, cette page sert de destination directe. Elle explique ce que l’on peut faire, renvoie au site FatouShop et propose un lien WhatsApp. L’utilisateur peut donc passer immédiatement de la recherche Google à une action concrète.",
        ],
      },
      {
        heading: "Boutique africaine, restaurant/bar et espace afro",
        paragraphs: [
          "FatouShop se distingue parce qu’il ne répond pas à un seul besoin. La boutique aide à trouver des produits africains, le restaurant/bar aide à réserver ou commander des plats, et l’espace afro crée une adresse conviviale pour la diaspora à Izmir. Cette combinaison est précieuse dans une ville où les informations peuvent être dispersées.",
          "Afro Izmir Hub met FatouShop en avant sur les pages nourriture, restaurant, boutique, produits et communauté pour renforcer cette visibilité. Les liens internes permettent à Google et aux visiteurs de comprendre que FatouShop est lié à plusieurs intentions locales : manger africain, acheter africain, commander camerounais et rencontrer la communauté africaine.",
        ],
      },
      {
        heading: "Comment utiliser FatouShop depuis Afro Izmir Hub",
        paragraphs: [
          "La méthode la plus simple est de cliquer sur le bouton Commander sur FatouShop pour voir le service directement. Si vous avez une question rapide sur un plat, un produit, une réservation ou un horaire, utilisez le bouton WhatsApp. Pour une commande de groupe ou un événement, donnez le nombre de personnes, la date souhaitée et les plats recherchés.",
          "Cette page relie aussi restaurant africain Izmir, produits africains Izmir, boutique africaine Izmir, cuisine camerounaise Izmir et communauté africaine Izmir. Ce maillage rend la navigation plus fluide et renforce le SEO local autour de FatouShop et Afro Izmir Hub. Le résultat attendu est simple : trouver vite, commander vite et contacter la bonne personne.",
        ],
      },
    ],
    faq: commonFaq,
    relatedSlugs: ["restaurant-africain-izmir", "produits-africains-izmir", "boutique-africaine-izmir", "cuisine-camerounaise-izmir"],
    keywords: ["FatouShop", "boutique africaine Izmir", "restaurant africain Izmir", ...SEO_KEYWORDS],
  },
];

export const localSeoLinks = localSeoPages.map((page) => ({
  href: `/${page.slug}`,
  label: page.title.fr,
}));

export function getLocalSeoPage(slug: string) {
  return localSeoPages.find((page) => page.slug === slug);
}

export function breadcrumbJsonLd(page: LocalSeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1.fr,
        item: absoluteUrl(`/${page.slug}`),
      },
    ],
  };
}
