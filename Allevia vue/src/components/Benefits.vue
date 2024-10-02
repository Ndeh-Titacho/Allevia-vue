<script setup>
import Benefit from "@/components/Benefit.vue";
import { defineProps } from "vue";

defineProps({
    benefit: {
        type: String,
        default: 'Marketing Services'
    },
    description: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse amet illo eos eligendi nobis nam aspernatur placeat.'
    }
})
</script>

<template>
   <!--Benefits-->
  <div class="wrapper5" id="benefits">
    <h1>Benefits</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Esse amet illo eos eligendi nobis nam aspernatur 
         placeat.</p>

         <div class="content-box">
            <Benefit >
                <i class="bx bx-bar-chart-alt bx-md"></i>
                <h2>{{ benefit }}</h2>
              <p>{{  description }}</p>

            </Benefit>
            <Benefit >
                <i class="bx bx-laptop bx-md"></i>
                <h2>{{  benefit }}</h2>
               <p>Web development refers to the creating, building, and maintaining of websites.</p>
                     
            </Benefit>
            <Benefit >
                <i class='bx bx-user bx-md'></i>

                <h2>24/7 Call Center Services</h2>
            <p>A BPO call center is a team of outsourced agents who handle incoming and outgoing.</p>
                     
            </Benefit>
            <Benefit >
                <i class="bx bx-mail-send bx-md"></i>
                <h2>Social Media Marketing</h2>
                <p> Iure ad fuga, voluptas nisi odit blanditiis aut culpa quasi. Expedita deleniti molestias hic
                    numquam delectus!</p>
                     
            </Benefit>
            <Benefit >
                <i class="bx bx-bar-chart-alt bx-md"></i>
                <h2>Copporate Bussiness</h2>
                <p> Iure ad fuga, voluptas nisi odit blanditiis aut culpa quasi. Expedita deleniti molestias hic
                    numquam delectus!</p>
                     
            </Benefit>
            <Benefit >
                <i class="bx bx-paint bx-md"></i>
                <h2>Creative Consultancy</h2>
                <p> Iure ad fuga, voluptas nisi odit blanditiis aut culpa quasi. Expedita deleniti molestias hic
                    numquam delectus!</p>
                     
            </Benefit>
         </div>
</div>
 
</template>