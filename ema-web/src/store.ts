import Vue from 'vue';
import Vuex from 'vuex';
import Ema from '@/models/Ema';
import EmaFactory from './models/factories/EmaFactory';
import EmaApiClient from './api/EmaApiClient';

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
    async getAllEmas({ commit }) {
      try {
        commit('setEmas', EmaFactory.createListFromJson(await EmaApiClient.getAllEmas()));
      } catch (e) {
        commit('setError', e.message);
      }
    },
    async createEma({ commit, dispatch }, contentText: string) {
      try {
        await EmaApiClient.createEma(99, contentText)
        dispatch('getAllEmas');
      } catch (e) {
        commit('setError', e.message);
      }
    },
    async deleteEma({ commit, dispatch }, id: number) {
      try {
        await EmaApiClient.deleteEma(id);
        dispatch('getAllEmas');
      } catch (e) {
        commit('setError', e.message);
      }
    },
    clearError({ commit }) {
      commit('setError', undefined);
    }
  },
});

