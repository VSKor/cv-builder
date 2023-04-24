import { Quasar } from 'quasar'
// Import Quasar css
import 'quasar/src/css/index.sass'
import type { App } from "vue";
import { CUSTOM_QUASAR_ICON_SET } from "./constants";

export const setupQuasar = (app: App) => {
  return app.use(Quasar, {
    iconSet: CUSTOM_QUASAR_ICON_SET,
    plugins: {}, // import Quasar plugins and add here
  });
};
