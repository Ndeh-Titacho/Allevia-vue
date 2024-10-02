<template>
  <div class="col-md-3">
    <div
      class="box p-3 shadow-sm d-flex justify-content-around align-items-center rounded"
    >
      <div>
        <h6 class="fs-.8">Name</h6>
        <p class="fs-5 fw-bold">{{ user.first_name }}</p>
        <h6 class="fs-.8">Dosage</h6>
        <p class="fs-5 fw-bold">2tablets</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  user: Object
})
</script>
