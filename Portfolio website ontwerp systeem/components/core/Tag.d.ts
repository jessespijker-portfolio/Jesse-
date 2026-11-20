/**
 * Mono-chip voor vaardigheden/metadata op projectkaarten (bv. SOLIDWORKS, PROTOTYPING).
 */
export interface TagProps {
  children?: React.ReactNode;
  /** 'default' | 'accent' */
  tone?: 'default' | 'accent';
}
export declare function Tag(props: TagProps): JSX.Element;