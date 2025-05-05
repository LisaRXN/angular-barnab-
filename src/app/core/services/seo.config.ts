import { SeoConfig } from '../services/seo.service';

export interface RouteSeoConfig {
  [route: string]: SeoConfig;
}

export const SEO_CONFIG: RouteSeoConfig = {
  '/': {
    title: 'Barnabé - La 1ère plateforme de coaching immobilier',
    description:
    "Boostez la visibilité de votre bien immobilier avec Barnabé. Diffusez votre annonce sur plus de 50 plateformes et profitez d’un accompagnement personnalisé 5j/7 pour vendre plus vite, en toute autonomie.",
    keywords:
      'immobilier, annonces, coaching, vente interactive, diffusion, sans abonnement, vente, location, réussir sa vente',
    ogTitle: 'Barnabé - La 1ère plateforme de coaching en ligne"e​',
    ogDescription:
      'Vendez votre bien sans agence et diffusez votre annonces sur les meilleurs plateformes pros ! Pack Visibilité + Coaching à 299 €, ou Pack Visibilité + Vente interactive à 399 €. Aucun frais d’agence, plus de 1 500 clients satisfaits.',
    ogImage: 'https://barnabe-immo.fr/img/logo/logo-barnabe.png',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Brand',
          '@id': 'https://barnabe-immo.fr/',
          name: 'Barnabé Immobilier',
          url: 'https://barnabe-immo.fr/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://barnabe-immo.fr/assets/img/logo/logo.png',
            width: 180,
            height: 60,
          },
          description: 'La 1ère plateforme de coaching en ligne',
          sameAs: [
            'https://www.linkedin.com/company/barnabeimmo/',
            'https://www.instagram.com/barnabeimmo/?hl=fr',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: 'French',
            url: 'https://calendly.com/barnabe-immo/15min',
            contactOption: 'Prise de rendez-vous en ligne',
          },
        },
        {
          '@type': 'WebSite',
          '@id': 'https://barnabe-immo.fr/#website',
          url: 'https://barnabe-immo.fr/',
          name: 'Barnabé. Immobilier',
          publisher: {
            '@id': 'https://barnabe-immo.fr/#organization',
            name: 'Barnabé. Immobilier',
            url: 'https://barnabe-immo.fr/',
          },
        },
        {
          '@type': 'WebPage',
          '@id': 'https://barnabe-immo.fr/',
          url: 'https://barnabe-immo.fr/',
          name: 'Barnabé. Immobilier - La 1ère plateforme de coaching en ligne',
          isPartOf: {
            '@id': 'https://barnabe-immo.fr/',
          },
          about: {
            '@id': 'https://barnabe-immo.fr/',
          },
          description:
            'Diffusez votre annonce sur plus de 50 plateformes de référence et bénéficiez d’un accompagnement 5j/7 par un expert immobilier. Vendez sans frais d’agence avec Barnabé.',
        },
        {
          '@type': 'Service',
          name: 'Vente immobilière entre particuliers avec diffusion professionnelle',
          description:
            'Barnabé vous aide à vendre entre particuliers grâce à deux formules incluant la diffusion de votre annonce sur plus de 50 plateformes : avec coaching personnalisé 5j/7 pour 299 €, ou avec vente interactive aux enchères en ligne pour 399 €. 0 % de frais d’agence.',
          provider: {
            '@id': 'https://barnabe-immo.fr/#organization',
          },
          serviceType: 'Service immobilier sans agence',
          areaServed: 'France',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Formules de vente immobilière Barnabé',
            itemListElement: [
              {
                '@type': 'Offer',
                name: 'Pack Visibilité + Coaching',
                description:
                  'Diffusez votre annonce sur 50 plateformes de référence et bénéficiez d’un coaching 5j/7 par un expert en immobilier.',
                url: 'https://barnabe-immo.fr/pack-visibilite-coaching',
              },
              {
                '@type': 'Offer',
                name: 'Pack Visibilité + Vente interactive',
                description:
                  'Diffusez votre annonce sur 50 plateformes de référence, bénéficiez d’un coaching 5j/7 par un expert en immobilier et de la mise en ligne de votre annonce sur une plateforme de vente aux enchères.',
                url: 'https://barnabe-immo.fr/pack-visibilite-vente-interactive',
              },
              {
                '@type': 'Offer',
                name: 'Reportage photo + visite 3D virtuelle',
                description:
                  'Démarquez vous avec une annonce de qualité grâce à notre reportage photo professionnel incluant une video de visite virtuelle en 3D. À partir de 120 €.',
                url: 'pack-reportage-photo-visite3D',
              },
            ],
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Pourquoi choisir Barnabé pour votre vente immobilière ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Barnabé souhaite révolutionner la vente immobilière en proposant une alternative à la vente immobilière traditionnelle baptisée le coaching immobilier. Économique et performant, le coaching immobilier est une solution pour vendre rapidement et au meilleur prix.',
              },
            },
            {
              '@type': 'Question',
              name: "Combien ça coute et pourquoi n'y a t-il vraiment aucune commission ?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Notre formule de coaching immobilier est une prestation de service. Le paiement se fait immédia-tement (à partir de 299 €). Il n’y a donc vraiment aucune commission, aucun frais cachés, aucun abonnement. Votre formule arrive a expiration automatiquement au bout de la période (60 jours), sauf contre ordre, vous pourrez bien entendu la renouveler.',
              },
            },
            {
              '@type': 'Question',
              name: "À qui s'adresse notre service ?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Notre service est destiné à tous les vendeurs qui souhaitent s'occuper eux-mêmes de la vente de leur bien tout en bénéficiant d'un accompagnement professionnel et de la meilleure visibilité digitale. Tout cela sans commission. Optez pour la vente entre particulier avec un support professionnel. Ne soyez plus livrez à vous-même.",
              },
            },
            {
              '@type': 'Question',
              name: 'Quelle est la valeur ajoutée de Barnabé ?',
              acceptedAnswer: {
                '@type': 'Answer',
                reponse:
                  'Notre solution repose sur une offre principale innovante qui s’articule autour des fondamentaux de la vente immobilière (estimation, aide à la rédaction de votre annonce, multi-diffusion et accompagnement personnalisé), tout cela dispensé par des experts immobiliers dédié 6j/7. Bénéficiez d’outils et de conseils professionnels sans commission.',
              },
            },
            {
              '@type': 'Question',
              name: 'Je suis un professionnel de l’immobilier, vers quelle offre me tourner ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pour vos besoins en tant que pro, rendez-vous sur <a class="font-bold underline" href="https://www.diffuze.fr" target="_blank">DiffuZe</a>, notre partenaire dédié aux professionnels de l\'immobilier et conçu pour faciliter la diffusion de vos annonces.',
              },
            },
          ],
        },
        {
          '@type': 'AggregateRating',
          itemReviewed: {
            '@type': 'Organization',
            name: 'DiffuZe. Immobilier',
          },
          ratingValue: '4.9',
          bestRating: '5',
          worstRating: '4',
          ratingCount: '20',
        },
      ],
    },
  },
  '/pack-visibilite-coaching': {
    title: 'Pack Visibilité & Coaching - Barnabé Immobilier',
    description:
      "Diffusez votre bien sur plus de 50 plateformes avec notre pack visibilité & coaching. Bénéficiez d'un accompagnement personnalisé 5j/7 par un expert en immobilier pour 299 €.",
    keywords:
      'diffusion annonce, coaching immobilier, visibilité, immobilier, vente entre particuliers, prix immobilier',
    ogTitle: 'Pack Visibilité & Coaching - Barnabé Immobilier',
    ogDescription:
      "Diffusez votre bien sur plus de 50 plateformes avec notre pack visibilité & coaching. Bénéficiez d'un accompagnement personnalisé 5j/7 par un expert en immobilier pour 299 €.",
    structuredData: {
      '@context': 'http://schema.org',
      '@type': 'Service',
      name: 'Pack Visibilité & Coaching',
      image: 'https://data.barnabe-immo.fr/img/google/paiement-immediat.jpeg',
      description:
        'Diffusez votre bien sur plus de 50 plateformes avec notre pack visibilité & coaching. Accompagnement 5j/7 par un expert en immobilier.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '299',
        priceValidUntil: '2030-01-01',
        url: 'https://barnabe-immo.fr/pack-visibilite-coaching',
        itemOffered: {
          '@type': 'Service',
          name: 'Visibilité et coaching immobilier',
          serviceType: 'Coaching immobilier',
          provider: {
            '@type': 'Organization',
            name: 'Barnabé Immobilier',
          },
          potentialAction: {
            '@type': 'UseAction',
            target: 'https://barnabe-immo.fr/pack-visibilite-coaching',
          },
        },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Portails inclus',
            value:
              'SeLoger, Belles Demeures, Jinka, Gens de Confiance, Green-Acres',
          },
          {
            '@type': 'PropertyValue',
            name: 'Annonce optimisée',
            value:
              'Modifications illimitées et points d’intérêts à proximité de votre bien avec CityScan.',
          },
          {
            '@type': 'PropertyValue',
            name: 'Estimation en ligne',
            value: 'Grâce à notre outil gratuit en ligne',
          },
          {
            '@type': 'PropertyValue',
            name: 'Rédaction de votre annonce par IA',
            value: 'Grâce à notre outil gratuit en ligne',
          },
          {
            '@type': 'PropertyValue',
            name: 'Boost hebdomadaire',
            value: 'Inclus',
          },
          {
            '@type': 'PropertyValue',
            name: 'Durée',
            value: '60 jours',
          },
        ],
      },
      brand: {
        '@type': 'Brand',
        '@id': 'https://barnabe-immo.fr/',
        name: 'Barnabé Immobilier',
        url: 'https://barnabe-immo.fr/',
      },
      positiveNotes: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Diffusion sur 50 plateformes immobilières',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Accompagnement personnalisé 5j/7 pour maximiser la vente',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Assistance technique et juridique 6j/7',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '20',
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Pourquoi choisir Barnabé pour votre vente immobilière ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Barnabé souhaite révolutionner la vente immobilière en proposant une alternative à la vente immobilière traditionnelle baptisée le coaching immobilier. Économique et performant, le coaching immobilier est une solution pour vendre rapidement et au meilleur prix.',
            },
          },
          {
            '@type': 'Question',
            name: "Combien ça coute et pourquoi n'y a t-il vraiment aucune commission ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Notre formule de coaching immobilier est une prestation de service. Le paiement se fait immédia-tement (à partir de 299 €). Il n’y a donc vraiment aucune commission, aucun frais cachés, aucun abonnement. Votre formule arrive a expiration automatiquement au bout de la période (60 jours), sauf contre ordre, vous pourrez bien entendu la renouveler.',
            },
          },
          {
            '@type': 'Question',
            name: "À qui s'adresse notre service ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Notre service est destiné à tous les vendeurs qui souhaitent s'occuper eux-mêmes de la vente de leur bien tout en bénéficiant d'un accompagnement professionnel et de la meilleure visibilité digitale. Tout cela sans commission. Optez pour la vente entre particulier avec un support professionnel. Ne soyez plus livrez à vous-même.",
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle est la valeur ajoutée de Barnabé ?',
            acceptedAnswer: {
              '@type': 'Answer',
              reponse:
                'Notre solution repose sur une offre principale innovante qui s’articule autour des fondamentaux de la vente immobilière (estimation, aide à la rédaction de votre annonce, multi-diffusion et accompagnement personnalisé), tout cela dispensé par des experts immobiliers dédié 6j/7. Bénéficiez d’outils et de conseils professionnels sans commission.',
            },
          },
          {
            '@type': 'Question',
            name: 'Je suis un professionnel de l’immobilier, vers quelle offre me tourner ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pour vos besoins en tant que pro, rendez-vous sur <a class="font-bold underline" href="https://www.diffuze.fr" target="_blank">DiffuZe</a>, notre partenaire dédié aux professionnels de l\'immobilier et conçu pour faciliter la diffusion de vos annonces.',
            },
          },
        ],
      },
    },
  },

  '/pack-visibilite-vente-interactive': {
    title: 'Pack Visibilité & Vente Interactive - Barnabé Immobilier',
    description:
      "Diffusez votre bien sur plus de 50 plateformes et bénéficiez d'une solution innovante de vente interactive avec accompagnement personnalisé 5j/7 pour 299 €.",
    keywords:
      'vente interactive, diffusion annonce, coaching immobilier, visibilité, immobilier, vente entre particuliers, prix immobilier',
    ogTitle: 'Pack Visibilité & Vente Interactive - Barnabé Immobilier',
    ogDescription:
      "Diffusez votre bien sur plus de 50 plateformes et bénéficiez d'une solution innovante de vente interactive avec accompagnement personnalisé 5j/7 pour 299 €.",
    structuredData: {
      '@context': 'http://schema.org',
      '@type': 'Service',
      name: 'Pack Visibilité & Vente Interactive',
      image: 'https://data.barnabe-immo.fr/img/google/paiement-immediat.jpeg',
      description:
        'Diffusez votre bien sur plus de 50 plateformes et vendez plus vite grâce à notre solution de vente interactive. Accompagnement 5j/7 par un expert immobilier.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '299',
        priceValidUntil: '2030-01-01',
        url: 'https://barnabe-immo.fr/pack-visibilite-vente-interactive',
        itemOffered: {
          '@type': 'Service',
          name: 'Visibilité et vente interactive',
          serviceType: 'Coaching immobilier et vente interactive',
          provider: {
            '@type': 'Organization',
            name: 'Barnabé Immobilier',
          },
          potentialAction: {
            '@type': 'UseAction',
            target: 'https://barnabe-immo.fr/pack-visibilite-vente-interactive',
          },
        },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Plateformes exclusives incluses',
            value: 'Jinka, Gens de Confiance, Green-Acres',
          },
          {
            '@type': 'PropertyValue',
            name: 'Durée',
            value: '60 jours',
          },
          {
            '@type': 'PropertyValue',
            name: 'Boost hebdomadaire',
            value: 'Inclus',
          },
          {
            '@type': 'PropertyValue',
            name: 'Estimation en ligne',
            value: 'Grâce à notre outil gratuit en ligne',
          },
          {
            '@type': 'PropertyValue',
            name: 'Rédaction de votre annonce par IA',
            value: 'Grâce à notre outil gratuit en ligne',
          },
        ],
      },
      brand: {
        '@type': 'Brand',
        '@id': 'https://barnabe-immo.fr/',
        name: 'Barnabé Immobilier',
        url: 'https://barnabe-immo.fr/',
      },
      positiveNotes: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: "Vente accélérée grâce au système d'enchères ou d'offres compétitives",
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Diffusion sur plus de 50 plateformes',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Accompagnement humain et réactif 5j/7',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '20',
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Quel est le prix de départ ? Comment est-il défini ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le prix de départ est fixé en concertation avec notre équipe, à partir d’une évaluation précise de la valeur de marché de votre bien.\nCe prix est généralement positionné 15 à 20 % en dessous du prix du marché, afin de créer un effet d’appel et d’attirer un maximum d’acquéreurs.\n\n<span class=\"font-bold\">Attention</span> : si le prix de départ n’est pas suffisamment attractif, la dynamique d’enchères risque de ne pas se déclencher, ou d’être moins performante.\nC’est pourquoi il est essentiel de déterminer ensemble un prix marché réaliste, sur lequel appuyer cette stratégie de lancement."
            },
          },
          {
            '@type': 'Question',
            name: "Suis-je dans l’obligation d’accepter une offre d’achat ?",
            acceptedAnswer: {
              '@type': 'Answer',
             text: "Non, vous n’êtes jamais obligé d’accepter une offre.\nÀ l’issue des enchères, vous restez entièrement libre d’accepter ou non l’offre la plus élevée.\nVous conservez ainsi le contrôle total de votre vente."
            },
          },
          {
            '@type': 'Question',
            name: "Quelle est la durée moyenne du processus de vente ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le processus complet dure environ <span class=\"font-bold\">28 jours</span> entre le lancement de l’annonce et le jour des enchères.\nCette période permet de préparer, valoriser et promouvoir votre bien efficacement, en laissant aux acheteurs le temps de se positionner."
            },
          },
          {
            '@type': 'Question',
            name: "Y a-t-il d’autres frais à prévoir ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Non, il n’y a rien à prévoir d’autre que le tarif affiché sur notre site, soit 399 € TTC pour la prestation complète.\nContrairement à une mise en vente via un intermédiaire classique, aucun honoraire supplémentaire ne vous est facturé pour bénéficier de ce service."
            },
          },
          {
            '@type': 'Question',
            name: "Qu’est-ce qui est inclus dans ce service à 399 € ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le service comprend : La définition du prix de départ avec l’un de nos experts immobiliers. La diffusion de votre annonce sur plus de 50 portails de référence, pour maximiser la visibilité de votre bien. La gestion de votre annonce en ligne via un espace personnel dédié. Un accompagnement personnalisé tout au long du processus de commercialisation. L’organisation de la vente aux enchères, grâce à la mise à disposition de notre outil d’enchères sécurisé en ligne.",
            },
          },
        ],
      },
    },
  },

  '/pack-photo-visite-3d': {
    title: 'Pack Reportage Photo & Visite 3D - Barnabé Immobilier',
    description:
      "Sublimez votre bien avec un reportage photo professionnel et une visite 3D immersive. Attirez plus d’acheteurs dès le premier coup d'œil, à partir de 120 €.",
    keywords:
      'photo immobilière, visite virtuelle 3D, reportage professionnel, valorisation bien immobilier, home staging, annonce immobilière, Barnabé Immobilier',
    ogTitle:
      'Pack Photo & Visite 3D - Sublimez votre bien | Barnabé Immobilier',
    ogDescription:
      'Attirez l’attention avec un reportage photo professionnel et une visite virtuelle 3D. Une présentation haut de gamme de votre bien à partir de 120 €.',
    ogImage: 'https://data.barnabe-immo.fr/img/google/...',
    structuredData: {
      '@context': 'http://schema.org',
      '@type': 'Service',
      name: 'Pack Reportage Photo & Visite 3D',
      image: 'https://data.barnabe-immo.fr/img/google/...',
      description:
        "Attirez plus d'acheteurs grâce à des photos professionnelles et une visite virtuelle immersive. Mettez votre bien en valeur pour une vente plus rapide.",
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '120',
        priceValidUntil: '2030-01-01',
        url: 'https://barnabe-immo.fr/pack-reportage-photo-visite3D',
        itemOffered: {
          '@type': 'Service',
          name: 'Reportage photo professionnel & visite 3D',
          serviceType: 'Valorisation immobilière',
          provider: {
            '@type': 'Organization',
            name: 'Barnabé Immobilier',
          },
          potentialAction: {
            '@type': 'UseAction',
            target: 'https://barnabe-immo.fr/pack-reportage-photo-visite3D',
          },
        },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Type de bien couvert',
            value: 'Maisons, appartements, intérieur, extérieur',
          },
          {
            '@type': 'PropertyValue',
            name: 'Droits d’usage',
            value: 'Libres pour diffusion web et print',
          },
        ],
      },
      brand: {
        '@type': 'Brand',
        '@id': 'https://barnabe-immo.fr/',
        name: 'Barnabé Immobilier',
        url: 'https://barnabe-immo.fr/',
      },
      positiveNotes: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '15 photos professionnelles valorisant votre bien',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Visite 3D immersive pour capter plus d’acheteurs',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Livraison rapide et qualité haut de gamme',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '15',
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quels sont les avantages d’un reportage photo professionnel ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Des photos professionnelles permettent de capter l’attention, de valoriser les volumes et d’augmenter les chances de visites. Elles donnent une image sérieuse et engageante de votre bien.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment fonctionne la visite 3D ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nous réalisons une captation immersive de votre bien avec une caméra 3D. Les acheteurs peuvent ainsi le visiter à distance, à tout moment, depuis leur ordinateur ou smartphone.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le délai pour obtenir les photos et la visite 3D ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les médias sont livrés sous 72h après la captation. Vous recevez un lien de téléchargement et un lien de partage pour les intégrer à votre annonce.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le pack inclut-il une prestation sur place ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, un photographe professionnel se déplace chez vous pour réaliser la séance photo et la visite 3D dans les meilleures conditions.',
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je utiliser les photos sur d'autres plateformes ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, vous disposez des droits de diffusion pour utiliser les photos et la visite 3D sur tous vos supports de communication, en ligne ou imprimés.',
            },
          },
        ],
      },
    },
  },

  '/blog': {
    title: 'Blog Barnabé - Conseils et actualités pour vendre votre bien',
    description:
      'Consultez notre blog pour découvrir des conseils concrets, des actualités et des astuces pour réussir la vente de votre bien immobilier en toute autonomie.',
    keywords:
      'blog immobilier, vente immobilière, conseils vente, actualités immobilier',
    ogTitle: 'Blog Immobilier - Barnabé',
    ogDescription: 'Découvrez nos articles pour vendre votre bien sereinement',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.barnabe-immo.fr/blog/',
          url: 'https://www.barnabe-immo.fr/blog/',
          name: 'Blog Immobilier - Barnabé',
          isPartOf: {
            '@id': 'https://www.barnabe-immo.fr/',
          },
          about: {
            '@type': 'Thing',
            name: 'Vente immobilière',
          },
          description:
            'Conseils, guides pratiques et actualités pour vendre votre bien immobilier efficacement',
          breadcrumb: {
            '@id': 'https://www.barnabe-immo.fr/blog/',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.barnabe-immo.fr/blog/',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: 'https://www.barnabe-immo.fr/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: 'https://www.barnabe-immo.fr/blog/',
            },
          ],
        },
        {
          '@type': 'CollectionPage',
          '@id': 'https://www.barnabe-immo.fr/blog/',
          url: 'https://www.barnabe-immo.fr/blog/',
          name: 'Blog Immobilier - Barnabé',
          description:
            'Explorez nos articles classés par thèmes pour mieux vendre votre bien',
          isPartOf: {
            '@id': 'https://www.barnabe-immo.fr/blog/',
          },
          about: {
            '@type': 'Thing',
            name: 'Vente immobilière',
          },
        },
        {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Conseils pour les vendeurs',
              url: 'https://www.barnabe-immo.fr/blog/type/1',
              description:
                'Astuces et bonnes pratiques pour bien vendre son bien immobilier',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Plateformes immobilières',
              url: 'https://www.barnabe-immo.fr/blog/type/2',
              description:
                'Zoom sur les portails de diffusion et leurs spécificités',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Actualités immobilières',
              url: 'https://www.barnabe-immo.fr/blog/type/3',
              description: 'Tendances et évolutions du marché immobilier',
            },
          ],
        },
        {
          '@type': 'Blog',
          headline: 'Blog Immobilier Barnabé',
          name: 'Blog Barnabé',
          description:
            'Conseils, actualités et outils pour vous accompagner dans votre vente immobilière',
          url: 'https://www.barnabe-immo.fr/blog/',
          sameAs: [
            'https://www.linkedin.com/company/barnabeimmo/',
            'https://www.instagram.com/barnabeimmo/?hl=fr',
          ],
          publisher: {
            '@id': 'https://www.barnabe-immo.fr/',
          },
        },
      ],
    },
  },

  '/annonces': {
    title: 'Annonces Immobilières - Trouvez votre bien idéal avec Barnabé',
    description:
      'Parcourez les annonces immobilières sélectionnées par Barnabé, publiées par des agences et professionnels de confiance. Trouvez le bien qui vous correspond.',
    keywords:
      'annonces immobilières, biens à vendre, biens à louer, immobilier, recherche immobilière, Barnabé',
    ogTitle: 'Annonces Immobilières - Trouvez votre bien idéal | Barnabé',
    ogDescription:
      'Accédez à notre sélection d’annonces immobilières de qualité. Filtrez selon vos critères pour trouver facilement votre futur logement.',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.barnabe-immo.fr/annonces/',
          url: 'https://www.barnabe-immo.fr/annonces/',
          name: 'Annonces Immobilières - Trouvez votre bien idéal | Barnabé',
          description:
            'Recherchez parmi les annonces immobilières de qualité proposées par les clients de Barnabé.',
          isPartOf: {
            '@id': 'https://www.barnabe-immo.fr/',
          },
          breadcrumb: {
            '@id': 'https://www.barnabe-immo.fr/annonces/#breadcrumb',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.barnabe-immo.fr/annonces/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: 'https://www.barnabe-immo.fr/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Annonces Immobilières',
              item: 'https://www.barnabe-immo.fr/annonces/',
            },
          ],
        },
        {
          '@type': 'SearchResultsPage',
          '@id': 'https://www.barnabe-immo.fr/annonces/#searchresults',
          about: {
            '@type': 'RealEstateListing',
            name: 'Annonces immobilières',
          },
          mainContentOfPage: {
            '@type': 'WebPageElement',
            isPartOf: {
              '@id': 'https://www.barnabe-immo.fr/annonces/',
            },
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate:
                'https://www.barnabe-immo.fr/annonces/?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.barnabe-immo.fr/annonces/#listings',
          name: 'Annonces immobilières disponibles',
          description: 'Liste des biens à vendre ou à louer',
          numberOfItems: '{{dynamicNumberOfItems}}',
          itemListOrder: 'https://schema.org/ItemListOrderDescending',
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Comment filtrer mes recherches d'annonces immobilières ?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Filtrez vos recherches selon le type de bien, la localisation, le prix, la surface ou le nombre de pièces pour cibler facilement les biens adaptés à vos besoins.',
              },
            },
            {
              '@type': 'Question',
              name: 'Les annonces sont-elles vérifiées ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Oui, toutes les annonces sont publiées par des professionnels partenaires de Barnabé. Chaque bien est vérifié avant mise en ligne.',
              },
            },
            {
              '@type': 'Question',
              name: "Comment contacter l'agent immobilier pour une annonce ?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Chaque fiche annonce contient les coordonnées de l’agent immobilier ou un formulaire de contact pour poser vos questions ou demander une visite.',
              },
            },
          ],
        },
      ],
    },
    ogImage: 'https://data.barnabe-immo.fr/img/logo/logo-barnabe.png',
  },

  '/conditions-generales​': {
    title:
      "Conditions Générales de Vente - Diffuze : Diffusion d'annonces immobilières​",
    description:
      "Prenez connaissance des conditions générales d'utilisation de Diffuze, votre service de diffusion d'annonces immobilières.​​",
  },
  '/protection-des-donnees​': {
    title: 'Protection des Données - Diffuze : Confidentialité et sécurité​',
    description:
      'Découvrez comment Diffuze protège vos données personnelles conformément aux réglementations en vigueur.​',
  },

  // Ajoutez d'autres routes selon vos besoins
};
