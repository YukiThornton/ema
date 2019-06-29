<template lang="pug">
  .ema-list
    EmaPlaque(v-for='ema in emas' :text='ema.content.text' :key='ema.id')
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import EmaPlaque from '@/components/EmaPlaque.vue';
import Ema from '@/models/Ema';

@Component({
  components: { EmaPlaque },
  computed: mapState(['emas']),
  methods: mapActions(['searchEmas']),
})
export default class EmaList extends Vue {
  private emas!: Ema[];
  private searchEmas!: () => {};

  private mounted() {
    if (this.emas.length === 0) {
      this.searchEmas();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ema-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
