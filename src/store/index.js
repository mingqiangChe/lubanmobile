import { createStore } from "vuex";
import common from "./module/common";

export default createStore({
  modules: {
    common,
  },
});
