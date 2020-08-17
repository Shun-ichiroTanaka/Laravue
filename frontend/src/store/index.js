import Vue from "vue";
import Vuex from "vuex";
import Trello from './laravue_example/trello';

Vue.use(Vuex);

export default new Vuex.Store({
  laravue_example: {
    Trello
  },
});
