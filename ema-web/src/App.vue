<template lang="pug">
  #app
    .links
      router-link(to="/")
        .home-button Ema
      router-link(to="/new")
        .add-button +
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}

</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

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

.btn.cancel {
  background-color: rgb(136, 136, 136);
  color: #fff;
}

.btn.danger {
  background-color: rgb(250, 23, 23);
  color: #fff;
}

.mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.mask.darker {
  background-color: rgba(0, 0, 0, .7);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #BB0F17;

    a {
      text-decoration: none;
      color: #F4DEDF;

      .add-button {
        font-size: 30px;
      }
    }
  }
}
</style>
