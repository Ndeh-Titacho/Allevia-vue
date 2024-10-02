<script setup>
import logo from "@/assets/white logo.png";
import Form from "@/components/Form.vue";
</script>

<template>

    <!-- Footer section -->
    <div class="container-fluid mt-5 bg-dark text-white" id="contact">
        <div class="row pt-5">
         

        <div class="row row-cols-md-2 row-cols-1 ms-2">
          <div class="col d-none d-md-block ">
            <div class="row">
            <div class="col foot">
              <h3>Other Pages</h3>
            <small><a href="#">Support</a></small>
            <br>
            <small><a href="#">Privacy Policy</a></small>
            <br>
            <small><a href="#">Terms of Service</a></small></div>
            <div class="col foot">
              <h3>Contact Info</h3>
            <small> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="white" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg><a href="#"> Way-in Nkwen</a></small>
            <br>
            <small><a href="#">+237 668926872</a></small>
            <br>
            <small><a href="#">johndoe@gmail.com</a></small>
            </div>
          </div></div>

          <!-- form -->
           <Form/>
         
          <div class="col  d-md-none mt-5 ">
            <div class="row">
            <div class="col foot ">
              <h3>Other Pages</h3>
            <small><a href="#">Support</a></small>
            <br>
            <small><a href="#">Privacy Policy</a></small>
            <br>
            <small><a href="#">Terms of Service</a></small></div>
            <div class="col foot">
              <h3>Contact Info</h3>
            <small><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="white" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>Way-in Nkwen</a></small>
            <br>
            <small><a href="#">+237 668926872</a></small>
            <br>
            <small><a href="#">johndoe@gmail.com</a></small>
            </div>
          </div></div>
         
         
       
      </div>
        <div class="container-fluid">
    
          <div class="col d-flex justify-content-end d-flex justify-content-between align-center mt-5"> 
            <img :src="logo" width="200" height="50" alt="White Allevia logo">
             <small class="pt-3">Copyright &copy 2024 All rights reserved</small></div>
        </div>
      </div>
    </div>
</template>