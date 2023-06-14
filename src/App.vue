<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <AppHeader></AppHeader>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
