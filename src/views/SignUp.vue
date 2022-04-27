<template>
<div class="signup">

      <header>
      <NavbarLog />
    </header>
    <!-- Content Login -->
  <div class="col-sm-12" style="background-color:#FFC0CB ; height:200px;width:100vw;">
    <center><h1 style="color:#000000;
     font-family: 'Poppins', sans-serif;font-size:60px;
     font-weight:bold;padding:50px">Sign Up</h1></center>
  </div>
<!-- End Content Login -->
<!-- Content -->

<b-container class="bv-example-row">
    <b-row>
    <b-col cols="4">
        <img src="../assets/logo.png" class="img" alt="" srcset="">
    </b-col>
    <b-col cols="8">
        <div class="card" style="border-color:#ffffff">
      <div class="card-body">
        <h5 class="card-title" style="font-family: 'Sarabun', sans-serif;font-weight:bold;font-size:30px;margin-top:50px">
          Sign Up to Helénē Beauty</h5>
        


<div>
    <b-form @submit.stop.prevent="onSubmit">
        <b-form-input id="example-input-1" name="example-input-1" placeholder="Username"
          v-model="$v.form.username.$model"
          :state="validateState('username')"
          aria-describedby="input-1-live-feedback"
       style="border-color:#FFC0CB;margin-top:30px" 
       >
        </b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field and must be at least 3 characters.
        </b-form-invalid-feedback>

         <b-form-input id="example-input-1" name="example-input-1" placeholder="Email"
          v-model="$v.form.email.$model"
          :state="validateStateemail('email')"
          aria-describedby="input-1-live-feedback"
       style="border-color:#FFC0CB;margin-top:30px" 
       >
        </b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field.
        </b-form-invalid-feedback>

        <b-form-input id="password" name="password" placeholder="password"
          v-model="$v.form.password.$model"
          :state="validateStatement('password')"
          aria-describedby="input-1-live-feedback"
        style="border-color:#FFC0CB;margin-top:30px"
        >
        </b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field.and must be at least 8 characters.
        </b-form-invalid-feedback>

        <h6>
            OR
        </h6>
<center><b-row style="margin-top:20px;">
  <b-col lg="4" class="pb-2">
      <b-button size="lg" class="button-large">
        <img src="../assets/facebook_logo.png" class="logo_signup" alt="" srcset="">
          <span class="text">Facebook</span>
      </b-button>
  </b-col>
 <b-col lg="4" class="pb-2">
      <b-button size="lg" class="button-large">
        <img src="../assets/google_logo.png" class="logo_signup" alt="" srcset="">
          <span class="text">google</span>
      </b-button>
  </b-col>
  <b-col lg="4" class="pb-2">
      <b-button size="lg" class="button-large">
        <img src="../assets/line_logo.png" class="logo_signup" alt="" srcset="">
          <span class="text">Line</span>
      </b-button>
  </b-col>
</b-row>
</center>

        

     
<div class="mb-3 form-check" style="margin-top:20px">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">I agree all statement in 
        <span style="color:#FFC0CB;">
        Terms & Conditions
        </span>
    </label>
  </div>

    <b-button type="submit" variant="primary" class= "button"  style="width:200px;margin-top:20px;float:left;">
   SIGN UP


   
</b-button>

<p class="title" style="margin-top:50px;">
    Have an Account ?<span class="title-text">
    Login
</span>

</p>


  


      
    </b-form>
  </div>
      </div>
    </div>
    </b-col>
  </b-row>
</b-container>














<!--End Content-->

</div>
</template>

<style>
body {
  padding: 1rem;
}
</style>

<script>
//Navbar
import NavbarLog from '../components/NavbarLog.vue';

//Validation
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  components : {
    NavbarLog,
  },
  mixins: [validationMixin],
  data() {
    return {
     
      form: {
        username: null,
        email:null,
        password : null,
      }
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
       email: {
        required,
      },
      password: {
        required,
        minLength: minLength(8)
      }
    },
    
  },
  methods: {
    validateState(username) {
      const { $dirty, $error } = this.$v.form[username];
      return $dirty ? !$error : null;
    },
     validateStateemail(email) {
      const { $dirty, $error } = this.$v.form[email];
      return $dirty ? !$error : null;
    },
    validateStatement(password) {
      const { $dirty, $error } = this.$v.form[password];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.$router.push({ path : '/catagory'})
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=Sarabun:wght@700&display=swap');

header{
  width: 100vw;
  background-color:#FFF;
  padding: 15px;
  
}

.img{
    margin-left:-290px;
    width: 35vw;
}
.nav-item{
  color:#565555 ;
}
ul.nav a.active{
  background-color:#FFC0CB ;
    border-bottom-color:#FFC0CB ;
    color:#ffffff ;
    border-radius: 10%;

}
ul.nav a:hover{
  background-color:#FFC0CB ;
    border-bottom-color:#FFC0CB ;
    color:#000000 ;
    border-radius: 10%;

}
.navbar.navbar-light.bg-light{
  margin-top: 0;
  padding: 0;
}
.container-fluid{
   margin-top: 5px;
   
 
}
.nav{
  margin-top: 5px;
}
.topnav li.right {
  float: right;
}
.button{
    background-color:#ffffff; 
    border-color:#FFC0CB;
    color:#FFC0CB;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 10px;
    height: 58px;
    border: 2px solid #FFC0CB;
    margin-top: 15px;
    margin-right: 20px;


   
}
.button.active{
  background-color: #FFF;
  color: #FFC0CB;
  border-color:#FFC0CB;
}
.button:hover{
  background-color: #FFC0CB;
    color: white;
    border-color:#FFC0CB;
}

.button1 {
    background-color: white; 
    color: #FFC0CB; 
    border: 2px solid #FFC0CB;
    border-radius : 10px;
    height: 58px;
}

.button1:hover {
    background-color: #FFC0CB;
    color: white;
    border-color:#FFC0CB;
}
h6 {
color: #565555;
margin-top:20px;
padding: 0.5em 0;
border-top: solid 3px #FFC0CB;
border-bottom: solid 3px #FFC0CB;
text-align: center;
}
.button-large{
    background-color: #FFF;
    border-color: #FFC0CB;
    text-align: center;
    border-radius: 10px;
}
.button-large:hover{
    background-color: #FFC0CB;
    border-color: #FFF;
}
.logo_signup{
    width: 30px;
}
.text{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color:#565555;
    margin-left: 10px;
    
}
.title{
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color:#565555;
}
.title-text{
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color:#FFC0CB
}


@media only screen and (max-width: 480px) {
	.site-title {
		font-size: 25px;
	}
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {  }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {  }

/* Medium devices (landscrape tablets, 768px and up) */
@media only screen and (min-width: 768px) { }

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {  }

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {  }

@media only screen and (min-width: 1200px) {  


   .col-xl-1 { width: 8.33% }
   .col-xl-2 { width: 16.66% }  
   .col-xl-3 { width: 25% }
   .col-xl-4 { width: 33.33% }
   .col-xl-5 { width: 41.66% }
   .col-xl-6 { width: 50% }
   .col-xl-7 { width: 58.33% }
   .col-xl-8 { width: 66/66% }
   .col-xl-9 { width: 75% }
   .col-xl-10 { width: 83.33% }
   .col-xl-11 { width: 91.66% }
   .col-xl-12 { width: 100% }
}


</style>