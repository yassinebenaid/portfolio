// Shapes for every piece of portfolio content. Edit the data files next to this one;
// the UI reads them as-is, so adding or removing an entry is all it takes.

export type Profile = {
  name: string;
  /** Short first name shown with the gradient in the hero. */
  firstName: string;
  role: string;
  /** Rotating words shown after "I build ..." in the hero. */
  focus: string[];
  bio: string;
  location: string;
  /** Shown in the footer when set. */
  email?: string;
  /** Optional photo URL. Leave empty to show initials instead. */
  avatar?: string;
  initials: string;
  /** Public address of the site once hosted, e.g. "https://yassinebenaid.com". Makes links in search/AI metadata absolute. */
  siteUrl?: string;
  yearsOfExperience: number;
  /** Optional link to a CV / resume PDF. */
  resumeUrl?: string;
};

export type SocialIconName = "github" | "linkedin" | "x" | "email" | "website" | "dribbble";

export type Social = {
  label: string;
  url: string;
  icon: SocialIconName;
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  /** Marks the role with a pulsing dot. */
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
};

export type Project = {
  title: string;
  description: string;
  year?: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Emoji or short symbol shown on the card. */
  emoji?: string;
};

/** Any `si*` icon from the `simple-icons` package fits this shape. */
export type SkillLogo = {
  /** SVG path drawn in a 24x24 box. */
  path: string;
  /** Brand color without the leading "#". */
  hex: string;
};

export type Skill = {
  name: string;
  logo?: SkillLogo;
  /** Short text shown instead of a logo, e.g. "AWS". */
  badge?: string;
  /** Brand color (e.g. "#FF9900") used when there is no logo. */
  color?: string;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};
