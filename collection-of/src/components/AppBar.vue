<template>
  <!-- <v-app-bar app>
    <v-container class="text-center">
        <v-toolbar-title>Collection of</v-toolbar-title>
    </v-container>
  </v-app-bar> -->
  <v-app-bar
    absolute
    flat
    color="#fcb69f"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
    scroll-target="#main"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-spacer></v-spacer>
    <v-app-bar-title> Collection of... </v-app-bar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>