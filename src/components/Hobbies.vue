<template>
 <div class = "hello">
   <div class = "holder">
     <form @submit.prevent="addhobby">
      <input type="text" placeholder="Enter a hobby here..." v-model="myhobby">
      <input type="hidden" v-model="hobbyowner">
      <input type="submit" style="background-color:lightblue;border-radius: 5px">
     </form>
    <div>
      <p>{{this.message}}</p>
    </div>
     <ul>
       <li v-for="(data, index) in hobbies" :key='index'>
        {{data.hobby}}
        <i class= "fa fa-minus-circle" v-on:click="removehobby(index)"></i>
       </li>
     </ul>

     <p>These are the hobbies you have.</p>
   </div>
 </div>
</template>

<script>
import axios from "axios";


export default {
  name: "Hobbies",
  data() {
    return {
      myhobby: "",
      hobbies: [],
      hobbyowner: localStorage.getItem("id"),
      message: ""
    };
  },
  methods: {
    addhobby() {
      axios
        .post("//localhost:1337/addhobby", {
          myhobby: this.myhobby,
          hobbyowner: this.hobbyowner
        })
        .then(response => {
          if (response.status === 200) {
            this.hobbies.push({ hobby: this.myhobby });
            this.myhobby = "";
            this.message = response.data.message;
          }
        })
        .catch(err => {
          if (err) {
            this.message = "Duplicate/Invalid Hobby";
          }
        });
    },
    mounted: function() {
      this.$nextTick(function() {});
    }
  },
  beforeMount() {
    var username = localStorage.getItem("username");
    axios.get(`//localhost:1337/user?username=${username}`).then(res => {
    localStorage.setItem("id", res.data[0].id);
  });
    let id = localStorage.getItem("id");
    axios.get(`//localhost:1337/hobby?owner=${id}`).then(res => {
      res.data.forEach(hobby => {
        this.hobbies.push({ hobby: hobby.myhobby });
      });
    });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
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
