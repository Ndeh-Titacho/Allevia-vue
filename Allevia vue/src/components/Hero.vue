<script setup>
import hero from "@/assets/hero.png";
import playstore from "@/assets/playstore.svg";
import apple from "@/assets/apple.svg";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  title: {
    type: String,
    default: "Bringing Aid to the Elderly & Mentally unstable",
  },
});
</script>

<template>
  <!-- Hero section -->
  <div class="container" id="home">
    <div class="row">
      <div class="col-md-7 d-flex justify-content-center align-center justify">
        <img :src="hero" alt="" width="700" height="500" class="img-fliud" />
      </div>
      <div class="gstarted col-md-5 justify-content-center pt-5">
        <h1 class="mt-md-5">{{ title }}</h1>
        <button class="btn GS mt-s-5 mt-md-3" type="">
          <RouterLink to="/login" class="text-decoration-none fw-bold"
            >GET STARTED</RouterLink
          >
        </button>

        <!-- Download buttons -->

        <div class="row row-cols-1 mt-4">
          <div class="col bg-dark py-3 rounded-4">
            <a href="" class="text-decoration-none text-white">
              <div class="row">
                <div
                  class="col-5 d-flex justify-content-center align-items-center"
                >
                  <img :src="playstore" alt="playstore icon" height="60" />
                </div>
                <div class="col-7">
                  <small class="fs d-inline-block">Download from</small
                  ><br /><small class="fs1">Google Play</small>
                </div>
              </div>
            </a>
          </div>

          <div class="col bg-dark py-3 rounded-4 mt-1">
            <a href="" class="text-decoration-none text-white">
              <div class="row">
                <div
                  class="col-5 d-flex justify-content-center align-items-center"
                >
                  <img :src="apple" alt="playstore icon" height="60" />
                </div>
                <div class="col-7">
                  <small class="fs d-inline-block">Download from</small
                  ><br /><small class="fs1">Apple Play</small>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- <div class="row row-cols-md-2 row-cols-sm-1 mt-5">
            <div class="col bg-dark text-white py-3 ps-4 rounded-4 me-3 mb-sm-2">
                <a href="#" class="text-decoration-none text-white">
                     <div class="row download">
                    <div class="col-4"> <img :src="playstore" alt="playstore icon" height="40">
                    </div>
                    <div class="col-8 ps-0">
                      <small>Download from </small> 
                      <small class="fw-medium fs-5">Google play</small></div>
                </div></a>
               
            </div>
            <div class="col bg-dark text-white py-3 ps-4 rounded-4">
                <a href="#" class="text-decoration-none text-white"> 
                     <div class="row download">
                    <div class="col-4"> <img :src="android" alt="playstore icon" height="40">
                    </div>
                    <div class="col-8"><small>Download from </small> <small class="fw-medium fs-5">Apple play</small></div>
                </div></a>
              
            </div>
          </div> -->
      </div>
    </div>
  </div>
</template>
