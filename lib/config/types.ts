export type Locale = "en" | "zh";

export type Config = {
  root: Locale;
  metadata: MetadataText;
  greeting: string;
  introduction: string;
  profile: ProfileText;
  social?: SocialText;
  dedication?: DedicationText;
  closing?: string;
};

export type MetadataText = {
  title: string;
  description: string;
};

export type ProfileText = {
  lead: string;
  tail: string;
};

export type SocialText = {
  lead: string;
  linkedin: string;
  middle: string;
  github: string;
  tail: string;
};

export type DedicationText = {
  elysia: string;
  conjunction: string;
  cyrene: string;
  tail: string;
};
