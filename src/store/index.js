import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    sticker: [
      {
        id: 1,
        price: 14.99,
        src:
          "https://flerbo.ir/uploads/image/rootimage/2203/5ed8ca4a1e09a98890ea20754163e730.png?w=800&h=800",
        category: "For the perfect meal",
        title: "Money Heist",
        description: "Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
      },
      {
        id: 2,
        price: 24.99,
        src:
          "https://flerbo.ir/uploads/image/rootimage/2206/a4a40a2a5b805365942842d4ad5332ff.png?w=800&h=800",
        category: "For the perfect meal",
        title: "Money Heist",
        description: "Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
      },
      {
        id: 3,
        price: 34.99,
        src:
          "https://flerbo.ir/uploads/image/rootimage/2114/ab8fdd531b446a67b02648541b70dc9c.png?w=800&h=800",
        category: "For the perfect meal",
        title: "Baby Deadpool",
        description: "Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
      },
      {
        id: 4,
        price: 44.99,
        src:
          "https://flerbo.ir/uploads/image/rootimage/2174/ab4a51a8aac9cda4db83391031a57fcb.png?w=800&h=800",
        category: "For the perfect meal",
        title: "Starmie",
        description: "Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
      },
      {
        id: 5,
        price: 54.99,
        src:
          "https://flerbo.ir/uploads/image/rootimage/2112/9a8364c7a629d12359a82615ff321a69.png?w=800&h=800",
        category: "For the perfect meal",
        title: "Ash and Pikachu",
        description: "Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
      },
      {
        id: 6,
        price: 64.99,
        src:
          "https://flerbo.ir/uploads/image/rootimage/2072/9c8a540ee252a08fd483b114f13b20d7.png?w=800&h=800",
        category: "For the perfect meal",
        title: "STAR WAR COFFEE",
        description: "Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
      },
    ],
  },
  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, payload) => {
      const index = state.cartProducts.indexOf(payload);
      if (index > -1) {
        state.cartProducts.splice(index, 1);
      }
    },
    UPDATE_PRODUCT: (state, product) => {
      const index = state.cartProducts.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        Vue.set(state.cartProducts, index, product);
      }
    },
  },
  actions: {
    addProduct: (context, product) => {
      context.commit("ADD_PRODUCT", product);
    },
    removeProduct: (context, index) => {
      context.commit("REMOVE_PRODUCT", index);
    },
    updateProduct: (context, product) => {
      context.commit("UPDATE_PRODUCT", product);
    },
  },
  modules: {},
  getters: {
    getSticker: (state) => state.sticker,
    getProductsInCart: (state) => state.cartProducts,
  },
});
