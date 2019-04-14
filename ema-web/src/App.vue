<template lang="pug">
  #app
    .links
      router-link(to="/")
        a home
      router-link(to="/new")
        a new
    router-view
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
