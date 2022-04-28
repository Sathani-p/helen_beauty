<template>
  <div class="editprofile">


    <!--Navbar-->    
         <header>
         <NavbarPage />
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



<!--Content -->
  <div class="row">
    <div class="col-4">
        <div class="card" style="width: 30rem;margin-left: 100px;height:400px;">
  <div class="card-body">
    <h5 class="card-title"><i class="fas fa-user-circle"></i> Profile Picture</h5>
    <img  class="img" src="../assets/wonder-women.png" alt="" srcset="">
    <p class = "text" >JPG or PNG no larger than 5 MB</p>
    <button class="btn btn-primary" type="button">Choose your Image</button>
    
  </div>
</div>
    </div>




    <div class="col-8">
        <div class="row">
  <div class="col-8">
    <div class="card" style="height:700px;width:1000px">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-edit"></i>Edit Details</h5>
        
     <div class="form"> 
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Username" >
  </div>
 <div class="row">
  <div class="col">
    <label for="exampleInputtext" class="form-label">Firstname</label>
    <input type="text" class="form-control" placeholder="Enter your Firstname" aria-label="First name">
  </div>
  <div class="col">
    <label for="exampleInputtext" class="form-label">Lastname</label>
    <input type="text" class="form-control" placeholder="Enter your Lastname" aria-label="Last name">
  </div>
</div>
<div class="row" style="margin-top:10px">
  <div class="col">
    <label for="exampleInputtext" class="form-label">ID Card</label>
    <input type="text" class="form-control" placeholder="Enter your ID Card" aria-label="093-6793874">
  </div>
  <div class="col">
    <label for="exampleInputtext" class="form-label">Country</label>
    <input type="text" class="form-control" placeholder="Enter your Country" aria-label="Birthday">
  </div>
</div>
<div class="row" style="margin-top:10px">
  <div class="col">
    <label for="exampleInputtext" class="form-label">Phone Number</label>
    <input type="text" class="form-control" placeholder="Enter your Phone number" aria-label="093-6793874">
  </div>
  <div class="col">
    <label for="exampleInputtext" class="form-label">Birthday</label>
    <input type="text" class="form-control" placeholder="Enter your Birthday" aria-label="Birthday">
  </div>
</div>
<div class="row" style="margin-top:10px">
  <div class="col">
   <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Gender</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Choose your gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  </div>
</div>

 <div class="mb-3" style="margin-top:10px">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email Address">
  </div>
   <div class="mb-3" style="margin-top:10px">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  
    placeholder=" Enter your Address">
  </div>
</form>
        </div>  
      </div>
    </div>
  </div>

</div>
<div class="action">
        <div class="d-grid gap-2 d-md-block">
  <router-link to="/profile"><button class="btn btn-success" type="button" >Cancel</button></router-link>
  <router-link to="/profile"><button class="btn btn-info" type="button">OK</button></router-link>
</div>
    </div>
    </div>
  </div>

  <!--End Content-->
  <PopupChat />

      
  </div>
</template>

<script>
import NavbarPage from '../components/NavbarPage.vue'
import PopupChat from '../components/PopupChat.vue'
export default {
     components : {
        NavbarPage,
        PopupChat
    },
    data (){
        return{
            msg : "Edit Profile",
           
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 30px;
    margin-left: 35%;
}
.text{
    color: #C4C4C4;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;

}

.fas.fa-user-circle{
    color: #FFC0CB;
}

.fas.fa-edit{
  color: #FFC0CB;
}
.form{
    margin-left: 30px;
    margin-top: 30px;
}

.card-title{
  color: #565555;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    margin-left: 5px;
    border-bottom: solid 3px #FFC0CB;
    
}
.form-select,
.form-control{
    border-color: #FFC0CB;
    border-radius: 10px;
    color: #565555;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;

}
.btn.btn-primary{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #FFFFFF;
    width: 250px;
    border-radius: 20px;
    margin-left: 100px;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    text-align: center;

}
.btn.btn-primary:hover{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #565555;
  
}

.btn.btn-success{
    background-color: #F08080;
    border-color: #F08080;
    color: #FFFFFF;
    width: 200px;
    border-radius: 20px;
    margin-left: 550px;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
  font-size: 18px;
}
.btn.btn-success:hover{
    background-color: #F08080;
    border-color: #F08080;
    color: #565555;
 
}
.btn.btn-info{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #FFFFFF;
    width: 200px;
    border-radius: 20px;
    margin-left: 20px;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    text-align: center;

}
.btn.btn-info:hover{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #565555;
  
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