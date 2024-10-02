<script setup>
import quotes from "@/assets/quotes.svg";
import Testimonial from "@/components/Testimonial.vue";
import { defineProps } from "vue";

defineProps({
  story: {
    type: String,
    default: 'Morbi iiaculis, dolor ac iaculis mattis,sapien elit congue dui, nec gravida nibh enim vel nisl.'
  }
})
</script>


<template>
     <!-- TESTIMONIALS -->

  <div class="container  px-4 py-5" id="testimonials">
    <h1 class="text-center mb-5">Testimonials</h1>
  <div class="row g-1 flex-md-nowrap row-cols-md-4 row-cols-1">
    
    <Testimonial class="col">
      <div class="feature-icon">
        <img :src="quotes" height="50px" width="40px"  alt="Quotes icon">
      </div>
      <p>{{  story }} </p>
        <div class="feature-icon mb-3">   
           <img src="@/assets/img 1.jpg" class="rounded-circle" height="50px" width="40px" alt="">
        </div>
    </Testimonial>

    <Testimonial class="col ">
      <div class="feature-icon">
        <img :src="quotes" height="50px" width="40px"  alt="Quotes icon">
      </div>
      <p>{{  story }} </p>
        <div class="feature-icon mb-3"> 
             <img src="@/assets/img 2.jpg" class="rounded-circle" height="50px" width="40px" alt="">
        </div>
      </Testimonial>

    <Testimonial class="col">
      <div class="feature-icon">
        <img :src="quotes" height="50px" width="40px"  alt="quotes icon">
      </div>
      <p>{{  story }} </p>
        <div class="feature-icon mb-3">   
             <img src="@/assets/img 3.jpg" class="rounded-circle" height="50px" width="40px" alt="">
        </div>
      </Testimonial>

    <Testimonial class="col ">
      <div class="feature-icon">
        <img :src="quotes" height="50px" width="40px"  alt="quotes icon">
      </div>
      <p>{{ story }} </p>
        <div class="feature-icon mb-3">  
            <img src="@/assets/img 4.jpg" class="rounded-circle" height="50px" width="40px" alt="">
        </div>
    </Testimonial>
    
  </div>

  </div>
</template>