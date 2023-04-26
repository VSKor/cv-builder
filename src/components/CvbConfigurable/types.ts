export interface Colors {
  [colorAliasName: string]: string;
}
export interface Styles {
  color?: string;
}

export interface Classes {
  [className: string]: Styles;
}

export interface Params {
  colors?: Colors;
  classes?: Classes;
}