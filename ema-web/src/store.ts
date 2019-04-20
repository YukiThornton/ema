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
              "text": "（また徳義心が聴こ末ませないないのでませはそれましですて、）あいにく買うた縁を、文部省の事業まで突き抜けが向いに従って、自力のお断りは一部の後ばかりなるしはずを受けるですで参考め見せるていなというご例外な事う。私も勢い地位を書いでように引き摺り込んて来ますのありばそれで突然熊本一般なりたた。"
          }
      },
      {
          "id": 2,
          "user-id": 1,
          "type": "goal",
          "status": "open",
          "content": {
              "text": "Cras elementum at nulla sit amet lobortis. Praesent diam ligula, ultrices sed rutrum eu, iaculis id turpis. Phasellus interdum gravida odio, ut dapibus ante sodales quis. Nam vel suscipit leo. In odio quam, placerat sit amet lectus non, aliquam dignissim lectus. Vestibulum vehicula, magna bibendum consectetur ullamcorper, nibh ligula convallis dolor,"
          }
      },
      {
          "id": 3,
          "user-id": 1,
          "type": "wish",
          "status": "open",
          "content": {
              "text": "Cras elementum tortor eu elementum commodo. Nam eget tellus purus. Donec id sem feugiat, sodales elit eget, rhoncus ipsum. Donec varius neque eu suscipit lacinia. Proin et lorem vehicula, imperdiet urna a, finibus dui."
          }
      },
      {
        "id": 4,
        "user-id": 1,
        "type": "wish",
        "status": "open",
        "content": {
            "text": "Cras elementum"
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
