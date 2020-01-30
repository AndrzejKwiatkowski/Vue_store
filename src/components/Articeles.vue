<template>
<div>
<navbar/>
<div class="container">
 
<div class="card d-table-cell " id="card" style="width: 18rem;" v-for="(articele, index) in articeles" :key="index">
  
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
    <a href="#" @click="addtobasket(articele.id)" class="btn btn-primary">Add to basket</a>
    </div>
    
</div>
</div>
</div>

</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar'



export default {
    name: 'Articeles',
    components:{
        Navbar,
        
    },
    data() {
        return {
            articeles: '',
            
        }
    },

    created() {
        axios.get('http://localhost:8000/api/articeles')
        .then((response) => {this.articeles = response.data
        //console.log(this.articeles)
        }
        )
        
    },
    methods: {
        
       addtobasket(id) {
           //const loadfile = id;
           axios.get('http://localhost:8000/api/articele/'+`${id}`)
           .then((response) =>   {
              //const datas = response.data
               console.log(response.data)
               this.$store.dispatch('dodaj', response.data)
           }
           
           )
           
           
           
           
        }
    }

}
</script>


<style scoped>

</style>>
