<template>
  <div>
    <div class="dropdown mr-5">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Your Basket
        <span class="badge badge-light">{{basket.length}}</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <table>
          <tbody class="dropdown-item">
            <tr v-for="(poz, index) in basket" :key="index">
              <td>{{poz.id}}</td>
              <td>{{poz.gender.toUpperCase()}}</td>
              <td>{{poz.type}}</td>
              <td>{{poz.size}}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deleteItem(index)">Usuń</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddToBasket',
  data() {
    return {};
  },

  methods: {
      deleteItem(ind) {
          
          console.log(ind)
          this.$store.dispatch('delFromBasket', ind)
      }
  },
  computed: {
    basket: function() {
      return this.$store.state.basket.basket;
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0.5rem;
}
</style>>

