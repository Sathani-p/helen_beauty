<template>
  <div class="contact">

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
           style="font-family: 'Poppins', sans-serif;font-size:15px;color:#C4C4C4;margin-left:5px;"> {{msg}} </span>
        </i>
    </div>
    <!--End Header-->

<!--Content-->
    <section class="section gray-bg" id="contactus">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>Get In Touch</h2>
                    <p>Welcome to Helénē Beauty</p>
                </div>
            </div>
        </div>
        <div class="row flex-row-reverse">
            <div class="col-md-7 col-lg-8 m-15px-tb">
                <div class="contact-form">
                     <form action="/" method="post" class="contactform contact_form" id="contact_form">
                        <div class="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                        <div class="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="name" type="text" placeholder="Full Name" class="form-control"> 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="email" type="text" placeholder="Email Address" class="form-control">  
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <input id="subject" type="text" placeholder="Subject" class="form-control"> 
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea id="message" placeholder="Message" class="form-control" rows="3"></textarea> 
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="send">
                                    <a id="send_message" class="px-btn theme" href="#"><span>Contact Us</span> <i class="arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-5 col-lg-4 m-15px-tb">
                <div class="contact-name">
                    <h5><i class="fas fa-envelope"></i> Mail</h5>
                    <p>s6130613016@phuket.psu.ac.th</p>
                </div>
                <div class="contact-name">
                    <h5><i class="fas fa-map-marker-alt"></i> Visit My Studio</h5>
                    <p>Vichit , Muang Phuket ,Thailand 83000</p>
                </div>
                <div class="contact-name">
                    <h5><i class="fas fa-phone-alt"></i> Phone</h5>
                    <p>+66 93 679 3874</p>
                </div>

                <div class="social-share nav" style="height : 200px">
                      <longdo-map @load="loadMap">
        <longdo-map-marker @add="addMarker" :location="{ lon: 98.39250, lat: 7.88000 }" />
    </longdo-map>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Content-->
<PopupChat />

  </div>
</template>

<script>
import NavbarPage from '../components/NavbarPage.vue'
import { LongdoMap } from 'longdo-map-vue'
LongdoMap.init('a5667edcd83e5ddc5babcef19683db20')
import PopupChat from '../components/PopupChat.vue'
export default {
  components : {
        NavbarPage,
        LongdoMap,
        PopupChat,
    },
    data (){
        return{
            msg : "Contact",
           
        }
    },
    methods: {
        loadMap (map) {
            map.Layers.setBase(longdo.Layers.NORMAL)
        },
        addMarker (marker) {
            console.log(marker.location())
        }
    }

}

</script>

<style scoped>
body{
    color: #565555;
    margin-top:20px;
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
.section {
    padding: 100px 0;
    position: inherit;
}

.gray-bg {
    background-color: #FFF;
}
/* Contact Us
---------------------*/
.contact-name {
  margin-bottom: 30px;
}
.contact-name h5 {
  font-size: 22px;
  color: #FFC0CB;
  margin-bottom: 5px;
  font-weight: 600;
}
.contact-name p {
  font-size: 18px;
  margin: 0;
}



.contact-form .form-control {
  border: none;
  border-bottom: 1px solid #FFC0CB;
  background: transparent;
  border-radius: 0;
  padding-left: 0;
  box-shadow: none !important;
}
.contact-form .form-control:focus {
  border-bottom: 1px solid #FFC0CB;
}
.contact-form .form-control.invalid {
  border-bottom: 1px solid #FFC0CB;
}
.contact-form .send {
  margin-top: 20px;
}
@media (max-width: 767px) {
  .contact-form .send {
    margin-bottom: 20px;
  }
}

.section-title h2 {
    font-weight: 700;
    color: #565555;
    font-size: 45px;
    margin: 0 0 15px;
    border-left: 5px solid #FFC0CB;
    padding-left: 15px;
}
.section-title {
    padding-bottom: 45px;
}
.contact-form .send {
    margin-top: 20px;
}
.px-btn {
    padding: 0 50px 0 20px;
    line-height: 60px;
    position: relative;
    display: inline-block;
    color: #565555;
    background: none;
    border: none;
}
.px-btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 30px;
    background: transparent;
    border: 1px solid #FFC0CB;
    border-right: 1px solid transparent;
    -moz-transition: ease all 0.35s;
    -o-transition: ease all 0.35s;
    -webkit-transition: ease all 0.35s;
    transition: ease all 0.35s;
    width: 60px;
    height: 60px;
}
.px-btn .arrow {
    width: 13px;
    height: 2px;
    background: currentColor;
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 25px;
}
.px-btn .arrow:after {
    width: 8px;
    height: 8px;
    border-right: 2px solid currentColor;
    border-top: 2px solid currentColor;
    content: "";
    position: absolute;
    top: -3px;
    right: 0;
    display: inline-block;
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

</style>