import { ref } from "vue";
import type { Classes, Colors, Params, Styles } from "./types";

export class CvbConfigCtrl {
  classes = ref<Classes>({});
  colors = ref<Colors>({});

  constructor({ classes, colors }: Params = {}) {
    if (classes) {
      this.classes = ref(classes);
    }
    if (colors) {
      this.colors = ref(colors);
    }
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