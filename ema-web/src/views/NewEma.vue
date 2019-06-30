<template lang="pug">
  .edit-page.mask
    BasicModal(v-if='showModal' @close='showModal = false')
      span(slot='header') Failed to Create Your Ema
      span(slot='body') {{ modalMessage }}
    .edit-and-preview
      .preview-area
        EmaPlaque(:text='text' :clickable='false')
      .edit-area
        textarea(v-model='text' rows='9' cols='36' placeholder='Write down your wish here...')
      .button-area
        button.btn.cancel-button(@click='backToPreviousPage') Cancel
        button.btn.submit-button(@click='onCreateEma') Create
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { Watch } from 'vue-property-decorator';
import BasicModal from '@/components/BasicModal.vue';
import EmaPlaque from '@/components/EmaPlaque.vue';
import Ema from '../models/Ema';

@Component({
  components: { BasicModal, EmaPlaque },
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
    if (this.errorMessage === undefined) { return; }
    this.showErrorDialog(this.errorMessage);
    this.clearError();
  }

  @Watch('emas')
  private backToPreviousPage() {
    this.$router.go(-1);
  }
}
</script>

<style lang="scss" scoped>
.edit-page {
  padding-top: 42px;
}

.submit-button {
  background-color: #e23438;
  color: #fff;
}

.cancel-button {
  background-color: rgb(136, 136, 136);
  color: #fff;
}

.edit-and-preview {
  display: flex;
  flex-direction: column;
  align-items: center;

  .edit-area {
    flex: 2;

    textarea {
      font-size: 12px;
      color: #666;
    }
  }

  .preview-area {
    flex: 1;
  }
}
</style>
