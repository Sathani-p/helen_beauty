<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:#FFF;border-color:#FFF;">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" 
  aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

 
  <div class="collapse navbar-collapse"  style="background-color:#FFF">
       <b-row>
      <b-col>
    <a class="navbar-brand" href="#" >
        <img src="../assets/logo.png" class="image" >
        <img src="../assets/Capture2-removebg-preview.png" class="img" >
    </a>
      </b-col>
    
<b-col style="margin-right:100px;">
    <ul class="navbar-nav mr-auto mt-auto mt-lg">
         <div class="menu-item"> 
       <router-link to="/"><a>Home</a>
       </router-link> 
   </div>
    <div class="menu-item">
     <router-link to="/catagory">
        <a >Catagory</a>
     </router-link> 
    </div>
    <div class="menu-item">
       <router-link to="/productdetail"> 
        <a>Product</a>
       </router-link>
    </div>
    <Dropdown title = "Page" :items = "Page" />
    <div class="menu-item">
         <router-link to="/contact">
            <a>Contact</a>
         </router-link>
    </div>
    </ul>
</b-col>

    
    <b-col style="width:100vw;">
    <ul class="navbar-nav mr-auto mt-auto mt-lg">
    <div>
       <input type="text" class="form-control" placeholder="Search" aria-label="Search" style="margin-top:10px;border-radius:10px;">
  </div>
   <li>
     <router-link to="/notification" style=" text-decoration: none;"><a class="menu-item" href="#" style="color:#565555;text-decoration:none;margin-top:10px;"><i class="fas fa-bell"></i></a> </router-link> 
   </li>
   <li>
     <router-link to="/like" style=" text-decoration: none;"> <a class="menu-item" href="#" style="color:#565555;text-decoration:none;margin-top:10px;"><i class="fas fa-heart"></i></a></router-link>
   </li>
   <li>
     <router-link to="/chat" style=" text-decoration: none;"><a class="menu-item" href="#" style="color:#565555;margin-top:10px;text-decoration: none;"><i class="fas fa-comment"></i></a>
     </router-link>
   </li>
     <b-nav-item-dropdown right >
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <img
            src="../assets/Profile.jpg"
            width="40"
            height="40"
            class="rounded-circle"
          />
          </template>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Edit Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        </ul>
    </b-col>
       </b-row>
  </div>
</nav>
</template>
<script>
import Dropdown from './Dropdown.vue'

export default {
    name : 'NavbarNew',
    components : {
        Dropdown,
       
    },
    data (){
        return{
            Page :[
                {
                    title : 'Login',
                    link : '/login',
                },
                {
                    title : 'Shopping Cart',
                    link : '/shoppingcart'
                },
                 {
                    title : 'Payment',
                    link : '/payment',
                },
                {
                    title : 'Tracking',
                    link : '/tracking'
                },
                 {
                    title : 'Profile',
                    link : '/profile',
                },
                {
                    title : 'Edit Profile',
                    link : '/editprofile'
                },
                
            ],
            
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=Sarabun:wght@700&display=swap');
body{
    background-color: #FFF;

}
header{
    background-color: #FFF;
}
.btn.btn{
    background-color:#FFF;
    border-color:#FFC0CB;
    color:#000;
    font-family: 'Poppins', sans-serif;
    font-size:18px;
    font-weight:semibold;
    border-radius:20px;
    margin-top:10px;
}
.btn.btn:hover{
    background-color: #FFC0CB;
    color:#FFF;
    border-color:#FFC0CB

}
.image{
    width: 50px;
    border-radius: 50%;
}
nav .menu-item{
    color: #565555;
    padding: 10px 20px;
    margin-top: 0px;
    position: relative;
    text-align: center;
    border-bottom :3px solid transparent;
    display: flex;
    transition: 0.4;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;

}
nav .menu-item.active,
nav .menu-item:hover {
    background-color: #FFF;
    border-bottom-color: #FFC0CB;
}
nav .menu-item a{
    color: inherit;
    text-decoration: none;

}
.collapse.navbar-collapse{
    width: 100vw;
    background-color: #FFF;
}


</style>

