export interface Colors {
  [colorAliasName: string]: string;
}
export interface Styles {
  color?: string;
  width?: string;
  padding?: string;
  'font-size'?: string;
  bg?: string;
}

export interface Classes {
  [className: string]: Styles;
}

export interface Params {
  colors?: Colors;
  styles?: Classes;
  allowedAttrs?: string[];
}