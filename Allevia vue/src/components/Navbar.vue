
<script setup>
import logo from "@/assets/logo.png";
import { RouterLink, } from "vue-router";
</script>


<template>
   <!-- Navigation bar -->
   <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-between  ">
            <div class="container-fluid">
              <RouterLink class="navbar-brand " to="/"> 
                <img :src="logo" alt="" width="200" height="50" >
              </RouterLink>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>    
              </button>
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#services">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#testimonials">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about#partners">Partners</a>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/about">About Us</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/FAQ">FAQ's</RouterLink>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#contact">Contact Us</a>
                  </li>
                  

                 
                </ul>
               
              </div>
            </div>
          </nav> 
</template>