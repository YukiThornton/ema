<template lang="pug">
  .basic-modal.mask
    .modal-wrapper(@click='$emit("close")')
      .modal-container(@click.stop)
        .header
          h3
            slot(name='header') Error
        .body
          slot(name='body') Try again later, ok?
        .footer
          slot(name='footer')
            button.btn.cancel(@click='$emit("close")') OK
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class BasicModal extends Vue {
}
</script>

<style lang="scss" scoped>
.basic-modal {
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  color: #777;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.header h3 {
  margin-top: 0;
  color: #656565;
}

.body {
  margin: 20px 0;
}

.footer {
  display: flex;
  justify-content: flex-end;
}

</style>
