<template>
  <section class="container px-0">
    <!-- <div class="navbar">
      <nav>
        <img src="./Assets/logo.png" alt="" height="70" class="logo mx-3" />
      </nav>
    </div> -->

    <div class="d-flex justify-content-between mt-3">
      <!-- back arrow -->
      <RouterLink to="/profile" class="text-black">
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
      ></RouterLink>

      <!-- Search bar -->
      <input
        type="search"
        class="form-control shadow w-50 search"
        placeholder="Search"
        aria-label="search"
        aria-describedby="basic-addon2"
      />
      <!--  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>-->
    </div>

    <div class="input-group justify-content-between mt-3">
      <h3 class="mx-4">Medical History</h3>
      <a href="modalall.html">
        <button class="butadd fw-medium rounded-2 mx-5 px-4">
          Add History
        </button></a
      >
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-5 mx-1 mt-1 my-1 px-0">
      <HistoryCard />
      <HistoryCard class="ms-1" />
      <HistoryCard class="ms-1" />
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4 mx-1 mt-2">
      <HistoryCard />
      <HistoryCard class="ms-1" />
      <HistoryCard class="ms-1" />
    </div>
  </section>
</template>

<script setup>
import HistoryCard from "@/components/HistoryCard.vue";
import { RouterLink } from "vue-router";
</script>
