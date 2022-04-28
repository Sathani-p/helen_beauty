<template>
  <div class="tracking">

    <!--Navbar-->
    <header>
  <NavbarPage />
</header>
    <!-- End Navbar -->

    <!-- Header-->
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
    <!-- End Header-->

    <!-- Content -->
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
  <router-link to="/profile" style="text-decoration:none;color:#565555;"> <h6>
     <i class="fas fa-user-circle fa-lg"></i> 
      My Account
   </h6></router-link>
  <router-link to="/tracking" style="text-decoration:none;"> <h6 style="color:#FFC0CB;">
     <i class="fas fa-clipboard-list fa-lg"></i>
     My Purchase
     </h6></router-link>
  <router-link to="/notification" style="text-decoration:none;color:#565555"> <h6>
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
        <h5 class="card-title" style="color:#565555;"> 
             <div class="container bootdey">
    <div class="panel panel-default panel-order">
        <div class="panel-heading">
            <p>Ordered</p> 
            
        </div>

        <div class="panel-body">
            <div class="row">
                <div class="col-md-1"><img src="https://i.pinimg.com/564x/81/b9/1c/81b91c598ab778a5ef5e90deb3ebc6ad.jpg" class="media-object img-thumbnail" /></div>
                <div class="col-md-11" >
                    <div class="row">
                        <div class="col-md-12" >
                            <span><strong>Order name :</strong></span> <span class="label label-info">MAKEUP BRUSH</span>
                          <p class="qty">  Quantity : 1, cost: $1900.00 </p>
                              <router-link to="/trackingdetail"> 
                              <button class="btn btn-warning" type="submit" style="float:right;">
                                View Order Detail
                                </button>
                                </router-link>
                        </div>
                        <div class="col-md-12" style="background-color:#FFF;border-color:#FFC0CB;">
                        <p class="kerry"> will receive the product within 20-03-2022 by
                          <a href="#">Kerry Express </a>
                          </p>  
                          </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-1"><img src="https://i.pinimg.com/564x/97/74/91/97749195f8e3a785152672da2d3ae0fc.jpg" class="media-object img-thumbnail" /></div>
                <div class="col-md-11" >
                    <div class="row">
                        <div class="col-md-12" >
                            <span><strong>Order name :</strong></span>
                            <span class="label label-info">REVLON </span>
                          <p class="qty">  Quantity : 1, cost: $430.00 </p>
                              <router-link to="/trackingdetail"> 
                              <button class="btn btn-warning" type="submit" style="float:right;">
                                View Order Detail
                                </button>
                                </router-link>
                        </div>
                        <div class="col-md-12" style="background-color:#FFF;border-color:#FFC0CB;">
                        <p class="kerry"> will receive the product within 20-03-2022 by
                          <a href="#">Kerry Express </a>
                          </p>  
                          </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-1"><img src="https://i.pinimg.com/564x/c6/e3/bb/c6e3bbca052d681d98859332352f5073.jpg" class="media-object img-thumbnail" /></div>
                <div class="col-md-11" >
                    <div class="row">
                        <div class="col-md-12" >
                            <span><strong>Order name :</strong></span> <span class="label label-info">COCO PREFUME</span>
                          <p class="qty">  Quantity : 1, cost: $2900.00 </p>
                              <router-link to="/trackingdetail"> 
                              <button class="btn btn-warning" type="submit" style="float:right;">
                                View Order Detail
                                </button>
                                </router-link>
                        </div>
                        <div class="col-md-12" style="background-color:#FFF;border-color:#FFC0CB;">
                        <p class="kerry"> will receive the product within 20-03-2022 by
                          <a href="#">Kerry Express </a>
                          </p>  
                          </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-1"><img src="https://i.pinimg.com/564x/48/68/f6/4868f6d475f62f3786998b60d0c3b9b4.jpg" class="media-object img-thumbnail" /></div>
                <div class="col-md-11" >
                    <div class="row">
                        <div class="col-md-12" >
                            <span><strong>Order name :</strong></span> <span class="label label-info">MAKEUP REVOLUTION</span>
                           <p class="qty"> Quantity : 1, cost: $799.00 </p>
                              <router-link to="/trackingdetail"> 
                              <button class="btn btn-warning" type="submit" style="float:right;">
                                View Order Detail
                                </button>
                                </router-link>
                        </div>
                        <div class="col-md-12" style="background-color:#FFF;border-color:#FFC0CB;">
                        <p class="kerry"> will receive the product within 20-03-2022 by
                          <a href="#">Kerry Express </a>
                          </p>  
                          </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-1"><img src="https://i.pinimg.com/564x/15/cc/f0/15ccf0a357536a65cc0edd34b63c6d22.jpg" class="media-object img-thumbnail" /></div>
                <div class="col-md-11" >
                    <div class="row">
                        <div class="col-md-12" >
                            <span><strong>Order name :</strong></span> <span class="label label-info">NIVEA</span>
                          <p class="qty">  Quantity : 1, cost: $250.00</p>
                              <router-link to="/trackingdetail"> 
                              <button class="btn btn-warning" type="submit" style="float:right;">
                                View Order Detail
                                </button>
                                </router-link>
                        </div>
                        <div class="col-md-12" style="background-color:#FFF;border-color:#FFC0CB;">
                        <p class="kerry"> will receive the product within 20-03-2022 by
                          <a href="#">Kerry Express </a>
                          </p>  
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
           </h5>
      </div>
    </div>
  </div>
        </div>
    </div>
    </div>

    <!-- End Content-->

    <PopupChat />



   

  </div>
</template>

<script>
import NavbarPage from '../components/NavbarPage.vue'
import PopupChat from '../components/PopupChat.vue'
export default {
  components :{
    NavbarPage,
    PopupChat
  },
  data () {
    return {
      msg : "Tracking"
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=Sarabun:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,100&display=swap');
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
.btn.btn-warning{
    background-color: #FFF;
    border-color: #FFC0CB;
    color: #FFC0CB;
    margin-top: -40px;
   border-radius: 5px;
   font-family: 'Poppins', sans-serif;
   font-size:13px;

}
.btn.btn-warning:hover{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #FFF;
  
}
span{
  font-family: 'Poppins', sans-serif;
   font-size:18px;
   color: #565555;
}
.qty{
  font-family: 'Poppins', sans-serif;
   font-size:15px;
   color: #565555;
}
.kerry{
  font-family: 'Poppins', sans-serif;
   font-size:13px;
   color: #C4C4C4;
}
.panel-order .row {
	border-bottom: 1px solid #ccc;
}
.panel-order .row:last-child {
	border: 0px;
}
.panel-order .row .col-md-1  {
	text-align: center;
	padding-top: 15px;
}
.panel-order .row .col-md-1 img {
	width: 50px;
	max-height: 50px;
}
.panel-order .row .row {
	border-bottom: 0;
}
.panel-order .row .col-md-11 {
	border-left: 1px solid #ccc;
}
.panel-order .row .row .col-md-12 {
	padding-top: 7px;
	padding-bottom: 7px; 
}
.panel-order .row .row .col-md-12:last-child {
	font-size: 11px; 
	color: #555;  
	background: #efefef;
}
.panel-order .btn-group {
	margin: 0px;
	padding: 0px;
}
.panel-order .panel-body {
	padding-top: 0px;
	padding-bottom: 0px;
}
.panel-order .panel-deading {
	margin-bottom: 0;
}
        

</style>