<script setup>
import bag from '@/assets/bag icon.svg';
import users from '@/assets/UsersThree.svg';
import heart from '@/assets/HandHeart.svg';
</script>

<template>
    <div class="container mt-5">
    <h1 class="text-center"> Frequently Asked Questions</h1>
    
      <div class="input-group rounded-pill mt-4">
        <input type="text" class="form-control " placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-secondary" type="button">Search</button>   
      
      </div>
      <div class="row g-1 mt-3">
        <div class="col-3 quest rounded-5 text-center py-2"><small class="text-center">Partners</small></div>
        <div class="col-6 quest rounded-5 text-center py-2 "><small>Appointments</small></div>
        <div class="col-3 quest rounded-5 text-center py-2 px-2 "><small>Healthcare</small></div>
      
       

      </div>
      <div class="row g-1 mt-1">
        <div class="col-7 quest rounded-5 text-center py-2"><small>Account management</small></div>
        <div class="col-5 quest rounded-5 text-center py-2"><small>Privacy concern</small></div>
      </div>

      <div class="row g-3 row-cols-1 row-cols-md-2 mt-4">
        <div class="col FAQ rounded-4 p-4">
          <img :src="bag" class="feature-icon" height="20" width="20" alt="">
          <h6  class="">  How can I manage my account</h6 >
        <p class="fw-light">Morbi iaculis, dolor ac iaculis mattis,
          sapien elit congue dui, nec gravida nibh enim vel nisl.</p></div>

        <div class="col FAQ rounded-4 p-4">
          <img :src="heart" class="feature-icon" height="25" width="25" alt="">
          <h6 class="" >How can I manage my account</h6 >
          <p class="fw-light">Morbi iaculis, dolor ac iaculis mattis,
            sapien elit congue dui, nec gravida nibh enim vel nisl.</p></div>

        <div class="col FAQ rounded-4 p-4">
          <img :src="users" class="feature-icon" height="25" width="25" alt="">
          <h6 class="" >How can I manage my account</h6 >
          <p class="fw-light">Morbi iaculis, dolor ac iaculis mattis,
            sapien elit congue dui, nec gravida nibh enim vel nisl.</p></div>

        <div class="col FAQ rounded-4 p-4">
          <img :src="users" class="feature-icon" height="25" width="25" alt="">
          <h6 class="" >How can I manage my account</h6 >
          <p class="fw-light">Morbi iaculis, dolor ac iaculis mattis,
            sapien elit congue dui, nec gravida nibh enim vel nisl.</p></div>
      </div>
      <a href="#" class="link">Contact support</a>
  </div>

  <!-- LINKS -->
   <div class="container mt-5">
    <div class="row links py-5 px-3 rounded-4">
      <div class="col-md-5 mb-sm-4 mb-md-0"><h5>Stay connected with Allevia</h5></div>
      <div class="col-md-7  d-flex justify-content-between"> <!-- whatsapp link -->
        <div class="medialink d-flex justify-content-center align-center bg-white rounded-circle pt-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
           <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
         </svg></div>
         <!-- facebook link -->
          <a href=""><div class="medialink d-flex justify-content-center align-center bg-white rounded-circle pt-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="(71, 85, 54,100%)" class="bi bi-facebook" viewBox="0 0 16 16">
           <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
         </svg></div></a>
         <!-- linkedin link -->
         <a href=""> <div class="medialink d-flex justify-content-center align-center bg-white pt-3 rounded-circle"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="(71, 85, 54,100%)" class="bi bi-linkedin" viewBox="0 0 16 16">
           <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
         </svg></div></a>
         <!-- X link -->
         <a href=""> <div class="medialink d-flex justify-content-center align-center bg-white rounded-circle pt-3"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="(71, 85, 54,100%)" class="bi bi-twitter-x" viewBox="0 0 16 16">
           <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
         </svg></div></a></div>
     
      
  </div>
  
 
      </div>
</template>