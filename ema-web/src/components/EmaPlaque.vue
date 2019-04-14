<template lang="pug">
  .text {{ ema.content.text }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Ema from '@/models/Ema';

@Component
export default class EmaPlaque extends Vue {
  @Prop(Ema) private ema!: Ema;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
