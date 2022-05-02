import { createStore } from 'vuex'
import {infoModule} from "@/store/infoModule/infoModule";

export default createStore({

  modules: {
    info: infoModule
  },

})
