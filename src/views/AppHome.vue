<script>
import axios from "axios";
export default {
  name: "AppHome",
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
    axios
      .get(fullUrl)
      .then((response) => {
        this.projects = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div class="col col-4 g-4" v-for="project in projects">
    <router-link
      class="text-decoration-none"
      :to="{ name: 'project', params: { id: project.id } }"
    >
      <div class="card h-100">
        <h3 class="">Name Repository: {{ project.name }}</h3>
        <img :src="host + 'storage/' + project.screenshot" alt="" />
        <p>Start Date: {{ project.start_date }}</p>
        <p v-if="project.type">type: {{ project.type.name }}</p>
        <template v-if="project.technologies">
          <p>technologies:</p>
          <p v-for="technology in project.technologies">
            {{ technology.name }}
          </p>
          <p>Made by: Alexandro Fioretti</p>
        </template>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>
