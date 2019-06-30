<template lang="pug">
  .home
    EmaList(@emaClicked='showDetails')
    EmaDetails(v-if='shouldShowDetails' :ema='selectedEma' @close='hideDetails')
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import EmaList from '@/components/EmaList.vue';
import EmaDetails from '@/components/EmaDetails.vue';
import Ema from '../models/Ema';
import { mapState } from 'vuex';

@Component({
  components: {
    EmaList,
    EmaDetails,
  },
  computed: mapState(['emas']),
})
export default class Home extends Vue {
  private shouldShowDetails = false;
  private selectedEma = undefined as Ema | undefined;

  private showDetails(ema: Ema) {
    this.selectedEma = ema;
    this.shouldShowDetails = true;
  }

  private hideDetails() {
    this.shouldShowDetails = false;
    this.selectedEma = undefined;
  }

  @Watch('emas')
  private onEmaChange() {
    this.hideDetails();
  }
}
</script>
