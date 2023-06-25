<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import BtnHome from "./components/BtnHome.vue";
export default {
  components: { AppHeader, AppFooter, BtnHome },
};
</script>

<template>
  <AppHeader></AppHeader>
  <div class="container red">
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
  <BtnHome></BtnHome>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

<style lang="scss">
@use "./styles/containerProjects.scss";
</style>

<style lang="scss">
@use "./styles/header.scss";
</style>

<style lang="scss">
@use "./styles/footer.scss";
</style>
