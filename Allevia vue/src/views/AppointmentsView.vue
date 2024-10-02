<template>
  <section class="container">
    <!-- <div class="navbar">
      <nav>
        <img src="./Assets/logo.png" alt="" height="70" class="logo mx-3" />
      </nav>
    </div> -->

    <div class="d-flex justify-content-between mt-2 w-75 ">
      <!-- back arrow -->
      <a href="#" class="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="mx-4"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          /></svg
      ></a>

      <!-- Search bar -->
      <input
        type="search"
        class="form-control shadow w-50 search"
        placeholder="Search"
        aria-label="search"
        aria-describedby="basic-addon2"
      />
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>-->
    </div>
    <div class="d-flex justify-content-between">
      <h3 class="mx-4 mt-5">Appointments</h3>
      <RouterLink to="/schedule-appointment" class="h-25"
        ><button class="btn bg-primary h-25 py-2 mt-5 text-white">
          Schedule Appointment
        </button></RouterLink
      >
    </div>

    <div class="row row-cols-2 row-cols-md-3 g-5 mx-1 mt-1">
      <Appointment v-for="user in users" :key="user.id" :user="user"  />
     
    </div>
  </section>
</template>

<script setup>
import Appointment from "@/components/Appointment.vue";
import { onMounted, reactive, ref } from 'vue';
import axios from "axios";
import data from '@/MOCK_DATA.json';

const users = ref(data);

const state = reactive({
  appointments: [],
  isLoading: true
})

onMounted( async()=>{
  
  try{
    const response = await axios.get('/api/appointments')
    state.appointments = response.data
  }
  catch(error){
    console.error('Error fetching appointments!', error)
  }
  finally{
    isLoading = false
  }
})

</script>
