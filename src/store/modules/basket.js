export const basket = {
    state: {
        data: [],
    
      },
      mutations: {
        addProduct: (state, datas) => {
          state.data.push(datas);
        },
        delProduct: (state, del) => {
          state.data.splice(del, 1);
        }
      },
      actions: {
        dodaj: ({ commit }, datas) =>
          commit('addProduct', datas),
    
        delFromBasket: ({ commit }, del) =>
          commit('delProduct', del),
    
      },
}