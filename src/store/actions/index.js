import axios from "axios";
export default {
  addToItems: ({ commit }, item) => commit("ADD_ITEM", item),
  removeItem: ({ commit }, item) => commit("REMOVE_ITEM", item),
  chengeQt: ({ commit }) => commit("CHENGE_QT"),
  revivalItem: ({ commit }) => commit("REVIVA"),
  getProducts({ commit }) {
    axios
      .get("https://127.0.0.1:8000/api/product/get-products")
      .then((response) => {
        commit("GET_PRODUCTS_FROM_API", response.data);
      });
  },
};
