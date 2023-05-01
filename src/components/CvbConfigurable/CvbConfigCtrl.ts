import { ref } from "vue";
import type { Classes, Colors, Params, Styles } from "./types";
import { ALLOWED_ATTRS } from "./constants";

export class CvbConfigCtrl {
  classes = ref<Classes>({});
  colors = ref<Colors>({});
  allowedAttrs: typeof ALLOWED_ATTRS;

  constructor({ classes, colors, allowedAttrs }: Params = {}) {
    if (classes) {
      this.classes = ref(classes);
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
    this.classes.value[className] = {};
  }

  removeClass(className: string) {
    delete this.classes.value[className];
  }

  setClassAttr<Attr extends keyof Styles>(className: string, attr: Attr, param: Styles[Attr]) {
    this.classes.value[className][attr] = param;
  }
}