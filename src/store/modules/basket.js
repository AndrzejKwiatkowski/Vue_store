export const basket = {
    state: {
        basket: [],
    
      },
      mutations: {
        addProduct: (state, datas) => {
          state.basket.push(datas);
        },
        delProduct: (state, del) => {
          state.basket.splice(del, 1);
        }
      },
      actions: {
        dodaj: ({ commit }, datas) =>
          commit('addProduct', datas),
    
        delFromBasket: ({ commit }, del) =>
          commit('delProduct', del),
    
      },
}