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
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
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
