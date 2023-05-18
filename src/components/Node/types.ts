export interface NodeAttributes {
  class?: string | string[];
  model?: string;
  [attr: string]: any;
}

export interface RawNodeDefs {
  uid?: string;
  component?: string;
  childes?: RawNodeDefs[];
  attributes?: NodeAttributes;
}

export interface NodeDefs extends RawNodeDefs {
  uid: string;
  childes?: NodeDefs[];
}

