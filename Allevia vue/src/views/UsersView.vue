<template>
  <div class="container-fluid wrapperforschedule">
    <!-- Search bar -->
    <div class="row">
      <a href="#">
        <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i
      ></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <i class="bi bi-arrow-left"></i>
      <form class="w-100 d-flex justify-content-center" role="search">
        <input
          class="form-control me-2 w-50"
          type="search"
          placeholder="search"
          arial-lable="search"
        />
      </form>
    </div>
    <div class="container row my-5"></div>
    <h2 class="fs-7 mb-3">Users</h2>

    <!-- Create button -->
    <div class="row  me-5 mb-3 ">
      <RouterLink  to="/showUser" class=" d-flex justify-content-end  "> <button
        class="createUserBtn bg-primary  create-btn rounded-2 py-2 text-white fw-medium"
      >
        Create User
      </button></RouterLink>
     
    </div>
    <div class="col">
      <UsersTable/>
  </div>
</div>
</template>
<script setup>
import UsersTable from '@/components/UsersTable.vue';
import { RouterLink } from 'vue-router';
</script>
