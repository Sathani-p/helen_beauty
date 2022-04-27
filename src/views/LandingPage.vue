<template>
  <div class="landingpage">
    <header>
      <NavbarNew />
    </header>

    






<div class="col-sm-12" style="background-color:#FFC0CB ; height:500px;">
  <div class="row">
    <div class="col-6">
         <div class="col align-self-center">
    <center><img src="../assets/beauty.jpg" alt="" srcset="" width="300px" height="400px" style="margin-top:40px"></center> 
    </div>
    </div>
    <div class="col-6">
      <h1 style="font-family: 'Poppins', sans-serif;font-size:36px;font-weight:bold; margin-top: 90px">Cosmetics & Fashion</h1>
      <h1 style="font-family: 'Poppins', sans-serif;font-size:36px;font-weight:bold;">of the best quality.</h1>
      <p style="font-family: 'Poppins', sans-serif;font-size:24px;font-weight:medium;">You can come and buy one here.</p>
      <br>
     <router-link class="btn btn-lg" to="/login"> 
     Shop Now
     </router-link>




    </div>
  </div>
</div>
<div class="row">
<div class="col-3" style="margin-top:50px;padding:40px;">
       <h6 style="font-family: 'Poppins', sans-serif;font-size:18px;font-weight:semibold;">Credibly innovate granular internal </h6>  
       <h6 style="font-family: 'Poppins', sans-serif;font-size:18px;font-weight:semibold;">sources whereas standards.</h6>
       <br>
       <p style="font-family: 'Poppins', sans-serif;font-size:12px;font-weight:regular;">
         Seamlessly empower fully researched growth strategies and interoperable internal sources. 
         Credibly innovate granular internal sources whereas high standards in web-readiness.</p>
</div>
<div class="col-9">
   <div class="row row-cols-1 row-cols-md-3 g-4" style="margin-top:30px;padding:40px;">
  <div class="col">
    <div class="card">
    <center> <img src="../assets/creditcard.png" alt="" srcset="" width="45px" height="45px" style="margin-top:5px"></center>
      <div class="card-body">
      <center>  <h5 class="card-title">Credit Card Support</h5></center>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     <center><img src="../assets/earth.png" alt="" srcset="" width="40px" height="40px" style="margin-top:10px"></center>
      <div class="card-body">
        <center> <h5 class="card-title">Online Order</h5></center>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     <center><img src="../assets/truck.png" alt="" srcset="" width="50px" height="50px"></center>
      <div class="card-body">
        <center><h5 class="card-title">Free Delivery</h5></center>
        
      </div>
    </div>
  </div>
 
</div>
</div>
</div>

    
  </div>
</template>

<script>
import NavbarNew from '../components/NavbarNew.vue'

export default {
  name : 'landingpage',
 components : {
    NavbarNew,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap');

header{
  width: 100vw;
  background-color:#FFF;
  padding: 15px;
  
}
.h1{
  margin-top: 30px;
}
.row{
  height: 70px;
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
.btn.btn-lg{
  background-color:#FF69B4;
  color:#ffffff;
  border-radius: 10px ;
}
body{
  width: 100vw;
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
