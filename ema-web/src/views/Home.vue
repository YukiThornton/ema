<template lang="pug">
  .home
    EmaList
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EmaList from '@/components/EmaList.vue';

@Component({
  components: {
    EmaList,
  },
})
export default class Home extends Vue {}
</script>
