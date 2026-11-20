/**
 * Scroll-stapel (het 21st.dev "sticky-services-stack"-element): elk kind plakt onder de vorige
 * met oplopende top-offset, zodat kaarten op elkaar stapelen tijdens scrollen.
 * @startingPoint section="Projecten" subtitle="Kaarten stapelen op elkaar bij scrollen" viewport="900x600"
 */
export interface StickyStackProps {
  /** ProjectCards (of andere kaarten) */
  children?: React.ReactNode;
  /** top-offset eerste kaart in px (ruimte voor navbar) */
  top?: number;
  /** extra offset per volgende kaart in px */
  step?: number;
  /** verticale ruimte tussen kaarten in px */
  gap?: number;
}
export declare function StickyStack(props: StickyStackProps): JSX.Element;