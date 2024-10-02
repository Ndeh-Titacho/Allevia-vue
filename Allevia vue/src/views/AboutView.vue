<script setup>
import who from '@/assets/who logo.svg'
import redCross from '@/assets/red cross logo.svg'
import heart from '@/assets/redheart.svg'
import hospital from '@/assets/hospital.svg'
import watch from '@/assets/watch.svg'
import about1 from '@/assets/about1.jpg'
import about2 from '@/assets/about2.jpg'
import about3 from '@/assets/about3.jpg'
import about4 from '@/assets/about4.jpg'
import about5 from '@/assets/about5.jpg'
</script>

<template>

    <div class="container about mt-5 py-5">
        <h1 class="text-center">About Us</h1>
        <p class="text-center">orem ipsum dolor sit amet, consecte
          tur adipiscing elit. Cras vel massa ut velit consectetur eleifend a id nunc. Nullam sodales nisl nec porta dictum. Suspendisse mollis, sapien eu cursus rutrum,Lorem ipsum dolor sit amet, consecte
          tur adipiscing elit. Cras vel massa ut velit consectetur eleifend a id nunc. Nullam sodales nisl nec porta dictum. Suspendisse mollis, sapien eu cursus rutrum,</p>
        <div class="row g-1">
          <div class="col-7">
            <img :src="about3" class="w-100 h-100" alt=""></div>
          <div class="col-5">
            <img :src="about2"  class="w-100 h-100" alt="">
          </div>
          <!-- <div class="col-md-3 pb-3 photo bg-primary"><img src="./Assets/hero img.png" class="w-100 h-100" alt=""></div> -->
        </div>
        <div class="row  g-1 ">
          <div class="col-5">
            <img :src="about4" class="w-100 h-100" alt=""></div>
          <div class="col-7">
            <img :src="about1" class="w-100 h-100" alt=""></div>
        </div>
        <div class="row mt-1">      
             <img :src="about5" alt="">
      </div>
    
    
        <!-- Our partners -->
         <div class="partners mt-5" id="partners">
          <h1 class="text-center"> Our Partners</h1>
          <div class="d-md-flex justify-content-between flex-xs-wrap ps-xs-5">
            <img :src="who" width="150" alt="">
            <img :src="redCross" width="150"  height="60"  alt="">
            <img :src="hospital" width="150" height="60"  alt="">
            <img :src="watch" width="150"  height="60" alt="">
            <img :src="heart"  width="150" height="60" alt="">
           </div> </div>
        
      </div>
</template>