<script setup>
import { RouterView } from "vue-router";
import Hero from "@/components/Hero.vue";
import OurServices from "@/components/OurServices.vue";
import Testimonials from "@/components/Testimonials.vue";
import Benefits from "@/components/Benefits.vue";
import Footer from "@/components/Footer.vue";


</script>

<template>

   <Hero />
   <OurServices/>
   <Testimonials/>
   <Benefits/>
   <Footer/>
   <RouterView />

</template>
