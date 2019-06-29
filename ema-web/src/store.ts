import Vue from 'vue';
import Vuex from 'vuex';
import Ema from '@/models/Ema';
import EmaFactory from './models/factories/EmaFactory';
import EmaApiClient from './persistence/EmaApiClient';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emas: [] as Ema[],
    errorMessage: undefined as string | undefined,
  },
  mutations: {
    setEmas(state, emas: Ema[]) {
      state.emas = emas;
    },
    addEma(state, ema: Ema) {
      state.emas = [...state.emas, ema];
    },
    setError(state, message: string | undefined) {
      state.errorMessage = message;
    },
  },
  actions: {
    async searchEmas({ commit }) {
      commit('setEmas', EmaFactory.createListFromJson(await EmaApiClient.getAllEmas()));
    },
    async createEma({ commit }, contentText: string) {
      try {
        commit('addEma', EmaFactory.createEmaFromJson(await EmaApiClient.createEma(99, contentText)));
      } catch (e) {
        commit('setError', e.message);
      }
    },
    clearError({ commit }) {
      commit('setError', undefined);
    }
  },
});

