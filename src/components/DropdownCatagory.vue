<template>
<div class="menu-item" @click="isOpen = !isOpen" >
    <a  style="font-family: 'Poppins', sans-serif;font-family: 'Poppins', sans-serif;
    color: #565555;text-decoration:none;">
        {{ title }}
    </a>
    <i class="fas fa-caret-down"></i>
    <transition name = "fade" appear>
    <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item" >
            <a :href="item.link" style="font-family: 'Poppins', sans-serif;font-family: 'Poppins', sans-serif;
    color: #565555;text-decoration:none;">{{ item.title }}</a>
        </div>
    </div>
    
    </transition>
</div>
</template>

<script>
export default {
    name : 'dropdowncatagory',
    props : ['title', 'items'],
    data () {
        return{
            isOpen : false
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=Sarabun:wght@700&display=swap');
.fas.fa-caret-down{
    color: #565555;
    width: 10px;
    margin-left: 10px;
}
nav .menu-item .sub-menu{
    position: absolute;
    background-color: #FFF;
    top : calc(100% + 18px);
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
    font-family: 'Poppins', sans-serif;font-family: 'Poppins', sans-serif;
    color: #565555;
    
}

.fade-enter-active, 
.fade-leave-active {
    transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.menu-item:hover{
    background-color: #FFF;
    border-bottom-color: #FFC0CB;
}
.menu-item.active,
.menu-item:hover {
    background-color: #FFF;
    border-bottom-color: #FFC0CB;
}
</style>