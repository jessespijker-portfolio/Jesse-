/**
 * Pill-knop in drie varianten. Primary = ink, accent = oranje (max 1 per view), ghost = hairline.
 * @startingPoint section="Core" subtitle="Pill-knoppen: primary, accent, ghost" viewport="700x150"
 */
export interface ButtonProps {
  /** 'primary' | 'accent' | 'ghost' */
  variant?: 'primary' | 'accent' | 'ghost';
  /** 'sm' | 'md' | 'lg' */
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  /** Rendert als <a> indien gezet */
  href?: string;
  onClick?: () => void;
  /** Toont \u2192 die 4px schuift op hover */
  arrow?: boolean;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;