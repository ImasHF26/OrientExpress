// ============================================================
// Configuration OrientExpress — À personnaliser avec vos données
// ============================================================

export const SITE_CONFIG = {
  name: 'CAP FUTURE MAROC',
  description: 'CAP FUTURE MAROC — Plateforme d\'orientation étudiante — Région Rabat-Salé-Kénitra',
  region: 'Rabat-Salé-Kénitra',
  whatsappNumber: '212764252467', // Numéro WhatsApp (sans +)
  phoneNumber: '+212 7 64 25 24 67', // Numéro de téléphone affiché
  email: 'abdelouahab069@gmail.com',
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
    name: 'École Nationale de Commerce et de Gestion',
    slug: 'encg',
    acronym: 'ENCG',
    city: '',
    type: 'public',
    specialites: [
      'Marketing & Actions Commerciales',
      'Gestion Financière & Comptable',
      'Audit & Contrôle de Gestion',
      'Management des Ressources Humaines',
    ],
    duree: '5 ans (Bac à Bac+5)',
    frais: 'Frais d\'inscription annuels ~300 MAD',
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
    description: 'Établissement de référence nationale pour le commerce, le marketing, la finance et la gestion d\'entreprise.',
  },
  {
    name: 'École Nationale des Sciences Appliquées',
    slug: 'ensa',
    acronym: 'ENSA',
    city: '',
    type: 'public',
    specialites: [
      'Génie Informatique',
      'Réseaux & Télécommunications',
      'Génie Industriel',
      'Génie Électrique',
      'Mécatronique',
    ],
    duree: '5 ans (Bac à Bac+5)',
    frais: 'Frais d\'inscription annuels ~300 MAD',
    admission: 'Bac + Concours commun d\'accès (Concours ENSA)',
    debouches: [
      'Ingénieur d\'État',
      'Architecte Logiciel',
      'Chef de Projet Tech',
      'Expert en Cybersécurité',
    ],
    rating: 4.8,
    gradient: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-50 text-blue-700',
    description: 'Grande école d\'ingénieurs formant des cadres techniques hautement qualifiés et directement opérationnels.',
  },
  {
    name: 'École Nationale Supérieure d\'Arts et Métiers',
    slug: 'ensam',
    acronym: 'ENSAM',
    city: '',
    type: 'public',
    specialites: [
      'Génie Mécanique',
      'Génie Industriel',
      'Génie Électrotechnique',
      'Génie Digital & Robotique',
    ],
    duree: '5 ans (Bac à Bac+5)',
    frais: 'Frais d\'inscription annuels ~300 MAD',
    admission: 'Bac + Concours commun d\'accès (Concours ENSAM)',
    debouches: [
      'Ingénieur d\'État',
      'Responsable de Production',
      'Ingénieur Mécanique',
      'Consultant Technique',
    ],
    rating: 4.8,
    gradient: 'from-purple-600 to-indigo-700',
    badgeBg: 'bg-purple-50 text-purple-700',
    description: 'Établissement d\'ingénierie d\'excellence spécialisé dans les arts et métiers, la mécanique avancée et l\'industrie 4.0.',
  },
  {
    name: 'Faculté de Médecine et de Pharmacie',
    slug: 'medecine',
    acronym: 'Médecine',
    city: '',
    type: 'public',
    specialites: [
      'Médecine Générale',
      'Médecine Dentaire',
      'Pharmacie',
      'Spécialités Médicales',
    ],
    duree: '6 ans (Médecine Générale)',
    frais: 'Frais d\'inscription annuels ~300 MAD',
    admission: 'Bac + Concours Commun d\'Accès (FMP)',
    debouches: [
      'Médecin Généraliste',
      'Médecin Spécialiste',
      'Pharmacien',
      'Chercheur en Sciences Médicales',
    ],
    rating: 5.0,
    gradient: 'from-rose-500 to-red-600',
    badgeBg: 'bg-rose-50 text-rose-700',
    description: 'Faculté publique d\'excellence formant les futurs médecins et professionnels de la santé au Maroc.',
  },
  {
    name: 'Institut Supérieur des Professions Infirmières et Techniques de Santé',
    slug: 'ispits',
    acronym: 'ISPITS',
    city: '',
    type: 'public',
    specialites: [
      'Soins Infirmiers (Multi-options)',
      'Sage-Femme',
      'Techniques de Radiologie & Imagerie',
      'Techniques de Laboratoire',
    ],
    duree: '3 ans (Licence Professionnelle)',
    frais: 'Frais d\'inscription standard',
    admission: 'Bac Scientifique + Sélection sur dossier + Concours écrit',
    debouches: [
      'Infirmier d\'État Spécialisé',
      'Technicien en Radiologie/Analyses',
      'Sage-femme de Santé Publique',
    ],
    rating: 4.7,
    gradient: 'from-emerald-500 to-green-600',
    badgeBg: 'bg-emerald-50 text-emerald-700',
    description: 'Le principal institut public de formation en santé, préparant aux carrières médicales et paramédicales d\'avenir.',
  },
  {
    name: 'École Supérieure de Technologie',
    slug: 'est',
    acronym: 'EST',
    city: '',
    type: 'public',
    specialites: [
      'Génie Informatique & Web',
      'Techniques de Management',
      'Génie Civil & Environnement',
      'Réseaux & Télécoms',
    ],
    duree: '2 ans (DUT) + Option Licence Professionnelle',
    frais: 'Frais d\'inscription standard',
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
    description: 'Un pôle technologique d\'excellence proposant des filières courtes, concrètes et parfaitement adaptées à l\'insertion professionnelle.',
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
