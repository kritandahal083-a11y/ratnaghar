/**
 * Build-time icon resolver.
 * Reads official Iconify JSON data (Phosphor + Simple Icons) and renders
 * inline SVG. Nothing ships to the browser except the used path data.
 */
import phIcons from '@iconify-json/ph/icons.json';
import siIcons from '@iconify-json/simple-icons/icons.json';

type IconifyIcon = { body: string; width?: number; height?: number };
type IconifyAlias = {
  parent: string;
  body?: string;
  width?: number;
  height?: number;
};
type IconifySet = {
  prefix: string;
  width?: number;
  height?: number;
  icons: Record<string, IconifyIcon>;
  aliases?: Record<string, IconifyAlias>;
};

const SETS: Record<string, IconifySet> = {
  ph: phIcons as unknown as IconifySet,
  'simple-icons': siIcons as unknown as IconifySet,
};

export function resolveIcon(name: string): { viewBox: string; body: string } {
  const separator = name.indexOf(':');
  const prefix = name.slice(0, separator);
  const icon = name.slice(separator + 1);

  const set = SETS[prefix];
  if (!set) throw new Error(`[Icon] Unknown icon set: "${name}"`);

  let def = set.icons[icon];
  if (!def) {
    const alias = set.aliases?.[icon];
    const parent = alias ? set.icons[alias.parent] : undefined;
    if (alias && parent) {
      def = {
        ...parent,
        ...(alias.body ? { body: alias.body } : {}),
        ...(alias.width ? { width: alias.width } : {}),
        ...(alias.height ? { height: alias.height } : {}),
      };
    }
  }
  if (!def) throw new Error(`[Icon] Unknown icon: "${name}"`);

  const viewBox = `0 0 ${def.width ?? set.width ?? 24} ${def.height ?? set.height ?? 24}`;
  return { viewBox, body: def.body };
}
