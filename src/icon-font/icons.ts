export type IconsId =
  | "linkedin"
  | "location"
  | "mail"
  | "telegram";

export type IconsKey =
  | "Linkedin"
  | "Location"
  | "Mail"
  | "Telegram";

export enum Icons {
  Linkedin = "linkedin",
  Location = "location",
  Mail = "mail",
  Telegram = "telegram",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Linkedin]: "61697",
  [Icons.Location]: "61698",
  [Icons.Mail]: "61699",
  [Icons.Telegram]: "61700",
};
