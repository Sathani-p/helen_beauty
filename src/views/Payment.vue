<template>
  <div class="payment">
        

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


<!--Content-->
  <div class="row">
    <div class="col-4">
        <div class="card" style="width: 30rem;margin-left: 100px;">
  <div class="card-body">
    <h5 class="card-title"><i class="fas fa-map-marker-alt"></i> Delivery Address</h5>
    <p class="card-text">Sathani Dermchai (+66)93 6793874</p>
    <p class="card-texts">8/312 Soi Thanit Village No.1 Wichit Subdistrict, Mueang Phuket District, Phuket Province, 83000</p>
    <a class="btn btn-primary">Change</a>
  </div>
</div>

<div class="card" style="width: 30rem;margin-left: 100px;">
  <div class="card-body">
    <h5 class="card-title"><i class="fas fa-tag"></i> Discount Code</h5>
    <span class="card-text">Add code 
      <input class="form-control" type="text" placeholder="add a discount code" > </span>

      <div class="action">
        <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-secondary" type="button">Cancel</button>
  <button class="btn btn-warning" type="button">Add</button>
</div>
    </div>
  </div>
</div>
    </div>




    <div class="col-8">
        <div class="row">
  <div class="col-8">
    <div class="card" style="height:700px;width:1000px">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-box-open"></i> Ordered</h5>
        
        <table class="table table-borderless">
  <thead>
    <tr class="title">
      <th scope="col">ORDER</th>
      <th scope="col">PRODUCT NAME</th>
      <th scope="col">QUANTITY</th>
      <th scope="col">TOTAL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="image">
        <img src="../assets/Catagory/Brushes.jpg" alt="" srcset="" style="width:50px;height:50px;border-radius:50%;">
      </th>
      <td class="text">MAKEUP BRUSH</td>
      <td class="text">1</td>
      <td class="text">1990.00</td>
    </tr>
    <tr>
      <th scope="row" class="image">
         <img src="../assets/Catagory/Johnsons.jpg" alt="" srcset="" style="width:50px;height:50px;border-radius:50%;">
      </th>
      <td class="text">JOHNSON BABY BATH</td>
      <td class="text">1</td>
      <td class="text">167.00</td>
    </tr>
    <tr>
      <th scope="row" class="image">
         <img src="../assets/Catagory/Garnier.jpg" alt="" srcset="" style="width:50px;height:50px;border-radius:50%;">
      </th>
      <td class="text">Garnier Lotion</td>
      <td class="text">1</td>
      <td class="text">289.00</td>
    </tr>
    <tr>
      <th scope="row" class="image">
         <img src="../assets/Catagory/Beauty.png" alt="" srcset="" style="width:50px;height:50px;border-radius:50%;">
      </th>
      <td class="text">REVLON</td>
      <td class="text">1</td>
      <td class="text">430.00</td>
    </tr>
  </tbody>
</table>
        
        <div class="row">
         <div class="row justify-content-end">
    <div class="col-4">
      <p style="font-family: 'Poppins', sans-serif;font-size:15px;color:#565555;">Total order (4 pieces): 2876.00 Baht</p>
    </div>
  </div>
  </div>

    <div class="row justify-content-start">
    <div class="col-4">
       <h5 class="card-title" style="width:950px"><i class="fas fa-credit-card"></i> Payment Methods</h5>
      <div class="method">
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Cash on Delivery
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Credit / Debit Card
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Mobile Banking
  </label>
</div>
      </div>
    </div>
  </div>

  <div class="row">
         <div class="row justify-content-end">
    <div class="col-4">
      <p style="font-family: 'Poppins', sans-serif;font-size:18px;color:#565555;">
        Product total: 2876.00 Baht
        </p>
      <p style="font-family: 'Poppins', sans-serif;font-size:18px;color:#565555;">
        Combined Shipping: 35.00 Baht
        </p>
      <p style="font-family: 'Poppins', sans-serif;font-size:18px;color:#565555;">
        All payments: 2911.00 Baht
        </p>
    </div>
  </div>
  </div>

      </div>
    </div>
  </div>

</div>
<div class="action">
        <div class="d-grid gap-2 d-md-block">
  <router-link to="/shoppingcart"><button class="btn btn-success" type="button" >Cancel</button></router-link>
  <router-link to="/tracking"><button class="btn btn-info" type="button">Order</button></router-link>
</div>
    </div>
    </div>
  </div>
  <!--End content-->

  <PopupChat />


  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import PopupChat from '../components/PopupChat.vue'
export default {
     components : {
        Navbar,
        PopupChat
    },
    data (){
        return{
            msg : "Payment",
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

.fas.fa-map-marker-alt{
    color: #FFC0CB;
}
.fas.fa-tag{
    color: #FFC0CB;
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
    border-bottom: solid 3px #FFC0CB;
    
}
.btn.btn-primary{
  margin-left: 350px;
  border-color: #FFC0CB;
  background-color: #FFC0CB;
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  border-radius: 20px;

}
.btn.btn-secondary{
    background-color: #F08080;
    border-color: #F08080;
    color: #FFFFFF;
    width: 100px;
    border-radius: 20px;
    margin-left: 235px;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
  font-size: 18px;
}
.btn.btn-secondary:hover{
    background-color: #F08080;
    border-color: #F08080;
    color: #565555;
 
}
.btn.btn-warning{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #FFFFFF;
    width: 100px;
    border-radius: 20px;
    margin-left: 10px;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
  font-size: 18px;

}
.btn.btn-warning:hover{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #565555;
  
}
.form-control{
  width: 400px;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
  color: #C4C4C4;
}
.btn.btn-success{
    background-color: #F08080;
    border-color: #F08080;
    color: #FFFFFF;
    width: 100px;
    border-radius: 20px;
    margin-left: 800px;
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
    width: 100px;
    border-radius: 20px;
    margin-left: 10px;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
  font-size: 18px;

}
.btn.btn-info:hover{
    background-color: #FFC0CB;
    border-color: #FFC0CB;
    color: #565555;
  
}
.fas.fa-box-open{
  color: #FFC0CB;
}
.fas.fa-credit-card{
  color:#FFC0CB;
}
.table.table-borderless{
  margin-left: 0px;
  margin-top: 20px;
}

.title{
  color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  font-size: 15px; 
  text-align: center;
}
.image{
  text-align: center;
}
.text{
  text-align: center;
   font-family: 'Poppins', sans-serif;
    font-size:15px;
    font-weight: normal;
    color: #565555;
}
.method{
  margin-left: 30px;
  margin-top: 20px;
}
.form-check-label{
  color: #565555;
  font-family: 'Poppins', sans-serif;
  font-size:18px;
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