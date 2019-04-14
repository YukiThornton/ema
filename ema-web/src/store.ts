import Vue from 'vue';
import Vuex from 'vuex';
import Ema from '@/models/Ema';
import EmaFactory from './models/factories/EmaFactory';

Vue.use(Vuex);

const localEmas = `{
  "emas": [
      {
          "id": 1,
          "user-id": 1,
          "type": "wish",
          "status": "open",
          "content": {
              "text": "Wish 1"
          }
      },
      {
          "id": 2,
          "user-id": 1,
          "type": "goal",
          "status": "open",
          "content": {
              "text": "Goal 1"
          }
      },
      {
          "id": 3,
          "user-id": 1,
          "type": "wish",
          "status": "open",
          "content": {
              "text": "Wish 2"
          }
      }
  ]
}`;

export default new Vuex.Store({
  state: {
    emas: [] as Ema[],
  },
  mutations: {
    setEmas(state, emas: Ema[]) {
      state.emas = emas;
    },
  },
  actions: {
    searchEmas() {
      this.commit('setEmas', EmaFactory.createListFromJson(JSON.parse(localEmas)));
    },
  },
});
