<template>
  <div class="noti">


<!--Navbar-->
    <header>
      <Navbar />
    </header>
<!--End Navbar-->


<!--Header-->
 <div class = "header1">
       <i class="fas fa-home">
           <span style="font-family: 'Poppins', sans-serif;font-size:18px;margin-left:5px;">Home</span></i> 
        <i class="fas fa-chevron-right" style="margin-left:5px;"> 
           <span 
           style="font-family: 'Poppins', sans-serif;font-size:18px;margin-left:5px;">Page </span> 
        <i class="fas fa-chevron-right" style="margin-left:5px;">  
           <span
           style="font-family: 'Poppins', sans-serif;font-size:15px;color:#C4C4C4;margin-left:5px;"> {{msg}} </span>
        </i>
        </i>
    </div>
<!--End Header-->

<!--Contact-->
    <div class="row">
    <div class="col-4">
        <div class="card" style="width: 20rem;margin-left: 300px;height:540px">
  <div class="card-body">
    <h5 class="card-title">
      <img src="../assets/Profile.jpg" class="img" alt="" srcset=""> 
      Paung Mini
      <p class="edit">
        <i class="fas fa-edit"></i> 
        Edit Profile
      </p>
    </h5>
  <router-link to="/profile" style="text-decoration:none;"> <h6>
     <i class="fas fa-user-circle fa-lg"></i> 
      My Account
   </h6></router-link>
  <router-link to="/tracking" style="text-decoration:none;"> <h6 >
     <i class="fas fa-clipboard-list fa-lg"></i>
     My Purchase
     </h6></router-link>
  <router-link to="/notification" style="text-decoration:none;"> <h6 style="color:#FFC0CB;">
     <i class="fas fa-bell fa-lg"></i>
     Notifications
     </h6></router-link>
   <h6>
     <i class="fas fa-tag fa-lg"></i>
     My Vouchers
    </h6>
  </div>
</div>
    </div>




    <div class="col-8">
        <div class="row">
  <div class="col-8">
    <div class="card" style="width:70rem;">
      <div class="card-body">
        <h5 class="card-title"> 
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Mark all as read</a>
  </li>
</ul>
           </h5>
      </div>
    </div>


    <div class="card" style="width:70rem;margin-top:10px">
    
  <div class="card-body" >
    <img src="../assets/Catagory/Brushes.jpg" class="img" alt="" srcset="">
    <span style="color: #565555;
  font-family: 'Poppins', sans-serif;
  font-size: 18px; margin-left:20px;">The product has been shipped</span>
  <p style="color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px; margin-left:90px;margin-top : -30px;">Parcel number RF922916853TH of the order 22022137QM5SAW successfully delivered</p>
  <p style="color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px; margin-left:90px;margin-top : -20px;">10-02-2022 14:30</p>

  <button type="button" class="btn btn-warning" style="float:right;">View Order Details</button>
  </div>

  <div class="card-body">
    <img src="../assets/Catagory/Johnsons.jpg" class="img" alt="" srcset="">
    <span style="color: #565555;
  font-family: 'Poppins', sans-serif;
  font-size: 18px; margin-left:20px;">The product has been shipped</span>
  <p style="color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px; margin-left:90px;margin-top : -30px;">Parcel number RF922916853TH of the order 22022137QM5SAW successfully delivered</p>
  <p style="color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px; margin-left:90px;margin-top : -20px;">10-02-2022 14:30</p>

  <button type="button" class="btn btn-warning" style="float:right;">View Order Details</button>
  </div>


    <div class="card-body">
    <img src="../assets/Catagory/NIVEA.jpg" class="img" alt="" srcset="">
    <span style="color: #565555;
  font-family: 'Poppins', sans-serif;
  font-size: 18px; margin-left:20px;">The product has been shipped</span>
  <p style="color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px; margin-left:90px;margin-top : -30px;">Parcel number RF922916853TH of the order 22022137QM5SAW successfully delivered</p>
  <p style="color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px; margin-left:90px;margin-top : -20px;">10-02-2022 14:30</p>

  <button type="button" class="btn btn-warning" style="float:right;">View Order Details</button>
  </div>

</div>
  </div>
</div>
    </div>
  </div>


  <!--End Content-->
<PopupChat />


  </div>
</template>

<script>
import PopupChat from '../components/PopupChat.vue'
import Navbar from '../components/Navbar.vue'
export default {
components : {
  Navbar,
  PopupChat,
},
data () {
  return {
    msg : "Notification"
  }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=Sarabun:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,100&display=swap');

*{
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
}
header{
  width: 100vw;
  background-color:#FFF;
  padding: 15px;
  
}
.header1{
    margin-top:40px;
    margin-left: 40px;
}
.card{
    margin-top: 40px;
    border-color: #FFC0CB;
    position: inherit;
}
.img{
   
    border-radius:50%;
    margin-top: 10px;
    width: 70px;
}

.fas.fa-edit{
    color: #C4C4C4;
}
.edit{
  color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  margin-left: 80px;
  margin-top: -20px;
}
.fas.fa-user-circle,
.fas.fa-tag,
.fas.fa-bell,
.fas.fa-clipboard-list{
  color: #FFC0CB;
  margin-top: 20px;
  margin-right: 10px;
}
h6{
  font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #565555;
    margin-left: 20px;
}
.card-text{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: normal;
    color: #565555;
    
}
.card-title{
  color: #565555;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    margin-left: 5px;
    
}

.btn.btn-warning{
    background-color: #FFF;
    border-color: #FFC0CB;
    color: #565555;
   width: 200px;
   height: 40px;
   border-radius: 10px;
   font-family: 'Poppins', sans-serif;
    font-size:18px;

}
.btn.btn-warning:hover{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #FFF;
  
}

.title{
  color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  font-size: 15px; 
  text-align: center;
}

.text{
  text-align: center;
   font-family: 'Poppins', sans-serif;
    font-size:15px;
    font-weight: normal;
    color: #565555;
}

.card-img-top{
  width: 100px;
  height: 100px;
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