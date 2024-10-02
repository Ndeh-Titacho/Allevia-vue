<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
     <section class=""> 
       
        <div class="container forgot-container shadow pt-md-2 pb-5 w-75 w-lg-50 ">
            <!-- Lock icon -->
            <div class="text-center mb-5"><img src="./Assets/images/lock icon.svg" height="50" alt=""></div>

            <h5 class="text-center">Forgot your password? <br> No worries, we've got you covered</h5>
        
            <form action="" class="bg-white">
                <div class="input-group mb-3">
                    <input type="text" class="form-control shadow" placeholder="Enter your email address" aria-label="Recipient's email" aria-describedby="basic-addon2">
                    <span class="input-group-text" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(71, 85, 54,100%)" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                      </svg></span>
                  </div>
                  <div class="buttonContainer d-flex justify-content-center">   
                    <RouterLink to="/reset-password" class="text-decoration-none"> <button type="submit" class="btn button rounded-pill ">RESET PASSWORD</button></RouterLink>
                   
              </div>
            </form>
        </div>
    </section>
</template>