interface NodeAttributes {
  class?: string | string[];
  [attr: string]: any;
}

export interface RawNodeDefs {
  id?: string;
  component?: string;
  childes?: RawNodeDefs[];
  modelRef?: string;
  attributes?: NodeAttributes;
}

export interface NodeDefs extends RawNodeDefs {
  id: string;
  childes?: NodeDefs[];
}

