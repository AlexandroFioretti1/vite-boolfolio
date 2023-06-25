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
        <h3 class="">Project Name: {{ project.name }}</h3>
        <img :src="host + 'storage/' + project.screenshot" alt="" />
        <span class="mb-3"
          ><strong> Start Date:</strong> {{ project.start_date }}</span
        >
        <p v-if="project.type">
          <strong> Type: </strong> {{ project.type.name }}.
        </p>
        <div v-if="project.technologies">
          <strong> Technologies: </strong>
          <span v-for="technology in project.technologies">
            {{ technology.name }}.
          </span>
          <h6 class="mt-4">Made by: Alexandro Fioretti</h6>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>


<style lang="scss">
@use "../styles/cardProject.scss";
</style>