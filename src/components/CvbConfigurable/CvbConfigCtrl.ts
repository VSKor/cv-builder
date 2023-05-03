import { ref } from "vue";
import type { Classes, Colors, Params, Styles } from "./types";
import { ALLOWED_ATTRS } from "./constants";

/* @ToDo: move style resolve ot the ctrl */

/* @ToDo: filter styles styles by allowed attrs */

export class CvbConfigCtrl {
  styles = ref<Classes>({});
  colors = ref<Colors>({});
  allowedAttrs: typeof ALLOWED_ATTRS;

  constructor({ styles, colors, allowedAttrs }: Params = {}) {
    if (styles) {
      this.styles = ref(styles);
    }
    if (colors) {
      this.colors = ref(colors);
    }
    this.allowedAttrs = allowedAttrs || ALLOWED_ATTRS;
  }

  addColor(colorName: string, color: string) {
    this.colors.value[colorName] = color;
  }

  removeColor(colorName: string) {
    delete this.colors.value[colorName];
  }

  addClass(className: string) {
    this.styles.value[className] = {};
  }

  removeClass(className: string) {
    delete this.styles.value[className];
  }

  setClassAttr<Attr extends keyof Styles>(className: string, attr: Attr, param: Styles[Attr]) {
    this.styles.value[className][attr] = param;
  }
}