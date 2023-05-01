interface BaseDefs {
  id: string;
  class?: string | string[];
}

export interface NodeDefs extends BaseDefs {
  component: string;
  modelRef?: string;
  attributes?: Record<string, unknown>;
}

export interface MultiNodeDefs extends BaseDefs {
  childes: (NodeDefs | MultiNodeDefs)[];
}

export type NodeModel = NodeDefs | MultiNodeDefs