<template>
  <div class="productdetail">

      <!--Navbar-->
      <header>
          <NavbarPage />
      </header>

      <!--End Navbar-->

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

<!--Content-->

<div class="container py-4 my-4 mx-auto d-flex flex-column">
    <div class="header">
        <div class="row r1">
            <div class="col-md-9 abc">
                <h1>MAKEUP BRUSH</h1>
            </div>
            <div class="col-md-3 text-right pqr">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p class="text-right para">Based on 250 Review</p>
        </div>
    </div>
    <div class="container-body mt-4">
        <div class="row r3">
            <div class="col-md-5 p-0 klo">
                <ul>
                    <li>Colorstay foundation, make up,</li>
                    <li> liquid foundation, black cap,</li>
                    <li>the legendary pump head of the </li>
                    <li>most smooth. Number 1 best seller </li>
                    <li> in the United States. Flawless coverage</li>
                    <li> easy to spread, lightweight foundation.</li>
                </ul>
            </div>
            <div class="col-md-7"> 
                <img src="https://i.pinimg.com/564x/81/b9/1c/81b91c598ab778a5ef5e90deb3ebc6ad.jpg"> 
            </div>
        </div>
    </div>
    <div class="footer d-flex flex-column mt-5">
        <div class="row r4">
            <div class="col-md-2 myt des"><a href="#">Description</a></div>
            <div class="col-md-2 myt "><a href="#">Review</a></div>
            <div class="col-md-2 mio offset-md-4">
             <router-link to="/shoppingcart">
                <button type="button" class="btn btn-outline-warning">
                    <a href="#">
                        ADD TO CART
                    </a>
                </button>
            </router-link>
            </div>
            <div class="col-md-2 myt ">
                <router-link to="/payment">
                <button type="button" class="btn btn-outline-warning">
                    <a href="#">
                        BUY NOW
                    </a>
                </button>
            </router-link>
            </div>
        </div>
    </div>
</div>

<!--End Content-->

  </div>
</template>

<script>
import NavbarPage from '../components/NavbarPage.vue'
export default {
    components :{
        NavbarPage,
    },
    data (){
        return {
            msg : "Product"
        }
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
body {
    background: #FFC0CB;
    font-family: 'Poppins', sans-serif;
}

.container {
    background: #fff !important;
    border: none;
    border-radius: none
}

.abc {
    padding-left: 40px
}

.pqr {
    padding-right: 70px;
    padding-top: 14px
}

.para {
    float: right;
    margin-right: 0;
    padding-left: 80%;
    top: 0
}

.fa-star {
    color: yellow
}

li {
    list-style: none;
    line-height: 50px;
    color: #565555
}

.col-md-2 {
    padding-bottom: 20px;
    font-weight: bold
}

.col-md-2 a {
    text-decoration: none;
    color: #565555
}

.col-md-2.mio {
    font-size: 12px;
    padding-top: 7px
}

.des::after {
    content: '.';
    font-size: 0;
    display: block;
    border-radius: 20px;
    height: 6px;
    width: 55%;
    background: #FFC0CB;
    margin: 14px 0
}

.r4 {
    padding-left: 25px
}

.btn-outline-warning {
    border-radius: 0;
    border: 2px solid #FFC0CB;
    color: #565555;
    font-size: 12px;
    font-weight: bold;
    width: 70%
}

@media screen and (max-width: 620px) {
    .container {
        width: 98%;
        display: flex;
        flex-flow: column;
        text-align: center
    }

    .des::after {
        content: '.';
        font-size: 0;
        display: block;
        border-radius: 20px;
        height: 6px;
        width: 35%;
        background: #FFC0CB;
        margin: 10px auto
    }

    .pqr {
        text-align: center;
        margin: 0 30px
    }

    .para {
        text-align: center;
        padding-left: 90px;
        padding-top: 10px
    }

    .klo {
        display: flex;
        text-align: center;
        margin: 0 auto;
        margin-right: 40px
    }
}

</style>