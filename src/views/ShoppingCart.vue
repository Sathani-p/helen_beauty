<template>
  <div class="shoppingcart">

      <header>
         <Navbar />
        </header>
         <div class = "header1">
       <i class="fas fa-home">
         <router-link to="/catagory" style="color:#000;text-decoration:none;" >  <span style="font-family: 'Poppins', sans-serif;font-size:18px;margin-left:5px;">Home</span></router-link></i> 
        <i class="fas fa-chevron-right" style="margin-left:5px;"> 
           <span 
           style="font-family: 'Poppins', sans-serif;font-size:18px;margin-left:5px;">Page </span> 
        <i class="fas fa-chevron-right" style="margin-left:5px;">  
           <span
           style="font-family: 'Poppins', sans-serif;font-size:15px;color:#C4C4C4;margin-left:5px;"> {{msg}} </span>
        </i>
        </i>
    </div>

     <!--Table-->
    <div class="table-detail">
   <table class="table">
  <thead>
    <tr>
      <th scope="col" class="head">
           <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
      </th>
      <th scope="col" class="head">PRODUCT</th>
      <th scope="col" class="head">PRODUCT NAME</th>
      <th scope="col" class="head">PRICE</th>
      <th scope="col" class="head">QUANTITY</th>
      <th scope="col" class="head">TOTAL</th>
      <th scope="col" class="head">ACTION</th>
    </tr>
  </thead>
  <tbody>
    <tr class="detail" v-for="item in products1" :key="item">
      <th scope="row">
           <div class="form-check" >
            <input class="form-check-input" type="checkbox"  @change="selected(item)">
          </div>
      </th>
      <td>
          <img class="image" :src="item.image" alt="" srcset="">
      </td>
      <td>
          <p  class = "text"
          style="margin-top:15px">{{item.name}}</p>
      </td>
      <td>
          <p class = "text"
          style="margin-top:15px">{{item.price}}฿</p>
      </td>
      <td>
          <p class = "text"
          style="margin-top:15px">
          <i class="fas fa-minus" @click="minusQty(item)"> 
          </i>
           {{item.quantity}}
            <i class="fas fa-plus" @click="plusQty(item)">
           </i>
           </p>
      </td>
      <td>
          <p class = "text"
          style="margin-top:15px">{{item.total}}฿</p>
      </td>
      <td>
          <button class="btn btn-primary" type="submit" @click="removeProduct(products1)">DELETE</button>
      </td>
    </tr>

  </tbody>
</table>

<div class="container">
  <div class="row">
    <div class="col-md-4 ms-auto">
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Cart Total</h5>
    Subtotal  <span class="span">฿ {{total()}}</span>
    <br>
    Total <span class="span1">฿ {{total()}}</span>
    <br>

    <router-link to="/payment"><button type="button" class="btn btn-secondary">Proceed To Checkout</button></router-link>

  </div>
</div>
    </div>
  </div>
</div>

</div>
<!--End Table-->
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
            msg : "Shopping Cart",
            products1 : [
          {
            id : 1,
            name : "MAKEUP BRUSH ",
            price : 1990.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/81/b9/1c/81b91c598ab778a5ef5e90deb3ebc6ad.jpg",
            active :false
          },
            {
            id: 2 ,
            name : "REVLON ",
            price : 430.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/97/74/91/97749195f8e3a785152672da2d3ae0fc.jpg",
            active : false
          },
          {
            id : 3,
            name : "COCO PREFUME",
            price : 2990.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/c6/e3/bb/c6e3bbca052d681d98859332352f5073.jpg",
            active :false
          },
            {
            id: 4 ,
            name : "MAKEUP REVOLUTION ",
            price : 799.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/48/68/f6/4868f6d475f62f3786998b60d0c3b9b4.jpg",
            active : false
          },
         
        ],
          products2 : [
          {
            id : 5,
            name : "L'OREAL",
            price : 199.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/fd/56/11/fd561198468ee085febff6cc3b9543e1.jpg",
            total : '',
            active :false
          },
            {
            id: 6,
            name : "NARS",
            price : 399.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/3f/16/6e/3f166ee865e96dba71ab7e777ccfdd29.jpg",
            active : false
          },
          {
            id : 7,
            name : "EYEBROW PENCIL",
            price : 199.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/be/1e/ce/be1ecea32f848783e34a4dbafd62e969.jpg",
            active :false
          },
            {
            id: 8,
            name : "GARNIER LOTION",
            price : 289.00,
            quantity : 1,
            image : "https://i.pinimg.com/236x/06/a1/47/06a1473909f75e7cfd81a4b657b11ffd.jpg",
            active : false
          },
         
         
        ],
        products3 : [
          {
            id : 9,
            name : "JOHNSON BABY BATH",
            price : 167.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/f6/f7/61/f6f76172074a79d723c6df4520a33c6a.jpg",
            active :false
          },
            {
            id: 10,
            name : "NIVEA",
            price : 250.00,
            quantity :1,
            image : "https://i.pinimg.com/564x/15/cc/f0/15ccf0a357536a65cc0edd34b63c6d22.jpg",
            active : false
          },
          {
            id : 11,
            name : "MISEENSCENE",
            price : 189.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/a1/1f/ce/a11fce2e23b4a818734279b4ffc6e3fe.jpg",
            active :false
          },
            {
            id: 12,
            name : "CLEANSING BIORE",
            price : 150.00,
            quantity : 1,
            image : "https://i.pinimg.com/564x/e1/76/10/e17610a451e925b3cb7fa4167192fe00.jpg",
            active : false
          },
         
         
        ]
        }
    },
methods :{
    minusQty:function(item){
       item.quantity -= 1;
        if(item.quantity <= 1){
            item.quantity = 1
        }
        item.total = item.price*item.quantity;
    },
      
    plusQty:function(item){
        item.quantity += 1;
        item.total = item.price*item.quantity;
        
    },
    removeProduct(products1){
        if(confirm("Do you want to delete the product?")){
            var index = this.products1.indexOf(products1);
            this.products1.splice(index,1);
            if(products1.id == 1){
                this.products1 = 0;

            }

        }
    },
      selected:function(item){
          item.active = !item.active
      },
    total :function(){
        var sum = 0;
        this.products1.forEach(function(item){
          if(item.active){
            sum += item.total;
          }
          
        });
         this.products2.forEach(function(item){
          if(item.active){
            sum += item.total;
          }

        });
        this.products3.forEach(function(item){
          if(item.active){
            sum += item.total;
          }
        });
        return sum;
      },

     
}

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=Sarabun:wght@700&display=swap');

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
.table-detail{
    margin-top:40px;
    margin-left: 135px;
    width: 1500px;
}
.table{
    color: #c4c4c4;
}
.head{
    color: #565555;
    font-family: 'Poppins', sans-serif;
    font-size:18px;
    font-weight: normal;
    text-align: center;
}
.detail{
    text-align: center;
    color: #565555;
    font-family: 'Poppins', sans-serif;
    font-size:18px;
    font-weight: normal;
}
.image{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    margin-top: 5px;
    
}
.form-check{
    text-align: center;
    margin-top: 15px;
}
.text{
    color: #565555;
    font-family: 'Poppins', sans-serif;
    font-size:15px;
    font-weight: normal;
}
.fas.fa-plus{
    color:#9FE2BF;
    margin-left:20px;
    cursor: pointer;
}
.fas.fa-minus{
    margin-right:20px;
    color:#F08080;
    cursor: pointer;

}
.btn.btn-primary{
    background-color:#F08080;
    color: #FFFFFF;
    border-color: #F08080;
    font-family: 'Poppins', sans-serif;
    font-size:12px;
    border-radius: 10px;
    margin-top: 10px;
    text-align: center;
    width: 100px;
}
.span{
    margin-left: 123px;
    color: #000000;
}
.span1{
    margin-left: 150px;
    color: #000000;
}
.btn.btn-secondary{
    background-color:#FFFFFF;
    color: #FFC0CB;
    border-color: #FFC0CB;
    font-family: 'Poppins', sans-serif;
    font-size:15px;
    border-radius: 10px;
    margin-top: 10px;
    text-align: center;
    width: 200px;
    height: 40px;
    margin-top: 30px;
    margin-left: 30px;
}
.btn.btn-secondary:hover{
    background-color:#FFC0CB;
    color: #FFFFFF;
    border-color: #FFC0CB;
    font-family: 'Poppins', sans-serif;
    font-size:15px;
    border-radius: 10px;
    margin-top: 10px;
    text-align: center;
    width: 200px;
    height: 40px;
    margin-top: 30px;
    margin-left: 30px;
}
.card{
    border-color: #FFC0CB;
    margin-top: 40px;
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