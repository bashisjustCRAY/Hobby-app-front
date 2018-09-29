<template>
  <form method="post" @submit.prevent="signUp"> <!-- add post method here -->
    <input type= "text" placeholder="Firstname" v-model="firstname">
    <input type= "text" placeholder="Lastname" v-model="lastname">
    <input type= "text" placeholder="Number" v-model="phone">
    <input type= "text" placeholder="Email" v-model="email">
    <input type= "text" placeholder="username" v-model="username">
    <input type= "password" placeholder="password (at least six characters)" v-model="password">
    <button type="submit">SignUp</button>
  </form>
</template>

<script> //the password i set must be six or more, put it in the placeholder 
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      message: "",
    };
  },

  methods: {
    signUp() {
      axios
        .post("//localhost:1337/signup", {
          firstname: this.firstname,
          lastname: this.lastname,
          phone: this.phone,
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(res => {
          // eslint-disable-next-line
          console.log(res);
        }).catch(err => {
          // eslint-disable-next-line
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input,
button {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
</style>
