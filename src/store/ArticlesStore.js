import ARTICLES from "./data";

const state = {
   articles: ARTICLES
}

const getters = {
   getArticle(state) {
      return articleId => state.articles.find(item =>{
         // console.log(articleId);
         return item.id === articleId;
       });
   },
   getArticles(state) {
      return state.articles;
  }
}

const mutations = {
   addArticleMutation(state, payload) {
      state.articles.push(payload);
   },
   updateArticleMutation(state, article) {
      const record = state.articles.find( item => item.id === article.id);
      if (record) {
         record.description = article.description;
         record.price = article.price;
         record.stock = article.stock;
      } else {
         console.log('Not found an article to update');
      }
   },
   deleteArticleMutation(state, articleId) {
      const records = state.articles.filter( item => item.id !== articleId);
      // console.log(records);
      // console.log(state.articles);
      if (records) {
         state.articles = records;
      }
   }
}

const actions = {
   addArticleAction( context, payload) {
      context.commit('addArticleMutation', payload);
   },
   updateArticleAction (context, article) {
      context.commit('updateArticleMutation', article);
   },
   deleteArticleAction (context, articleId) {
      context.commit('deleteArticleMutation', articleId);
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
