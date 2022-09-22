<template>
  <v-app>
    <!-- <AppBar />
    <v-main>
      <MainBoard />
    </v-main> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
// import AppBar from "./components/AppBar";
// import MainBoard from "./components/MainBoard";

export default {
  name: "App",

  components: {
    // AppBar,
    // MainBoard,
  },

  data: () => ({
    //
  }),
};
</script>
