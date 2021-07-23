<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="display-2">Add Article</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <form v-on:submit.prevent="saveArticle()">
          <v-text-field
            v-model="article.description"
            label="Description"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="article.price"
            label="price"
            type="number"
            prefix="AR$"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="article.stock"
            label="stock"
            type="number"
            outlined
            required
          ></v-text-field>

          <v-card-actions>
            <v-btn
              color="warning"
              type="submit"
            >Save</v-btn>
          </v-card-actions>

        </form>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
export default {
  name: "ArticlesUpdate",
};
</script>

<style>
</style>
