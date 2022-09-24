<template>
  <div class="overflow-hidden">
    <app-bar></app-bar>
    <v-sheet id="main" class="overflow-y-auto" style="max-height: 500px">
      <hello-world style="height: 1000px"></hello-world>
    </v-sheet>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "HomeView",
  components: {
    AppBar,
    HelloWorld,
  },
};
</script>