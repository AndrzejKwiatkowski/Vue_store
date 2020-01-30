<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Clothing Store</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/articeles">Articeles<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <AddToBasket/>
        </li>
      </ul>
    </form>
  </div>
</nav>
</template>

<script>
import AddToBasket from '../components/AddToBasket'
export default {
name:'Navbar',
components: {
  AddToBasket,
}
}

</script>

<style>

</style>