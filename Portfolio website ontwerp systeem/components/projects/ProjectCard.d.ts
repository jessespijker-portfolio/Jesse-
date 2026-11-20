/**
 * Grote projectkaart voor de sticky stack: mono-index, titel, omschrijving, tags, beeld rechts.
 * @startingPoint section="Projecten" subtitle="Stack-kaart met beeld en tags" viewport="900x420"
 */
export interface ProjectCardProps {
  /** Mono-nummer, bv. "01" */
  index?: string;
  title: string;
  description?: string;
  /** Beeld-URL; leeg = placeholder "BEELD VOLGT" */
  image?: string;
  imageAlt?: string;
  tags?: string[];
  href?: string;
  linkLabel?: string;
  placeholderLabel?: string;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;