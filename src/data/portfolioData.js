export const artisanData = {
  name: "Joel Boton",
  title: "Maître Tisserand de Kanvô",
  role: "Artisan d'Art ◆ Pagne traditionnel béninois ◆ Fait main",
  city: "Porto-Novo, Bénin",
  address: "Quartier Kandévié, Porto-Novo",
  phone: "+229 01 41 57 27 13",
  whatsappNumber: "2290141572713",
  email: "jobtn90@gmail.com",
  experienceYears: 8,
  creationsCount: "150+",
  clientsCount: "60+",
  studentsCount: "35+",
  tagline: "Le Kanvô ne se porte pas seulement, il raconte notre histoire, notre dignité et notre culture.",
  bioParagraphs: [
    "Maître artisan basé à Porto-Novo, dans le quartier historique de Kandévié, Joel Boton perpétue et modernise l'art noble du tissage du Kanvô — le prestigieux pagne tissé traditionnel du Bénin.",
    "Formé auprès des anciens et doté d'une vision contemporaine, il associe la rigueur du métier à tisser traditionnel à des harmonies de couleurs raffinées, notamment des nuances violettes améthystes et des fibres de coton pur.",
    "Passionné par la transmission, Joel accueille également des apprentis et des passionnés au sein de son atelier pour enseigner les gestes ancestraux du tissage de pagne."
  ]
};

export const filterCategories = [
  { id: "all", label: "Tout" },
  { id: "apparat", label: "Pagnes d'apparat" },
  { id: "etoles", label: "Étoles & Écharpes" },
  { id: "deco", label: "Décoration d'intérieur" },
  { id: "pret-a-porter", label: "Prêt-à-porter & Moderne" },
  { id: "mesure", label: "Sur-mesure" }
];

export const portfolioItems = [
  {
    id: "01",
    cat: "apparat",
    title: "Pagne Royal d'Apparat « Kandévié »",
    subtitle: "Pagne 3 pièces traditionnel tissé en coton fin et fil métallisé",
    tags: ["Kanvô", "Cérémonie", "Coton pur"],
    year: "2025",
    highlight: true,
    price: "45 000 FCFA"
  },
  {
    id: "02",
    cat: "etoles",
    title: "Étole Noble « Améthyste & Ivoire »",
    subtitle: "Étole douce tissée main aux lisières contrastées",
    tags: ["Étole", "Améthyste", "Fait main"],
    year: "2025",
    highlight: false,
    price: "30 000 FCFA"
  },
  {
    id: "03",
    cat: "apparat",
    title: "Parure Traditionnelle « Ayidohoué »",
    subtitle: "Tissage aux motifs géométriques béninois et liserés violets",
    tags: ["Tradition", "Kanvô d'or", "Cérémonie"],
    year: "2024",
    highlight: false,
    price: "45 000 FCFA"
  },
  {
    id: "04",
    cat: "deco",
    title: "Plaid & Housses de Coussins « Danxomè »",
    subtitle: "Ensemble textile pour intérieur moderne et chaleureux",
    tags: ["Maison", "Coton béninois", "Design"],
    year: "2025",
    highlight: true,
    price: "35 000 FCFA"
  },
  {
    id: "05",
    cat: "pret-a-porter",
    title: "Bandes Kanvô pour Veste Contemporaine",
    subtitle: "Tissage structuré pour confection haute couture",
    tags: ["Mode", "Stylisme", "Prêt-à-porter"],
    year: "2024",
    highlight: false,
    price: "30 000 FCFA"
  },
  {
    id: "06",
    cat: "mesure",
    title: "Parure Complète Mariage Coutumier",
    subtitle: "Commande exclusive pour couple avec broderies de motifs symboliques",
    tags: ["Sur-mesure", "Mariage", "Prestige"],
    year: "2025",
    highlight: false,
    price: "Sur devis"
  },
  {
    id: "07",
    cat: "etoles",
    title: "Écharpe d'Honneur et Protocolaire",
    subtitle: "Finitions torsadées à la main, teintes naturelles",
    tags: ["Étole", "Protocole", "Coton peigné"],
    year: "2024",
    highlight: false,
    price: "30 000 FCFA"
  },
  {
    id: "08",
    cat: "deco",
    title: "Tenture Murale « Mémoire de Tisserand »",
    subtitle: "Grand format tissé main mettant en valeur les bandes assemblées",
    tags: ["Tenture", "Art mural", "Galerie"],
    year: "2025",
    highlight: false,
    price: "40 000 FCFA"
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Échange & Personnalisation",
    desc: "Nous discutons de votre événement ou de vos envies : choix des couleurs, symboles du Kanvô, dimensions et usages."
  },
  {
    num: "02",
    title: "Ourdissage & Montage",
    desc: "Préparation méticuleuse des fils de coton sur l'ourdissoir, puis enfilage fil par fil sur les lisses et le peigne du métier."
  },
  {
    num: "03",
    title: "Tissage au Métier",
    desc: "Tissage à la main au rythme de la navette et des pédales, en intégrant minutieusement chaque motif géométrique dans la trame."
  },
  {
    num: "04",
    title: "Assemblage & Finitions",
    desc: "Couture artisanale des bandes pour former le pagne complet, arrêt des lisières, repassage doux et remise dans son écrin."
  }
];

export const toolsList = [
  { code: "MT", label: "Métier à tisser à pédales" },
  { code: "CB", label: "Coton peigné du Bénin" },
  { code: "NV", label: "Navettes en bois dur" },
  { code: "PG", label: "Peigne de tisserand" },
  { code: "TA", label: "Teintures & Fils Améthyste" },
  { code: "LS", label: "Lisses d'ourdissage" }
];

export const trainingOptions = [
  {
    title: "Initiation au Kanvô",
    duration: "1 à 2 semaines",
    audience: "Débutants & passionnés",
    desc: "Découvrez les bases du métier à tisser traditionnel, la gestuelle des pieds et des mains, et tissez votre première bande de pagne.",
    points: [
      "Prise en main du métier à tisser",
      "Coordination pédales et navette",
      "Tissage d'une bande simple (1,5 m)",
      "Fournitures de coton incluses"
    ]
  },
  {
    title: "Perfectionnement & Motifs",
    duration: "1 mois intensif",
    audience: "Artisans & créateurs",
    desc: "Maîtrisez les motifs géométriques complexes du Kanvô, l'assemblage précis des bandes et le choix des fils nobles.",
    points: [
      "Ourdissage et montage complet du métier",
      "Création de motifs traditionnels & contemporains",
      "Assemblage et confection d'un pagne d'apparat",
      "Certificat d'atelier délivré par le maître"
    ]
  }
];

export const pricingPlans = [
  {
    name: "Étole / Pièce Unique",
    price: "30 000",
    currency: "FCFA",
    time: "⏱ 3–5 jours",
    desc: "Parfait pour une première pièce textile ou un cadeau raffiné",
    featured: false,
    features: [
      "1 Étole d'exception ou pièce textile",
      "100% Coton peigné fait main",
      "Choix des finitions (franges ou ourlet)",
      "Nuances personnalisables (dont Améthyste)",
      "Conseils d'entretien inclus"
    ]
  },
  {
    name: "Pagne Complet d'Apparat",
    price: "45 000",
    currency: "FCFA",
    time: "⏱ 7–10 jours",
    desc: "La référence pour vos grandes sorties, célébrations et cérémonies",
    featured: true,
    tag: "★ Le plus demandé",
    features: [
      "Pagne noble en bandes assemblées",
      "Motifs royaux & traditionnels au choix",
      "Fils améthystes & reflets texturés",
      "Finitions haute couture soignées",
      "Possibilité d'adapter le métrage",
      "Emballage soigné prêt à offrir"
    ]
  },
  {
    name: "Sur-mesure & Formations",
    price: "Sur devis",
    currency: "",
    time: "⏱ Selon projet",
    desc: "Pour les mariages coutumiers, collections mode et ateliers d'apprentissage",
    featured: false,
    features: [
      "Parures complètes de mariage pour couples",
      "Commandes spéciales pour créateurs de mode",
      "Formations d'initiation et perfectionnement",
      "Suivi personnalisé et livraison soignée"
    ]
  }
];

export const testimonials = [
  {
    quote: "Le pagne Kanvô tissé par Joel pour notre mariage traditionnel a émerveillé toute la famille. La finesse des bandes, la tenue de la matière et la profondeur du violet améthyste étaient tout simplement royales.",
    name: "Sèna & David A.",
    role: "Clients particuliers — Mariage coutumier",
    avatar: "SA"
  },
  {
    quote: "J'ai suivi la formation en tissage dans son atelier à Kandévié. Joel est d'une patience et d'une pédagogie rares. Grâce à lui, je maîtrise désormais le montage du métier et le tissage de motifs !",
    name: "Mariette K.",
    role: "Apprenante en artisanat textile",
    avatar: "MK"
  },
  {
    quote: "Joel Boton est un véritable gardien de notre patrimoine textile. Ses étoles et pièces de décoration apportent une âme authentique et élégante à notre espace à Cotonou.",
    name: "Armand G.",
    role: "Architecte d'intérieur & Décorateur",
    avatar: "AG"
  }
];
