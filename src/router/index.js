import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Catagory from '../views/Catagoty.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Payment from '../views/Payment.vue'
import Tracking from '../views/Tracking.vue'
import Profile from '../views/Profile.vue'
import EditProfile from '../views/EditProfile.vue'
import Contact from '../views/Contact.vue'
import SignUp from '../views/SignUp.vue'
import TrackingDetail from '../views/TrackingDetail.vue'
import Noti from '../views/Noti.vue'
import Chat from '../views/Chat.vue'
import LikeProduct from '../views/LikeProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name : 'landingpage',
    component: LandingPage,
  },
      {
        path : '/login',
        name : 'login',
        component : Login,
      },
      {
        path : '/signup',
        name : 'signup',
        component : SignUp,
      },
      {
        path : '/catagory',
        name : 'catagory',
        component : Catagory,
      },
      {
        path : '/productdetail',
        name : 'productdetail',
        component : ProductDetail,
      },
      {
        path : '/shoppingcart',
        name : 'shoppingcart',
        component : ShoppingCart,
      },
      {
        path : '/payment',
        name : 'payment',
        component : Payment,
      },
      {
        path : '/tracking',
        name : 'tracking',
        component : Tracking,
      },
      {
        path : '/trackingdetail',
        name : 'trackingdetail',
        component : TrackingDetail,
      },
      {
        path : '/profile',
        name : 'profile',
        component : Profile,
      },
      {
        path : '/editprofile',
        name : 'editprofile',
        component : EditProfile,
      },
      {
        path : '/notification',
        name : 'notification',
        component : Noti,
      },
      {
        path : '/chat',
        name : 'chat',
        component : Chat,
      },
      {
        path : '/contact',
        name : 'contact',
        component : Contact,
      },
      {
        path : '/like',
        name : 'like',
        component : LikeProduct,
      },


      
  
    
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
