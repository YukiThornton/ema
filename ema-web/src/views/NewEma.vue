<template lang="pug">
  div
    h1 Write Your Ema
    input(type='text' v-model='text')
    button(@click='onCreateEma') Create
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions } from 'vuex';

@Component({
  methods: mapActions(['createEma']),
})
export default class NewEma extends Vue {
  private createEma!: (contentText: string) => void;
  private text = '';

  private onCreateEma() {
    this.createEma(this.text);
  }
}
</script>
