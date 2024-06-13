import { calculateAmount, calculateTotal, copyFunc } from "@/function";

export default {
  ADD_ITEM: (state, item) => {
    state.TotalPositions++;
    if (item.id in state.cart) {
      state.cart[item.id].qt++;
    } else {
      let stateItem = { ...item };
      stateItem.qt = 1;
      state.cart[item.id] = stateItem;
    }
    state.Total = calculateAmount(state.cart);
  },
  REMOVE_ITEM: (state, item) => {
    state.delItem = {};
    state.delItem = copyFunc(state.cart, state.delItem, item);
    delete state.cart[item];
    state.Total = calculateAmount(state.cart);
    state.TotalPositions = calculateTotal(state.cart);
  },
  CHENGE_QT: state => {
    state.TotalPositions = calculateTotal(state.cart);
    state.Total = calculateAmount(state.cart);
  },
  REVIVA: state => {
    state.cart = Object.assign(state.delItem, state.cart);
    state.Total = calculateAmount(state.cart);
    state.TotalPositions = calculateTotal(state.cart);
  },
  GET_PRODUCTS_FROM_API: (state, items) => {
    state.items = items;
  }
};
