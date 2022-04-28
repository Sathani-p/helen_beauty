<template>
  <div class="catagory">


<!-- Navbar-->
   <header>
      <NavbarPage />
 </header>

<!-- End Navbar-->


<!-- Header-->
    <div class = "header1">
       <i class="fas fa-home">
           <span style="font-family: 'Poppins', sans-serif;font-size:18px;margin-left:5px;">Home</span></i> 
        <i class="fas fa-chevron-right" style="margin-left:5px;"> 
           <span
           style="font-family: 'Poppins', sans-serif;font-size:15px;color:#C4C4C4;margin-left:5px;"> {{msg}} </span>
        </i>
    </div>

<!-- End Header -->


  
    
<!-- Content -->
<div class="container">
 <div class="row">
   <div class="col-6 col-md-4" style="margin-left:-250px;margin-top:40px;">
     <h4 style="border-bottom: solid 3px #FFC0CB;width:100px;margin-left:0px">Catagory</h4>
    <div class="side-menu">
        <DropdownCatagory title = "Face" :items = "Face" />
        <hr style="width:220px">
         <DropdownCatagory title = "Lips" :items = "Lips" />
        <hr style="width:220px">
         <DropdownCatagory title = "Eyes" :items = "Eyes" />
        <hr style="width:220px">
         <DropdownCatagory title = "Makeup Remover" :items = "Makeupremover" />
        <hr style="width:220px">
         <DropdownCatagory title = "Beauty Accessories" :items = "Beauty" />
        <hr style="width:220px">
         <DropdownCatagory title = "Nails" :items = "Nail" />
        <hr style="width:220px">
         <DropdownCatagory title = " Other Makeup" :items = "Other" />
        <hr style="width:220px">
</div>

          <h4 style="border-bottom: solid 3px #FFC0CB;width:150px;margin-top:20px">Shop By Price</h4>
          
        <p style="margin-top:20px">Price : ฿99 - ฿199 <button type="button" class="btn" style="border-color: #FFC0CB;margin-left:10px"><i class="fas fa-filter"></i> Filter</button> </p> 
   </div>


    <div class="col-md-8" style="position:inherit;margin-left:100px">
      <h3 class="h3"> Helénē Beauty</h3>
       <div class="row" style="position:inherit;">
        <div class="col-md-3 col-sm-6" v-for="item in products1" :key="item" style="position:inherit;">
            <div class="product-grid" >
                <div class="product-image" style="position:inherit;">
                    <a href="#">
                        <img :src="item.image" class="pic-1" >
                       
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/shoppingcart" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">20%</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="">{{item.name}}</a></h3>
                    <div class="price">฿ {{ item.discount}}
                        <span>฿ {{ item.price}}</span>
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
       </div>
       


    <div class="row" style="margin-top:30px;">
       <div class="col-md-3 col-sm-6" v-for="item in products2" :key="item">
            <div class="product-grid">
                <div class="product-image">
                    <a href="">
                        <img :src="item.image" class="pic-1" >
                       
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/shoppingcart" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">20%</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="#">{{item.name}}</a></h3>
                    <div class="price">฿ {{ item.discount}}
                        <span>฿ {{ item.price}}</span>
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
    </div>

    <div class="row" style="margin-top:30px;">
        <div class="col-md-3 col-sm-6" v-for="item in products3" :key="item">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#">
                        <img :src="item.image" class="pic-1" >
                       
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/shoppingcart" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">20%</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="#">{{item.name}}</a></h3>
                    <div class="price">฿ {{ item.discount}}
                        <span>฿ {{ item.price}}</span>
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</div>
<hr>

<!-- End Content -->

<PopupChat />






  </div>
</template>

<script>
import NavbarPage from '../components/NavbarPage.vue'
import DropdownCatagory from '../components/DropdownCatagory.vue'
import PopupChat from '../components/PopupChat.vue'
export default {
    name : 'catagory',

    components :{
        NavbarPage,
        DropdownCatagory,
        PopupChat
    }, 
 data () {
    return {
        msg : "Catagory",
        products1 : [
          {
            id : 1,
            name : "MAKEUP BRUSH ",
            price :1990.0 ,
            discount : 1592.0,
            image : "https://i.pinimg.com/564x/81/b9/1c/81b91c598ab778a5ef5e90deb3ebc6ad.jpg",
            active :false
          },
            {
            id: 2 ,
            name : "REVLON ",
            price :430.0,
            discount : 344.0,
            image : "https://i.pinimg.com/564x/97/74/91/97749195f8e3a785152672da2d3ae0fc.jpg",
            active : false
          },
          {
            id : 3,
            name : "COCO PREFUME",
            price : 2990.0,
            discount : 2392.0,
            image : "https://i.pinimg.com/564x/c6/e3/bb/c6e3bbca052d681d98859332352f5073.jpg",
            active :false
          },
            {
            id: 4 ,
            name : "MAKEUP REVOLUTION",
            price : 799.0,
            discount : 639.2,
            image : "https://i.pinimg.com/564x/e2/46/7b/e2467b4646ea31a68206f6d09acc197c.jpg",
            active : false
          },
         
        ],
          products2 : [
          {
            id : 5,
            name : "L'OREAL",
            price : 199.0,
            discount : 159.2,
            image : "https://i.pinimg.com/564x/a1/d8/f1/a1d8f13d4f0dc7b9279cde1ed3df0e03.jpg",
            active :false
          },
            {
            id: 6,
            name : "NARS",
            price : 399.0,
            discount : 319.2,
            image : "https://i.pinimg.com/564x/ef/21/76/ef217615529d6ffbeb46b581cd99bb3c.jpg",
            active : false
          },
          {
            id : 7,
            name : "EYEBROW PENCIL",
            price : 199.0 ,
            discount : 159.2,
            image : "https://i.pinimg.com/564x/fe/f5/54/fef554c2992f493c5d91d56ca6bba4e0.jpg",
            active :false
          },
            {
            id: 8,
            name : "GARNIER LOTION",
            price : 289.0 ,
            discount : 231.2,
            image : "https://i.pinimg.com/236x/06/a1/47/06a1473909f75e7cfd81a4b657b11ffd.jpg",
            active : false
          },
         
         
        ],
        products3 : [
          {
            id : 9,
            name : "JOHNSON BABY BATH",
            price : 167.0,
            discount : 133.6,
            image : "https://i.pinimg.com/564x/f6/f7/61/f6f76172074a79d723c6df4520a33c6a.jpg",
            active :false
          },
            {
            id: 10,
            name : "NIVEA",
            price : 250.0,
            discount : 200.0,
            image : "https://i.pinimg.com/564x/15/cc/f0/15ccf0a357536a65cc0edd34b63c6d22.jpg",
            active : false
          },
          {
            id : 11,
            name : "MISEENSCENE",
            price : 189.0,
            discount : 171.2,
            image : "https://i.pinimg.com/564x/22/f5/09/22f509da8ecfd7606de1b3dbe768f82b.jpg",
            active :false
          },
            {
            id: 12,
            name : "CLEANSING BIORE",
            price : 150.0,
            discount : 120.0,
            image : "https://i.pinimg.com/564x/e1/76/10/e17610a451e925b3cb7fa4167192fe00.jpg",
            active : false
          },
        ],
        Face :[
                {
                    title : 'Powder',
                    link : '#',
                },
                {
                    title : 'Blush On',
                    link : '#'
                },
                 {
                    title : 'Foundation',
                    link : '#',
                },
                {
                    title : 'Cushion',
                    link : '#'
                },
                 {
                    title : 'Base/Primer',
                    link : '#',
                },
                {
                    title : 'Makeup Accessories',
                    link : '#'
                },
                
            ],
            Lips :[
                {
                    title : 'Color',
                    link : '#',
                },
                {
                    title : 'Blam',
                    link : '#'
                },
                 {
                    title : 'Liquid Lip',
                    link : '#',
                },
                {
                    title : 'Tint Lip',
                    link : '#'
                },
                 {
                    title : 'Lip Palette',
                    link : '#',
                },
                {
                    title : 'Gloss/Gel/Lip Liner ',
                    link : '#'
                },
                
            ],
             Eyes :[
                {
                    title : 'Eye Shadow/Palette',
                    link : '#',
                },
                {
                    title : 'Mascara',
                    link : '#'
                },
                 {
                    title : 'Eye Liner',
                    link : '#',
                },
                {
                    title : 'Eye Lash',
                    link : '#'
                },
                 {
                    title : 'Eyebrow',
                    link : '#',
                },
                {
                    title : 'Fashioned Contact Lens ',
                    link : '#'
                },
                
            ],
            Makeupremover :[
              {
                title : '',

              }
            ],
             Beauty :[
                {
                    title : 'Face Accessories',
                    link : '#',
                },
                {
                    title : 'Eye Accessories',
                    link : '#'
                },
                 {
                    title : 'Body Accessories',
                    link : '#',
                },
                {
                    title : 'Cosmetic Bag',
                    link : '#'
                },
                 {
                    title : 'Beauty Electrical',
                    link : '#',
                },
                {
                    title : 'Other Accessories',
                    link : '#'
                },
                
            ],
             Nail :[
                {
                    title : 'Nail Polis',
                    link : '#',
                },
                {
                    title : 'Nail Accessories',
                    link : '#'
                },
                 {
                    title : 'Artificial Nail',
                    link : '#',
                },
                {
                    title : 'Nail Care',
                    link : '#'
                },
                 {
                    title : 'Nail Strip',
                    link : '#',
                },
            ],
             Other :[
                {
                    title : 'Makeup Tools',
                    link : '#',
                },
            ],
    }   
    },

    methods :{
      selected:function(item){
          item.active = !item.active
      },
      total :function(){
        var sum = 0;
        this.products1.forEach(function(item){
          if(item.active){
            sum += item.price;
          }
        });
         this.products2.forEach(function(item){
          if(item.active){
            sum += item.price;
          }

        });
        this.products3.forEach(function(item){
          if(item.active){
            sum += item.price;
          }
        });
        return sum;
      },
    }
      
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=Sarabun:wght@700&display=swap');


header{
  width: 100vw;
  background-color:#FFF;
  padding: 15px;
  
}
.header1{
    margin-top:40px;
    margin-left: 40px;
}

body{
background:#ddd;
}
.side-menu{
  cursor: pointer;
}

h3.h3{text-align:center;margin:1em;text-transform:capitalize;font-size:1.7em;}

/*********************  Helénē Beauty **********************/
.product-grid{
  font-family: 'Poppins', sans-serif;
  text-align:center;
  padding:0 0 72px;
  border:1px solid #FFC0CB;
  overflow:hidden;
  position:relative;
  z-index:1
  }
.product-grid .product-image{
  position:relative;
  transition:all .3s ease 0s
}
.product-grid .product-image a{
  display:block
}
.product-grid .product-image img{
  width:100%;
  height:auto
}
.product-grid .pic-1{
  opacity:1;
  transition:all .3s ease-out 0s
}
.product-grid:hover .pic-1{
  opacity:1
}
.product-grid .pic-2{
  opacity:0;
  position:absolute;
  top:0;
  left:0;
  transition:all .3s ease-out 0s
}
.product-grid:hover .pic-2{
  opacity:1
}
.product-grid .social{
  width:150px;
  padding:0;
  margin:0;
  list-style:none;
  opacity:0;
  transform:translateY(-50%) translateX(-50%);
  position:absolute;top:60%;
  left:50%;
  z-index:1;
  transition:all .3s ease 0s
}
.product-grid:hover .social{
  opacity:1;
  top:50%
}
.product-grid .social li{
  display:inline-block
}
.product-grid .social li a{
  color:#fff;
  background-color:#333;
  font-size:16px;
  line-height:40px;
  text-align:center;
  height:40px;
  width:40px;
  margin:0 2px;
  display:block;
  position:relative;
  transition:all .3s ease-in-out
}
.product-grid .social li a:hover{
  color:#fff;
  background-color:#FFC0CB;
}
.product-grid .social li a:after,
.product-grid .social li a:before{
  content:attr(data-tip);
  color:#fff;
  background-color:#000;
  font-size:12px;
  letter-spacing:1px;
  line-height:20px;
  padding:1px 5px;
  white-space:nowrap;
  opacity:0;
  transform:translateX(-50%);
  position:absolute;
  left:50%;
  top:-30px
}
.product-grid .social li a:after{
  content:'';
  height:15px;
  width:15px;
  border-radius:0;
  transform:translateX(-50%) rotate(45deg);
  top:-20px;
  -index:-1
}
.product-grid .social li a:hover:after,
.product-grid .social li a:hover:before{
  opacity:1
}
.product-grid .product-discount-label,
.product-grid .product-new-label{
  color:#fff;
  background-color:#FFC0CB;
  font-size:12px;
  text-transform:uppercase;
  padding:2px 7px;
  display:block;
  position:absolute;
  top:10px;
  left:0
}
.product-grid .product-discount-label{
  background-color:#333;
  left:auto;
  right:0
}
.product-grid .rating{
  color:#FFD200;
  font-size:12px;
  padding:12px 0 0;
  margin:0;
  list-style:none;
  position:relative;
  z-index:-1
}
.product-grid .rating li.disable{
  color:rgba(0,0,0,.2)
}
.product-grid .product-content{
  background-color:#fff;
  text-align:center;
  padding:12px 0;
  margin:0 auto;
  position:absolute;
  left:0;
  right:0;
  bottom:-27px;
  z-index:1;
  transition:all .3s
}
.product-grid:hover .product-content{
  bottom:0
}
.product-grid .title{
  font-size:13px;
  font-weight:400;
  letter-spacing:.5px;
  text-transform:capitalize;
  margin:0 0 10px;
  transition:all .3s ease 0s
}
.product-grid .title a{
  color:#565555
}
.product-grid .title a:hover,.product-grid:hover .title a{
  color:#FFC0CB
}
.product-grid .price{
  color:#333;
  font-size:17px;
  font-family: 'Poppins', sans-serif;
  font-weight:700;
  letter-spacing:.6px;
  margin-bottom:8px;
  text-align:center;
  transition:all .3s
}
.product-grid .price span{
  color:#999;
  font-size:13px;
  font-weight:400;
  text-decoration:line-through;
  margin-left:3px;
  display:inline-block
}
.product-grid .add-to-cart{
  color:#565555;
  font-size:13px;
  font-weight:600
}
@media only screen and (max-width:990px){
  .product-grid{
    margin-bottom:30px
}

}




</style>