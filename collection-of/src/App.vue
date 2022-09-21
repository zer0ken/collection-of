<template>
  <v-app>
    <AppBar />
    <v-main>
      <MainBoard />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import MainBoard from "./components/MainBoard";

export default {
  name: "App",

  components: {
    AppBar,
    MainBoard,
  },

  data: () => ({
    //
  }),
};
</script>
