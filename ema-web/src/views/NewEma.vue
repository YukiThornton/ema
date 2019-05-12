<template lang="pug">
  div
    h1 New Ema
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

  private onCreateEma() {
    this.createEma('create ema from NewEma page');
  }
}
</script>
