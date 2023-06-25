<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: { AppHeader, AppFooter, AppMain },
};
</script>

<template>
  <AppHeader></AppHeader>
  <div class="//sfondo">
    <div class="container red">
      <div class="row">
        <AppMain></AppMain>
        <!--<router-view></router-view>  -->
      </div>
    </div>
  </div>
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
