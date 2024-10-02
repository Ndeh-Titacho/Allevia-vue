<template>
  <section class="container">
    <div class="navbar">
      <nav>
        <img src="./Assets/logo.png" alt="" height="70" class="logo mx-3" />
      </nav>
    </div>

    <div class="d-flex justify-content-between">
      <!-- back arrow -->
      <a href="#" class="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
      <!--<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>-->
    </div>
    <h3 class="mx-4 mt-5">Medical List</h3>
    <div class="row row-cols-1 row-cols-md-3 mt-3">
      <!-- Single Medication List component -->
      <MedicationList />
      <MedicationList />
      <MedicationList />
    </div>
    <div class="row row-cols-1 row-cols-md-3 mt-3">
      <MedicationList />
      <MedicationList />
      <MedicationList />
    </div>
  </section>
</template>

<script setup>
import MedicationList from "@/components/MedicationList.vue";
import { reactive, onMounted } from "vue";


const state = reactive({
  medications: [],
  isLoading: true
})

onMounted( async()=>{
  
  try{
    const response = await axios.get('/api/medications')
    state.medications = response.data
  }
  catch(error){
    console.error('Error fetching medications!', error)
  }
  finally{
    isLoading = false
  }
})
</script>
