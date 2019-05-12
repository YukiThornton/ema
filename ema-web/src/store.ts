import Vue from 'vue';
import Vuex from 'vuex';
import Ema from '@/models/Ema';
import EmaFactory from './models/factories/EmaFactory';
import EmaApiClient from './persistence/EmaApiClient';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emas: [] as Ema[],
  },
  mutations: {
    setEmas(state, emas: Ema[]) {
      state.emas = emas;
    },
    addEma(state, ema: Ema) {
      state.emas = [...state.emas, ema];
    },
  },
  actions: {
    async searchEmas(context) {
      context.commit('setEmas', EmaFactory.createListFromJson(await EmaApiClient.getAllEmas()));
    },
    async createEma(context, contentText: string) {
      context.commit('addEma', EmaFactory.createEmaFromJson(await EmaApiClient.createEma(99, contentText)));
    },
  },
});

