<template>
  <form class="container col-md-4 mt-5">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        v-model="credential.email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        v-model="credential.password"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    <button type="submit" @click.prevent="login" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
import router from "../router/index";

export default {
  name: "Login",

   data() {
            return {
                credential: {
                    email:'',
                    password:''
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', this.credential);
            }
        },
        created: function () {
        }
  };
</script>

<style scoped lang="scss">
</style>
