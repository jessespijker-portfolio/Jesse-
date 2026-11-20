/**
 * Sticky top-navigatie: woordmerk links, links + LangToggle + CTA rechts. Blur op paper.
 */
export interface NavBarProps {
  links?: { label: string; href: string }[];
  /** label van de actieve link (accent-onderstreping) */
  active?: string;
  lang?: 'nl' | 'en';
  onLangChange?: (lang: 'nl' | 'en') => void;
  ctaLabel?: string;
  ctaHref?: string;
}
export declare function NavBar(props: NavBarProps): JSX.Element;