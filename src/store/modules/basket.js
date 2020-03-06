export const basket = {
  state: {
    data: [],
    defaultState: {}

  },
  mutations: {
    addProduct: (state, datas) => {
      state.data.push(datas);
    },
    delProduct: (state, del) => {
      state.data.splice(del, 1);
    },
    defBasket: (state) => {
    const empty = [];
      state.data = empty;
    
    },
  },
  actions: {
    dodaj: ({ commit }, datas) =>
      commit('addProduct', datas),

    delFromBasket: ({ commit }, del) =>
      commit('delProduct', del),

    resetBasket: ({commit}) =>
    commit('defBasket'),


  },
}