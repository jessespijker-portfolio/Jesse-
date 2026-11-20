/**
 * Genummerd mono-sectiekopje met hairline: "01 \u2014 PROJECTEN".
 */
export interface SectionLabelProps {
  /** Nummer als string, bv. "01" */
  index?: string;
  children?: React.ReactNode;
  /** Lichte variant voor donkere secties */
  inverse?: boolean;
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;