<template>
  <div class="chat">

    <!--Navbar-->
     <header>
         <NavbarPage />
        </header>
    <!-- End Navbar-->

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
    <!-- End Header-->

    <div class="container">
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card chat-app">
            <div id="plist" class="people-list">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" ><i class="fa fa-search fa-2x"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                    <li class="clearfix">
                        <img src="https://i.pinimg.com/564x/c1/e0/dc/c1e0dc9cc0df30dab64d8096a7ba8ff7.jpg" alt="avatar">
                        <div class="about">
                            <div class="name">Snow White</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                        </div>
                    </li>
                    <li class="clearfix active">
                        <img src="https://i.pinimg.com/564x/e3/73/7f/e3737f10362fc905543f7da4c5bde0fc.jpg" alt="avatar">
                        <div class="about">
                            <div class="name">Cinderella</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://i.pinimg.com/564x/a1/05/15/a10515069f8c7f034e064c03203018dd.jpg" alt="avatar">
                        <div class="about">
                            <div class="name">Aurora</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>                                    
                    <li class="clearfix">
                        <img src="https://i.pinimg.com/564x/d8/e2/eb/d8e2eb04159e963e807a4f9dc8cc3acb.jpg" alt="avatar">
                        <div class="about">
                            <div class="name">Belle</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://i.pinimg.com/564x/2f/70/56/2f70568ba2235ce41a950b090b96b065.jpg" alt="avatar">
                        <div class="about">
                            <div class="name">Jasmine</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://i.pinimg.com/564x/51/5b/da/515bdae685786186afd271938b26604e.jpg" alt="avatar">
                        <div class="about">
                            <div class="name">Merida</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> offline since Fab 28 </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chat" >
                <div class="chat-header clearfix" >
                    <div class="row">
                        <div class="col-lg-6" >
                            <a href="" data-toggle="modal" data-target="#view_info">
                                <img src="https://i.pinimg.com/564x/e3/73/7f/e3737f10362fc905543f7da4c5bde0fc.jpg" alt="avatar">
                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">Cinderella</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>
                        </div> 
                      	<div style="margin-top:-50px">
                            <button class="btn btn-light" style="float:right;border-color:#FFC0CB;"><i class="fas fa-ellipsis-h"></i></button>
                            <button class="btn btn-light" style="float:right;border-color:#FFC0CB;"><i class="fas fa-video"></i></button>
								            <button class="btn btn-light" style="float:right;border-color:#FFC0CB;"><i class="fas fa-phone-alt"></i></button>
								
							
							</div>
                    </div>
                </div>
                <div class="chat-history">
                    <ul class="m-b-0">
                        <li class="clearfix">
                         
                            <div class="message other-message " 
                            style="float:right;">
                             Hello, are there any other products?? </div>
                        </li>
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:12 AM, Today</span>
                            </div>
                            <div class="message my-message">Yes, are you interested?</div>                                    
                        </li>                               
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:15 AM, Today</span>
                            </div>
                            <div class="message my-message">There is a new shower cream to present.</div>
                        </li>
                    </ul>
                </div>
                <div class="chat-message clearfix" >
                    <div class="input-group mb-0">
                        <div class="input-group-prepend"  > 
                            <span class="input-group-text"  ><i class="fas fa-paper-plane fa-2x"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Enter text here..." >                                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  </div>
</template>

<script>
import NavbarPage from '../components/NavbarPage.vue'
export default {
  components :{
    NavbarPage,
  },
  data (){
    return{
      msg : "Chat"
    }
  }

}
</script>

<style scoped>
body{
    background-color: #f4f7f6;
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
.card {
    background: #fff;
    transition: .5s;
    border: 3;
    margin-bottom: 30px;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    border-color: #FFC0CB;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
    margin-top:40px;
    
}
.fa.fa-search{
  color: #565555;
}
.fas.fa-paper-plane{
  color: #565555;
  cursor: pointer;
}
.fas.fa-paper-plane:hover{
  color: #FFC0CB;
}
.form-control{
  border-color: #FFC0CB;
}
.input-group-text{
  background-color:#FFF;
  border-color:#FFC0CB;
}
.btn.btn-light{
  background-color: #FFC0CB;
  border-color :#FFC0CB;

}

.btn.btn-light:hover{
  background-color: #FFC0CB;
  border-color :#FFC0CB;
  color: #FFF;
}

.chat-app .people-list {
    width: 280px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    z-index: 7
}

.chat-app .chat {
    margin-left: 280px;
    border-left: 1px solid #eaeaea
}

.people-list {
    -moz-transition: .5s;
    -o-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s
}

.people-list .chat-list li {
    padding: 10px 15px;
    list-style: none;
    border-radius: 3px
}

.people-list .chat-list li:hover {
    background: #FFC0CB;
    cursor: pointer
}

.people-list .chat-list li.active {
    background: #FFC0CB
}

.people-list .chat-list li .name {
    font-size: 15px
}

.people-list .chat-list img {
    width: 45px;
    border-radius: 50%
}

.people-list img {
    float: left;
    border-radius: 50%
}

.people-list .about {
    float: left;
    padding-left: 8px
}

.people-list .status {
    color: #999;
    font-size: 13px
}

.chat .chat-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f4f7f6
}

.chat .chat-header img {
    float: left;
    border-radius: 40px;
    width: 40px
}

.chat .chat-header .chat-about {
    float: left;
    padding-left: 10px
}

.chat .chat-history {
    padding: 20px;
    border-bottom: 2px solid #fff
}

.chat .chat-history ul {
    padding: 0
}

.chat .chat-history ul li {
    list-style: none;
    margin-bottom: 30px
}

.chat .chat-history ul li:last-child {
    margin-bottom: 0px
}

.chat .chat-history .message-data {
    margin-bottom: 15px
}

.chat .chat-history .message-data img {
    border-radius: 40px;
    width: 40px
}

.chat .chat-history .message-data-time {
    color: #434651;
    padding-left: 6px
}

.chat .chat-history .message {
    color: #444;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 7px;
    display: inline-block;
    position: relative
}

.chat .chat-history .message:after {
    bottom: 100%;
    left: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px
}

.chat .chat-history .my-message {
    background: #efefef
}

.chat .chat-history .my-message:after {
    bottom: 100%;
    left: 30px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #efefef;
    border-width: 10px;
    margin-left: -10px
}

.chat .chat-history .other-message {
    background: #e8f1f3;
    text-align: right
}

.chat .chat-history .other-message:after {
    border-bottom-color: #e8f1f3;
    left: 93%
}

.chat .chat-message {
    padding: 20px
}

.online,
.offline,
.me {
    margin-right: 2px;
    font-size: 8px;
    vertical-align: middle
}

.online {
    color: #86c541
}

.offline {
    color: #e47297
}

.me {
    color: #1d8ecd
}

.float-right {
    float: right
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}

@media only screen and (max-width: 767px) {
    .chat-app .people-list {
        height: 465px;
        width: 100%;
        overflow-x: auto;
        background: #fff;
        left: -400px;
        display: none
    }
    .chat-app .people-list.open {
        left: 0
    }
    .chat-app .chat {
        margin: 0
    }
    .chat-app .chat .chat-header {
        border-radius: 0.55rem 0.55rem 0 0
    }
    .chat-app .chat-history {
        height: 300px;
        overflow-x: auto
    }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .chat-app .chat-list {
        height: 650px;
        overflow-x: auto
    }
    .chat-app .chat-history {
        height: 600px;
        overflow-x: auto
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
    .chat-app .chat-list {
        height: 480px;
        overflow-x: auto
    }
    .chat-app .chat-history {
        height: calc(100vh - 350px);
        overflow-x: auto
    }
}

</style>