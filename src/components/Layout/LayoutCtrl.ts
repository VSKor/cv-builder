import type { NodeDefs } from '@/components/Node';

const idGen = () => {
  return `${+new Date()}-${Math.random()}`;
}

export class LayoutCtrl {
  model: NodeDefs;
  private index: Map<string, NodeDefs> = new Map();

  constructor(model: NodeDefs) {
    this.model = this.normalizeModel(model, this.index);
  }

  normalizeModel(model: NodeDefs, index: Map<string, NodeDefs>) {
    model.id = model.id || idGen();
    index.set(model.id, model);
    if (model.childes) {
      model.childes.forEach((childModel) => this.normalizeModel(childModel, index))
    }
    return model;
  }
}