<template>
<div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
        {{ title }}
    </a>
    <i class="fas fa-caret-down"></i>
    <transition name = "fade" appear>
    <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }}</a>
        </div>
    </div>
    
    </transition>
</div>
</template>

<script>
export default {
    name : 'dropdown',
    props : ['title', 'items'],
    data () {
        return{
            isOpen : false
        }
    }

}
</script>

<style >

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
    
}
.fade-enter-active, 
.fade-leave-active {
    transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>