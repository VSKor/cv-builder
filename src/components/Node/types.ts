export interface NodeDefs {
  component: string;
  class?: string | string[];
  modelRef?: string;
}

export interface MultiNodeDefs {
  class?: string | string[];
  childes: (NodeDefs | MultiNodeDefs)[];
}

export type NodeModel = NodeDefs | MultiNodeDefs


