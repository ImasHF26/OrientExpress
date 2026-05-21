// ============================================================
// Configuration OrientExpress — À personnaliser avec vos données
// ============================================================

export const SITE_CONFIG = {
  name: 'CAP FUTURE MAROC',
  description: 'CAP FUTURE MAROC — Plateforme d\'orientation étudiante — Région Rabat-Salé-Kénitra',
  region: 'Rabat-Salé-Kénitra',
  whatsappNumber: '212666763438', // Numéro WhatsApp (sans +)
  phoneNumber: '+212 6 66 76 34 38', // Numéro de téléphone affiché
  email: 'contact@orientexpress.ma',
  address: 'Rabat-Salé-Kénitra, Maroc',
  hours: 'Lun - Sam : 9h00 - 18h00',
} as const

// ============================================================
// Base de données — SQLite via Prisma
// ============================================================

// ============================================================
// Données des établissements — Région Rabat-Salé-Kénitra
// (Priorité : Kénitra, puis Rabat, puis Salé)
// ============================================================

export type SchoolType = {
  name: string
  slug: string
  acronym: string
  city: string
  type: 'public' | 'privé'
  specialites: string[]
  duree: string
  frais: string
  admission: string
  debouches: string[]
  rating: number
  gradient: string // Tailwind gradient classes
  badgeBg: string  // Badge background color
  description: string
}

export const SCHOOLS: SchoolType[] = [
  {
    name: 'École Nationale des Sciences Appliquées',
    slug: 'ensa',
    acronym: 'ENSA',
    city: 'Kénitra',
    type: 'public',
    specialites: [
      'Génie Informatique',
      'Réseaux & Télécommunications',
      'Génie Industriel',
      'Génie Électrique',
      'Mécatronique',
    ],
    duree: '5 ans (Bac à Bac+5)',
    frais: 'Gratuit (frais d\'inscription annuels ~300 MAD)',
    admission: 'Bac S/SM + Concours d\'accès (Tafem/Concours ENSA)',
    debouches: [
      'Ingénieur d\'État',
      'Architecte Logiciel',
      'Responsable Production',
      'Consultant Tech',
    ],
    rating: 4.8,
    gradient: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-50 text-blue-700',
    description: 'Une des plus grandes écoles d\'ingénieurs de la région, formant des cadres techniques de haut niveau directement opérationnels.',
  },
  {
    name: 'École Nationale de Commerce et de Gestion',
    slug: 'encg',
    acronym: 'ENCG',
    city: 'Kénitra',
    type: 'public',
    specialites: [
      'Marketing & Actions Commerciales',
      'Gestion Financière & Comptable',
      'Audit & Contrôle de Gestion',
      'Management des Ressources Humaines',
    ],
    duree: '5 ans (Bac à Bac+5)',
    frais: 'Gratuit (frais d\'inscription annuels ~300 MAD)',
    admission: 'Bac + Concours National d\'Accès (TAFEM)',
    debouches: [
      'Manager Financier',
      'Auditeur Interne/Externe',
      'Chef de Produit Marketing',
      'Analyste d\'Affaires',
    ],
    rating: 4.9,
    gradient: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-50 text-amber-700',
    description: 'Établissement de référence nationale pour le commerce et la gestion, réputé pour sa proximité étroite avec le tissu industriel de la région.',
  },
  {
    name: 'École Mohammadia d\'Ingénieurs',
    slug: 'emi',
    acronym: 'EMI',
    city: 'Rabat (Agdal)',
    type: 'public',
    specialites: [
      'Génie Informatique',
      'Génie Civil',
      'Génie Électrique & Électronique',
      'Génie Industriel',
      'Mines & Métallurgie',
    ],
    duree: '3 ans (Cycle Ingénieur après CPGE)',
    frais: 'Gratuit (frais d\'inscription ~300 MAD/an)',
    admission: 'CPGE + Concours National Commun (CNC) ou Titres (Licence/DEUG)',
    debouches: [
      'Ingénieur d\'État',
      'Directeur de Projet',
      'Chercheur & Développeur',
      'Consultant Stratégie',
    ],
    rating: 5.0,
    gradient: 'from-blue-700 to-indigo-900',
    badgeBg: 'bg-indigo-50 text-indigo-700',
    description: 'La plus ancienne et prestigieuse école d\'ingénieurs d\'État du Maroc, formant l\'élite des cadres techniques et militaires nationaux.',
  },
  {
    name: 'École Nationale Supérieure d\'Informatique et d\'Analyse des Systèmes',
    slug: 'ensias',
    acronym: 'ENSIAS',
    city: 'Rabat (Irfane)',
    type: 'public',
    specialites: [
      'Génie Logiciel & Cloud',
      'Intelligence Artificielle & Data Science',
      'Cybersécurité & Réseaux',
      'Digital Business & Smart Systems',
    ],
    duree: '3 ans (Cycle Ingénieur)',
    frais: 'Gratuit (frais d\'inscription ~300 MAD/an)',
    admission: 'CPGE (CNC) + Concours sur titre pour Licences scientifiques',
    debouches: [
      'Ingénieur Cloud & DevOps',
      'Data Scientist / AI Engineer',
      'Expert en Cybersécurité',
      'Architecte de Systèmes d\'Information',
    ],
    rating: 4.9,
    gradient: 'from-cyan-600 to-blue-700',
    badgeBg: 'bg-cyan-50 text-cyan-700',
    description: 'Le pôle d\'excellence national par excellence en informatique et technologies de pointe, sous l\'égide de l\'Université Mohammed V.',
  },
  {
    name: 'Institut Supérieur des Professions Infirmières et Techniques de Santé',
    slug: 'ispits',
    acronym: 'ISPITS',
    city: 'Rabat',
    type: 'public',
    specialites: [
      'Soins Infirmiers (Multi-options)',
      'Sage-Femme',
      'Techniques de Radiologie & Imagerie',
      'Techniques de Laboratoire',
    ],
    duree: '3 ans (Licence Professionnelle)',
    frais: 'Gratuit',
    admission: 'Bac Scientifique + Sélection sur dossier + Concours écrit',
    debouches: [
      'Infirmier d\'État Spécialisé',
      'Technicien en Radiologie/Analyses',
      'Sage-femme de Santé Publique',
    ],
    rating: 4.7,
    gradient: 'from-emerald-500 to-green-600',
    badgeBg: 'bg-emerald-50 text-emerald-700',
    description: 'Le principal institut public de formation en santé de la région, préparant aux carrières médicales et paramédicales d\'avenir.',
  },
  {
    name: 'École Supérieure de Technologie',
    slug: 'est',
    acronym: 'EST',
    city: 'Salé',
    type: 'public',
    specialites: [
      'Génie Informatique & Web',
      'Techniques de Management',
      'Génie Civil & Environnement',
      'Réseaux & Télécoms',
    ],
    duree: '2 ans (DUT) + Option Licence Professionnelle',
    frais: 'Gratuit',
    admission: 'Sélection sur dossier de notes du Baccalauréat',
    debouches: [
      'Technicien Supérieur',
      'Développeur Web/Mobile',
      'Gestionnaire de Projets Junior',
      'Administrateur Systèmes',
    ],
    rating: 4.5,
    gradient: 'from-violet-500 to-purple-600',
    badgeBg: 'bg-violet-50 text-violet-700',
    description: 'Un pôle technologique d\'excellence à Salé proposant des filières courtes, concrètes et parfaitement adaptées à l\'embauche.',
  },
]

// ============================================================
// Options pour le formulaire d'orientation
// ============================================================

export const FORM_OPTIONS = {
  niveaux: [
    'Bac',
    'Bac+1',
    'Bac+2',
    'Bac+3',
    'Bac+4',
    'Bac+5',
    'Autre',
  ],
  filieres: [
    'Sciences Mathématiques (A ou B)',
    'Sciences Physiques (A ou B)',
    'Sciences de la Vie et de la Terre (SVT)',
    'Sciences Économiques (SEG)',
    'Lettres et Sciences Humaines',
    'Sciences Mathématiques Appliquées (SMA)',
    'Technicien Spécialisé',
    'Autre',
  ],
  interets: [
    'Informatique, Cybersécurité et Intelligence Artificielle',
    'Économie & Gestion d\'Entreprise',
    'Ingénierie, Industrie & Bâtiment',
    'Santé & Paramédical',
    'Réseaux, Cloud & Télécommunications',
    'Audit, Finance & Comptabilité',
    'Marketing, Vente & Action Commerciale',
    'Autre',
  ],
  etablissements: SCHOOLS.map((s) => s.acronym),
} as const
