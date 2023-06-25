<script>
export default {
  name: "HelloWorld",
};
</script>

<template>
  <div class="text-center p-3 ">
    <router-link :to="{ name: 'home' }">
      <button class="btn-primary btn">Home</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>
