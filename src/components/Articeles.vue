<template>
  <div>
    <navbar />
    <div class="container">
      <div
        class="card d-table-cell"
        id="card"
        style="width: 18rem;"
        v-for="(articele, index) in articeles"
        :key="index"
      >
        <img class="card-img-top" :src="'img/' + articele.image" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Clothes</h5>
          <p class="card-text">
            Number: {{ articele.id }}
            <br />
            Gender: {{ articele.gender }}
            <br />
            Type: {{ articele.type }}
            <br />
            Size: {{ articele.size }}
            <br />
            Price: {{ articele.price }}
            <br />
          </p>

          <QuantityButtons @clicked="show"></QuantityButtons>
        
          <a href="#" @click="addtobasket(articele.id)" class="btn btn-primary">Add to basket</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import QuantityButtons from "../components/QuantityButtons";

export default {
  name: "Articeles",
  components: {
    Navbar,
    QuantityButtons
  },
 
  data() {
    return {
      articeles: "",
      quantity: '',
    };
  },

  created() {
    this.axios.get("http://localhost:8000/api/articeles").then(response => {
      this.articeles = response.data;
      //console.log(this.val);
    });
  },
  methods: {
    addtobasket(id) {
      //const loadfile = id;
      this.axios
        .get("http://localhost:8000/api/articele/" + `${id}`)
        .then(response => {
     response.data.quantity = this.quantity;
          console.log(response.data);
          this.$store.dispatch("dodaj", response.data);
        });
    },
  

 show(val) {
        this.quantity = val;
    }
}
   
  }

</script>


<style lang="scss"scoped>
input.quantity-field {
  width: 40px;
}
.input-group {
  padding-bottom: 10px;
}
</style>>
