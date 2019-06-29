<template lang="pug">
  .edit-page-mask
    BasicModal(v-if='showModal' @close='showModal = false')
      span(slot='header') Failed to Create Your Ema
      span(slot='body') {{ modalMessage }}
    .edit-and-preview
      .preview-area
        EmaPlaque(:text='text')
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
import Ema from '../../../ema-api-node/src/models/ema';

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

<style lang="scss" scoped>
textarea {
  resize: none;
}

button {
  cursor: pointer;
}

.btn {
  margin: 10px;
  padding: 8px 24px;
  border-width: 0;
  font-size: 16px;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.6);
}

.edit-page-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 42px;
  background-color: rgba(0, 0, 0, .5);
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
