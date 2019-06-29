<template lang="pug">
  div
    BasicModal(v-if='showModal' @close='showModal = false')
      span(slot='header') Failed to Create Your Ema
      span(slot='body') {{ modalMessage }}
    h1 Write Your Ema
    input(type='text' v-model='text')
    button(@click='onCreateEma') Create
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { Watch } from 'vue-property-decorator';
import BasicModal from '@/components/BasicModal.vue';

@Component({
  components: { BasicModal },
  computed: mapState(['emas', 'errorMessage']),
  methods: mapActions(['createEma', 'clearError']),
})
export default class NewEma extends Vue {
  private createEma!: (contentText: string) => void;
  private clearError!: () => void;
  private errorMessage: undefined | string;

  private text = '';
  private modalMessage: undefined | string;
  private showModal = false;

  private onCreateEma() {
    this.createEma(this.text);
  }

  private showErrorDialog(message: string) {
    this.modalMessage = message;
    this.showModal = true;
  }

  @Watch('errorMessage')
  private handleError() {
    if (this.errorMessage === undefined) return;
    this.showErrorDialog(this.errorMessage)
    this.clearError();
  }

  @Watch('emas')
  private backToPreviousPage() {
    this.$router.go(-1)
  }
}
</script>
