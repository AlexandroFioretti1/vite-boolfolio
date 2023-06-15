<script>
import axios from "axios";
export default {
  name: "ProjectShow",
  data() {
    return {
      project: [],
      host: "http://127.0.0.1:8000/",
      endpoint: "api/projects",
    };
  },
  mounted() {
    const fullUrl = this.host + this.endpoint + "/" + this.$route.params.id;
    axios
      .get(fullUrl)
      .then((response) => {
        if (response.data.success) {
          this.project = response.data.project;
        } else {
          this.$router.push({
            name: "pagenotfound",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div v-if="project" class="col">
    <div class="card">
      <h3 class="">Name Repository: {{ project.name }}</h3>
      <img :src="host + 'storage/' + project.screenshot" alt="" />
      <p>Start Date: {{ project.start_date }}</p>
      <p>technologies:</p>
      <p v-for="technology in project.technologies">{{ technology.name }}</p>
      <p>Made by: Alexandro Fioretti</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
