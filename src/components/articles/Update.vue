<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="display-2">Edit Article</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <form v-on:submit.prevent="save()">
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
  data() {
    return {
      article: {
        id: null,
        description: "",
        price: 0,
        stock: 0,
      },
    };
  },
  mounted() {
    this.article.id = this.$route.params.id;
    this.article = this.getArticleFromStore(this.article.id);
  },
  methods: {
    getArticleFromStore(id) {
      return this.$store.getters["ArticlesStore/getArticle"](id);
    },
    save() {
      this.$store.dispatch("ArticlesStore/updateArticleAction", this.article);
      this.$router.push("/articles"); // redirects
    },
  },
};
</script>

<style>
</style>
