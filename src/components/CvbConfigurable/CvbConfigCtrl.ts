import type { Classes, Colors, Params, Styles } from "./types";
import { ALLOWED_ATTRS, EVENTS } from "./constants";
import { EventEmitter } from 'eventemitter3';

/* @ToDo: move style resolve ot the ctrl */

/* @ToDo: filter styles styles by allowed attrs */

export class CvbConfigCtrl<Names extends string = string, Attrs extends string = string | typeof ALLOWED_ATTRS[number]> {
  styles: Classes<Names, Attrs> = new Map();
  colors: Colors = {};
  allowedAttrs: string[];
  emitter = new EventEmitter()

  constructor({ styles, colors, allowedAttrs }: Params<Names, Attrs> = {}) {
    if (styles) {
      this.styles = new Map(Object.entries(styles)) as Classes<Names, Attrs>;
    }
    if (colors) {
      this.colors = colors;
    }
    this.allowedAttrs = [...(allowedAttrs || ALLOWED_ATTRS)];
  }

  addColor(colorName: string, color: string) {
    this.colors[colorName] = color;
  }

  removeColor(colorName: string) {
    delete this.colors[colorName];
  }

  addClass(className: Names) {
    this.styles.set(className, {} as Styles<Attrs>);
  }

  removeClass(className: Names) {
    this.styles.delete(className);
  }

  setClassAttr(className: Names, attr: Attrs, param: string) {
    const classStyles = this.styles.get(className);
    if (classStyles) {
      classStyles[attr] = param
      this.emitter.emit(EVENTS.UPDATE_STYLES);
    }
  }
}