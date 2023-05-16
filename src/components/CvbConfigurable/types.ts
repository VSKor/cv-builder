export interface Colors {
  [colorAliasName: string]: string;
}
export type Styles<Attrs extends string = string> = Record<Attrs, string>;

export type Classes<Names extends string = string, Attrs extends string = string> = Map<Names, Styles<Attrs>>;

export interface Params<Names extends string = string, Attrs extends string = string> {
  colors?: Colors;
  styles?: Classes<Names, Attrs>;
  allowedAttrs?: string[];
}