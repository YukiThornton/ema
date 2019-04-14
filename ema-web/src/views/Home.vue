<template>
  <div class="home">
    Home
    <EmaList />
  </div>
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
