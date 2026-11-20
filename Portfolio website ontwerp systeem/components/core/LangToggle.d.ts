/**
 * NL/EN taal-schakelaar als pill-toggle; hoort in de NavBar.
 */
export interface LangToggleProps {
  /** 'nl' | 'en' */
  lang?: 'nl' | 'en';
  onChange?: (lang: 'nl' | 'en') => void;
}
export declare function LangToggle(props: LangToggleProps): JSX.Element;