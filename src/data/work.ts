export type ProjectCategory = 'Website Design' | 'Web App' | 'Branding' | 'Campaign' | 'Advertising';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  icon: string;
  /** Cover art variant + tone */
  art: {
    variant: 'velora' | 'nova' | 'oriole' | 'bloom' | 'atlas';
    bg: string;
    fg: string;
  };
  pitch: string;
  brief: string;
  scope: string[];
}

export const CATEGORY_ORDER: ProjectCategory[] = [
  'Website Design',
  'Web App',
  'Branding',
  'Campaign',
  'Advertising',
];

/**
 * DEMO PROJECTS — concept work designed by Shree Ratna Ghar purely to demonstrate
 * craft. They are not client engagements; that is stated on the page.
 */
export const PROJECTS: Project[] = [
  {
    id: 'velora',
    name: 'Velora Interiors',
    category: 'Website Design',
    icon: 'ph:images',
    art: { variant: 'velora', bg: '#F7F9FC', fg: '#0B1F3A' },
    pitch: 'Editorial e-commerce concept for a contemporary interiors studio — tactile layouts, calm navigation, and a checkout that feels as considered as the furniture.',
    brief:
      'A furniture studio deserves a store that behaves like a showroom: unhurried pages, generous photography, and typography that carries the room. Velora is our concept for exactly that experience — light, fast, and quietly premium.',
    scope: ['Design system', 'E-commerce UX', 'Front-end direction', 'Photography art direction'],
  },
  {
    id: 'nova',
    name: 'Nova Ledger',
    category: 'Web App',
    icon: 'ph:chart-line-up',
    art: { variant: 'nova', bg: '#164E9B', fg: '#FFFFFF' },
    pitch: 'A financial operations app concept distilled to one calm screen — clear hierarchy, restrained color, and data density that respects attention.',
    brief:
      'Finance software tends to shout. Nova Ledger proposes the opposite: one steady surface where balances, movements, and approvals live in a strict typographic hierarchy, with motion reserved for what actually changed.',
    scope: ['Product UX', 'Design system', 'Data visualization rules', 'Motion specification'],
  },
  {
    id: 'oriole',
    name: 'Café Oriole',
    category: 'Branding',
    icon: 'ph:paint-brush',
    art: { variant: 'oriole', bg: '#D4AF37', fg: '#071426' },
    pitch: 'Identity concept for a neighborhood café — a warm geometric mark holding one clear voice across menus, cups, and signage.',
    brief:
      'A café brand should feel like the room it lives in. Oriole is built around a single geometric bird-mark, a confident two-tone palette, and applications from chalkboard menus to takeaway cups that never contradict each other.',
    scope: ['Logo & monogram', 'Menu & signage', 'Packaging', 'Tone of voice'],
  },
  {
    id: 'bloom',
    name: 'Bloom Festival',
    category: 'Campaign',
    icon: 'ph:sparkle',
    art: { variant: 'bloom', bg: '#0B1F3A', fg: '#FFFFFF' },
    pitch: 'A six-week campaign concept for a summer music festival — social teasers, motion idents, and out-of-home built around one visual thread.',
    brief:
      'One idea should survive every placement. Bloom carries a single radiating motif from Instagram teasers to roadside posters to stage idents, so the campaign accumulates recognition instead of restarting every week.',
    scope: ['Campaign identity', 'Social content system', 'Out-of-home concepts', 'Motion direction'],
  },
  {
    id: 'atlas',
    name: 'Atlas & Pine',
    category: 'Advertising',
    icon: 'ph:sun-horizon',
    art: { variant: 'atlas', bg: '#071426', fg: '#D4AF37' },
    pitch: 'Out-of-home concept for a trail-gear brand — type-first posters, legible at a glance, honest about the product.',
    brief:
      'Posters get seconds, not minutes. Atlas & Pine is a type-first OOH series: one tagline, one product truth, and enough contrast to register at traffic speed — the same discipline carried into digital placements.',
    scope: ['Manifesto & taglines', 'Poster series in three scales', 'Digital OOH variants', 'Copywriting'],
  },
];
