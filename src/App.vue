<template>
  <div id="app">
	<nav>
		<router-link to = "/signup">SignUp</router-link>
		<router-link to = "/login">Login</router-link>
		<router-link to = "/hobbies">Hobbies</router-link>
		
	</nav>

	<router-view />
  </div>
</template>

<script>
import Hobbies from './components/Hobbies.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
	Signup,
	Login,
	Hobbies
  }
}
</script>

<style>
body{
	background-color: #EEEEEE;
	font-family: sans-serif;
	display: grid;
	grid-template-rows: auto;
	justify-items: center;
	padding-top: 50px;

}
body,html{
	margin: 0;
	height:100%;
}
#app{
	width: 50%;
}
nav{
	padding: 20px 20px 20px 0;
}
nav a{
	padding: 10px;
	text-decoration:none;
	background: #fff;
	border-radius: 3px;
	color: rgb(0, 110, 255);
	font-weight: bold;
	margin-right: 15px;
}
</style>
