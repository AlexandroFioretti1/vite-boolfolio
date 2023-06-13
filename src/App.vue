<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      projects: [],
      host: "http://127.0.0.1:8000/",
      endpoint: "api/projects",
    };
  },
  methods: {},
  mounted() {
    const fullUrl = this.host + this.endpoint;
    axios.get(fullUrl).then((response) => {
      this.projects = response.data;
    });
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col col-4 g-4" v-for="project in projects">
        <div class="card">
          <h3>Name Repository: {{ project.name }}</h3>
          <p>Start Date: {{ project.start_date }}</p>
          <p v-if="project.type">type: {{ project.type.name }}</p>
          <template v-if="project.technologies">
            <p>technologies:</p>
            <p v-for="technology in project.technologies">
              {{ technology.name }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
