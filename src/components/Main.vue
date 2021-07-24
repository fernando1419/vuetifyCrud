<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          alt="logo"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">Articles SPA using Vuetify, Router and Vuex.</h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Main",
};
</script>
