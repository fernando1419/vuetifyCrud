<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="display-2">List of Articles</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          :to=" { name: 'createArticle' }"
          class="mx-2"
          fab
          dark
          small
          color="indigo"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12">
        <v-simple-table
          fixed-header
          class="elevation-3"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Id</th>
                <th class="text-center">Description</th>
                <th class="text-center">Price</th>
                <th class="text-center">Stock</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="article in articles"
                :key="article.id"
              >
                <td> {{ article.id }} </td>
                <td> {{ article.description }} </td>
                <td> {{ article.price }} </td>
                <td> {{ article.stock }} </td>
                <td>
                  <v-btn
                    fab
                    small
                    color="primary"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    small
                    color="error"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <!-- popup dialog for deleting records -->
    <v-dialog
      v-model="dialog"
      max-width="350"
    >
      <v-card>
        <v-card-title class="headline">
          Delete Record?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">Cancel</v-btn>
          <v-btn
            @click="confirmDeletion(id)"
            color="error"
          >Accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbar"
      color="success"
    > {{ textsnack }}
      <template v-slot:action="{attrs}">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >Close</v-btn>
      </template>
    </v-snackbar>

  </v-container>
</template>

<script>
export default {
  name: "ArticlesIndex",
  data() {
    return {
      dialog: false,
      snackbar: null,
      textsnack: null,
      articles: [
        { id: 1, description: "Article 1", price: 10.5, stock: 100 },
        { id: 2, description: "Article 2", price: 5, stock: 100 },
        { id: 3, description: "Article 3", price: 77, stock: 100 },
        { id: 4, description: "Article 4", price: 11, stock: 100 },
        { id: 5, description: "Article 5", price: 2.5, stock: 100 },
        { id: 6, description: "Article 6", price: 0.5, stock: 100 },
        { id: 7, description: "Article 7", price: 5.8, stock: 100 },
        { id: 8, description: "Article 8", price: 100.5, stock: 100 },
      ],
    };
  },
};
</script>
