/**
 * Site-wide configuration and navigation.
 * ─────────────────────────────────────────────────────────────
 * CONTACT PLACEHOLDERS — replace every value below before launch.
 * This is a static site: nothing is stored or sent from the server.
 */
export const CONTACT = {
  // TODO: replace with your real domain email before launch.
  email: 'hello@shreeratnaghar.com',
  phoneDisplay: '+00 000 000 000',
  phoneHref: 'tel:+000000000000',
  // TODO: replace the number with your WhatsApp business number.
  whatsapp:
    'https://wa.me/000000000000?text=Hello%20Shree%20Ratna%20Ghar%2C%20I%27d%20like%20to%20discuss%20a%20project.',
  address: 'Business Avenue 400, Suite 12 · Your City, Country',
} as const;

export const SOCIALS = [
  { name: 'LinkedIn', id: 'simple-icons:linkedin', href: '#' },
  { name: 'X', id: 'simple-icons:x', href: '#' },
  { name: 'Instagram', id: 'simple-icons:instagram', href: '#' },
  { name: 'Behance', id: 'simple-icons:behance', href: '#' },
] as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
] as const;
