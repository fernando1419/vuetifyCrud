const state = {
   articles: [
      { id: 1, description: "Article 1", price: 10.5, stock: 100 },
      { id: 2, description: "Article 2", price: 5, stock: 100 },
      { id: 3, description: "Article 3", price: 77, stock: 100 },
      { id: 4, description: "Article 4", price: 11, stock: 100 },
      { id: 5, description: "Article 5", price: 2.5, stock: 100 },
      { id: 6, description: "Article 6", price: 0.5, stock: 100 },
      { id: 7, description: "Article 7", price: 5.8, stock: 100 },
      { id: 8, description: "Article 8", price: 100.5, stock: 100 },
      { id: 9, description: "Article 9", price: 190.5, stock: 100 },
      { id: 10, description: "Article 10", price: 160.5, stock: 100 }
   ]
}

const getters = {
   getArticles(state) {
      return state.articles;
  } 
}

const mutations = {
   addArticleMutation(state, payload) {
      state.articles.push(payload);
   }
}

const actions = {
   addArticleAction( context, payload) {
      context.commit('addArticleMutation', payload);
   }
}

export default {
   name: 'ArticlesStore',
   namespaced: true, // allows to have multiple store modules in our app.
   state,
   getters,
   mutations,
   actions
 }
 