<template>
<div>
<navbar/>
<div class="container">
<div class="card d-table-cell" style="width: 18rem;" v-for="(articele, index) in articeles" :key="index">
  <img class="card-img-top" :src="'img/' + articele.image" alt="Card image cap">
  <div class="card-body" >
    <h5 class="card-title">Clothes</h5>
    <p class="card-text">
      
            Number: {{ articele.id }} <br/>
            Gender: {{ articele.gender }}<br/>
            Type: {{ articele.type }}<br/>
            Size: {{ articele.size }}<br/>
            Price: {{ articele.price }}<br/>
        
    </p>
    <a href="#" class="btn btn-primary">Add basket</a>
    </div>
</div>
</div>
</div>

</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar'

export default {
    name: 'Articele',
    components:{
        Navbar,
    },
    data() {
        return {
            articeles: ''
        }
    },

    created() {
        axios.get('http://localhost:8000/api/articeles')
        .then((response) => {this.articeles = response.data
        console.log(this.articeles)
        }
        )
        
    }

}
</script>


<style>

</style>