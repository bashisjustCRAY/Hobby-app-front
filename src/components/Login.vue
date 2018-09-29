<template>
<div>
  <form @submit.prevent="login">
    <input type= "text" placeholder="username" v-model="username">
    <input type= "password" placeholder="password" v-model="password">
    <button type="submit">Login</button>
  </form>
  <p>{{this.message}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login() {
      axios
        .post("//localhost:1337/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          if (res.data.authStatus === true) {
            localStorage.setItem('username', this.username);
            this.$router.push("/hobbies");
          } else {
            this.message = "Check your details";
          }
        })
        .catch(err => {
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
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
</style>
