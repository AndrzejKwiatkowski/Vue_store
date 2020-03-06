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
        <table class>
          <tbody class="dropdown-item">
            <tr v-for="(poz, index) in basket" :key="index">
              <td>{{poz.id}}</td>
              <td>{{poz.gender.toUpperCase()}}</td>
              <td>{{poz.type}}</td>
              <td>{{poz.quantity}}</td>
              <td>{{poz.size}}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deleteItem(index)">Usuń</button>
              </td>
            </tr>
            <tr>
              <td colspan="5">
                <button class="btn btn-primary" @click="createOrder">Submit Your Order</button>
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
  name: "AddToBasket",
  data: function() {
    return {};
  },

  methods: {
    deleteItem(ind) {
      console.log(ind);
      this.$store.dispatch("delFromBasket", ind);
    },
    createOrder() {
      console.log(JSON.stringify(this.$store.state.basket.data));

      this.$http.post( "http://localhost:8000/api/parcel",
          JSON.stringify(this.$store.state.basket.data)
        )
        
       .then(Response => console.log(Response))
        .then((this.$store.dispatch("resetBasket")))
    }
  },

  computed: {
    basket: function() {
      return this.$store.state.basket.data;
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0.5rem;
}
</style>>

