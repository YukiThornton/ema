<template lang="pug">
  .ema-list
    EmaPlaque(v-for='ema in emas' :ema='ema' :key='ema.id')
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import EmaPlaque from '@/components/EmaPlaque.vue';

@Component({
  components: { EmaPlaque },
  computed: mapState(['emas']),
  methods: mapActions(['searchEmas']),
})
export default class EmaList extends Vue {
  private searchEmas!: () => {};

  private mounted() {
    this.searchEmas();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
