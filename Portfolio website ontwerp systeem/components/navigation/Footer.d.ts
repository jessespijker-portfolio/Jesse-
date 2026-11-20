/**
 * Donkere contact-footer: grote CTA-kop, contactlinks met \u2197, mono-onderregel.
 */
export interface FooterProps {
  heading?: string;
  /** Subregel, bv. beschikbaarheid afstudeerstage */
  sub?: string;
  email?: string;
  /** Optioneel; standaard niet getoond */
  phone?: string;
  linkedin?: string;
  note?: string;
  /** Mono-sectienummer, bv. '03' */
  sectionIndex?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;