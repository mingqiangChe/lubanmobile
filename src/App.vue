<script setup>
import headNav from './components/header.vue';
import mains from '../src/views/main/index.vue';
import foot from './components/foot.vue';
import loading from './components/loading.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();
const isLoading = computed(() => store.getters['common/isLoading']);
</script>
<template>
  <div class="main">
    <headNav></headNav>
    <mains></mains>
    <foot></foot>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<style scoped lang="scss">
.main {
}
</style>
