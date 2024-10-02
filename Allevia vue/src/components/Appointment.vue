<template>
  <div class="col appointment shadow-lg pt-5 border border-2 px-5 rounded-2">
    <div class="">
      <h5 class="title">{{ user.first_name }}{{ user.last_name }}</h5>
    </div>
    <div class="mt-4">
      <h6 class="fw-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(71, 85, 54,100%)"
          class="bi bi-calendar2-week mb-1 me-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
          />
          <path
            d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
          /></svg
        >Mon, 21st September 2024
      </h6>
      <h6 class="fw-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(71, 85, 54,100%)"
          class="bi bi-clock mb-1 me-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
          />
          <path
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
          /></svg
        >12:47:AM
      </h6>
    </div>
    <div class="d-flex justify-content-end me-1 mt-3">
      <RouterLink to="/schedule-appointment"
        ><button
          class="resch-btn bg-primary border border-none rounded-3 text-white px-3 mb-4"
        >
          Reschedule
        </button></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import { ref, reactive } from 'vue';

  defineProps({
    user:Object
  })


</script>
