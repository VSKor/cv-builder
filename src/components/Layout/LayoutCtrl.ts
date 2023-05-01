interface BaseDefs {
  id: string;
  class?: string | string[];
}

export interface NodeDefs extends BaseDefs {
  component: string;
  modelRef?: string;
}

export interface MultiNodeDefs extends BaseDefs {
  childes: (NodeDefs | MultiNodeDefs)[];
}

export type NodeModel = NodeDefs | MultiNodeDefs

const idGen = () => {
  return `${+new Date()}-${Math.random()}`;
}

export class LayoutCtrl {
  model: NodeModel;
  private index: Map<string, NodeModel> = new Map();

  constructor(model: NodeModel) {
    this.model = this.normalizeModel(model, this.index);
  }

  normalizeModel(model: NodeModel, index: Map<string, NodeModel>) {
    model.id = model.id || idGen();
    index.set(model.id, model);
    if ('childes' in model) {
      model.childes.forEach((childModel) => this.normalizeModel(childModel, index))
    }
    return model;
  }
}