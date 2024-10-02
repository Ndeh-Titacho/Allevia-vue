<script setup>
import heart from "@/assets/heart.svg";
import brain from "@/assets/brain.svg";
import health from "@/assets/health.svg";
import Card from "@/components/Card.vue";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";


defineProps( {
    title: {
        type: String,
        default: 'Health'
    },
    subtitle: {
        type: String,
        default: 'Ipsum Morbi iaculis, dolor ac iaculis mattis, sapien elit congue dui, nec gravida nibh enim vel nisl. Ut eget blandit purus. Cras commodo posuere nunc, in placerat enim venenatis at.'
    }
    
})
</script>

<template>
       <!-- OUR SERVICES -->

<div class="container  py-5" id="services"> 
  <h1 class="text-center mt-5 mb-4">Our Services</h1>
  <div class="row gy-2 gx-2 flex-md-nowrap row-cols-1 row-cols-md-3 justify-content-center">
  <Card class="col services ">
      <div class="feature-icon  ">
          
          <img :src="heart" class="rounded-circle ms-3" height="100px" width="80px" alt="heart icon">
  </div>
  
      <h3 class=" text-body-emphasis ms-3">Elderly Care</h3>
      <p class="ms-3">Morbi iaculis, dolor ac iaculis mattis,
           sapien elit congue dui, nec gravida nibh enim vel nisl. Ut eget blandit purus.
            Cras commodo posuere nunc, in placerat enim venenatis at.</p>
      </Card>
  <Card class="col services ">
      <div class="feature-icon">
          <img :src="health" class="rounded-circle ms-3" height="100px" width="80px" alt="health icon">
  
  </div>

      <h3 class=" text-body-emphasis ms-3">{{  title }}</h3>
      <p class="ms-3">{{ subtitle }}</p>
      </Card>
  <Card class="col services ">
      <div class="feature-icon">
          <img :src="brain" class="rounded-circle ms-3" height="100px" width="80px" alt="brain icon">
  </div>
  
      <h3 class=" text-body-emphasis ms-3">Mental Health <br>& Support</h3>
      <p class="ms-3">Morbi iaculis, dolor ac iaculis mattis,
           sapien elit congue dui, nec gravida nibh enim vel nisl. Ut eget blandit purus.
            Cras commodo posuere nunc, in placerat enim venenatis at.</p>
      </Card>
</div>
<RouterLink to="/services">View More</RouterLink>
  </div>
</template>