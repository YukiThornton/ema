<template lang="pug">
  .plaque
    .text-area
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
@font-face {
  font-family: komorebi-gothic-P;
  src: url('../assets/fonts/komorebi-gothic-P.ttf');
}
@import url('https://fonts.googleapis.com/css?family=Itim');

.plaque {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width:300px;
  height:300px;
  background-image: url('../assets/images/ema.png');
  background-repeat: no-repeat;
  background-size: contain;

  .text-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 140px;
    margin-right: 5px;
    margin-bottom: 15px;

    .text {
      color: #7A5638;
      font-family: 'Itim', 'komorebi-gothic-P', 'Meiryo', sans-serif;
      font-size: 13px;
      line-height: 1.2;
    }
  }
}
</style>
