<template>
  <section class="loginSection d-flex justify-content-center mt-3">
    <div class="cont row shadow-lg p-3 mb-5 mx-sm-4 rounded-2 pt-5">
      <div class="container createAcc d-block">
        <h1 class="text-center mb-5 create">Create Account</h1>
      </div>

      <!-- Form section -->

      <div class="container d-flex justify-content-center">
        <form
          @submit.prevent="signup"
          action=""
          class="w-md-75 w-100 p-3 rounded-2 mb-3 form-1"
        >
          <div class="input-group mb-3">
            <input
              v-model="form.name"
              type="text"
              class="form-control shadow"
              placeholder="Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="rgb(71, 85, 54,100%)"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                /></svg
            ></span>
          </div>
          <div class="input-group mb-3">
            <input
              v-model="form.email"
              type="text"
              class="form-control shadow"
              placeholder="Email"
              aria-label="Recipient's email"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="rgb(71, 85, 54,100%)"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                /></svg
            ></span>
          </div>
          <div class="input-group mb-3">
            <input
              v-model="form.password"
              type="text"
              class="form-control shadow"
              placeholder="Password"
              aria-label="Recipient's password"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="rgb(71, 85, 54,100%)"
                class="bi bi-lock"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"
                /></svg
            ></span>
          </div>

          <!-- Profession input group for caregiver -->
          <!-- <Profession /> -->
          <div class="buttonContainer d-flex justify-content-center">
            <button class="btn button w-md-25 w-50 rounded-pill">
              SIGN UP
            </button>
          </div>
          <!-- Media handle components -->
          <h5 class="fw-light text-center mt-5">or use your social handles</h5>
          <MediaHandles />

          <div class="mt-4 mx-5 d-flex justify-content-center">
            <h6>
              Already have an account?
              <RouterLink to="/login">Sign Up</RouterLink>
            </h6>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import MediaHandles from "@/components/MediaHandles.vue";
import Profession from "@/components/Profession.vue";
import { RouterLink, useRouter } from "vue-router";
import { reactive,ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();


const users = ref([]);



const form = reactive({
  name: "",
  email: "",
  password: "",
});


const signup = async () => {
  console.log(form);
  if( !form.name || !form.email || !form.password  ){
    toast.error('All fields must be filled!')
  }
  else{
    toast.success("Entries Validated!")
   
  };
  const newUser = {
    name: form.name,
    email: form.email,
    password: form.password
  };
  console.log(newUser);
 
 try{
  const response = await axios.post('/api/createUser', newUser);
  toast.success('Account created Succesfully!')
  router.push('.users/${response.data.id}');
  router.push('/admin-dashboard')
 }catch (error){
  console.error("Error creating user",error)
  toast.error('Failed to create Account!')
 }
 
  


   
  };
</script>
