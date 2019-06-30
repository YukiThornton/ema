<template lang="pug">
  .edit-details.mask.darker(@click='$emit("close")')
    BasicModal(v-if='shouldShowModal')
      span(slot='header') Confirmation
      span(slot='body') Delete this Ema?
      div(slot='footer')
        button.btn.cancel(@click='shouldShowModal = false') No
        button.btn.danger(@click='onDeleteSelected') Yes
    .wrapper
      .container(@click.stop)
        EmaPlaque(
          :text='ema.content.text'
        )
        .author Author: You
        .button-area
          button.btn.cancel(@click='$emit("close")') Back
          button.btn.danger(@click='shouldShowModal = true') DELETE
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Ema from '../models/Ema';
import EmaPlaque from '@/components/EmaPlaque.vue';
import BasicModal from '@/components/BasicModal.vue';
import { mapActions } from 'vuex';

@Component({
  components: { EmaPlaque, BasicModal },
  methods: mapActions(['deleteEma'])
})
export default class EmaDetails extends Vue {
  @Prop(Ema) ema!: Ema;
  private deleteEma: (id: number) => void;

  private shouldShowModal = false;

  private onDeleteSelected() {
    this.deleteEma(this.ema.id);
    this.shouldShowModal = false;
  }
}
</script>

<style lang="scss" scoped>
.edit-details {
  display: table;
  transition: opacity .3s ease;
}

.wrapper {
  display: table-cell;
  vertical-align: middle;
}

.container {
  width: 300px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .author {
    color: #fff;
  }
}
</style>
