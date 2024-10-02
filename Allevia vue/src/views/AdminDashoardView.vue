<template>
  <div class="d-flex" id="wrapper">
    <!--administrator Sidenav component -->
    <AdminSidenav />
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4">
        <div class="d-flex align-items-center">
            <i
              class="fas fa-align-left primary-text fs-4 ps-0"
              id="menu-toggle"
            ></i>
          </div>
        <div
          class="dash-search d-flex justify-content-center align-item-center"
        >
          <form class="sbar shadow-lg" role="search">
            <input
              class="sbar form-control"
              type="search"
              placeholder="search"
              arial-lable="search"
            />
          </form>
        </div>
        <!-- <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> -->

        <!-- Profile image dropdown -->
        <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle second-text fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img :src="profile" class="avatar" alt="#" /> Doe
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <RouterLink class="dropdown-item" to="/profile"
                      >Profile</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="#">Settings</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/">Logout</RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div> -->

        <div class="collapse navbar-collapse me-5" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle second-text fw-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img :src="profile" class="avatar" alt="#" /> Doe
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><RouterLink class="dropdown-item" to="/profile">Profile</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="#">Settings</RouterLink></li>
                <li><RouterLink class="dropdown-item" @click="logout" to="#">Logout</RouterLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid px-4">
        <h2 class="fs-2 m-0">Medications</h2>
        <div class="row g-3 my-2">
          <DashMed v-for="user in users.slice(0,4)" :key="user.id" :user="user" />
        
        </div>

        <div class="row my-5">
          <h2 class="fs-9 mb-3">Users</h2>
          <div class="col">
            <UsersTable  />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
  var el = document.getElementById("wrapper");
  var toggleButton = document.getElementById("menu-toggle");
  
  toggleButton.onclick = function () {
    el.classList.toggle("toggled");
  };
  </script> -->

<script setup>
import profile from "@/assets/profilepic.jpg";
import AdminSidenav from "@/components/AdminSidenav.vue";
import AppointmentTable from "@/components/AppointmentTable.vue";
import DashMed from "@/components/DashMed.vue";
import { RouterLink } from "vue-router";
import UsersTable from "@/components/UsersTable.vue";
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import data from '@/MOCK_DATA.json';

const toast = useToast();
const router = useRouter();

const users = ref(data);

const logout = async () => {
 


 try {
    await axios.post('/api/loginUser', newUser);
 toast.success('logged-Out  Succesfully!')
 router.push('/')
   
 } catch (error) {
   console.error("Authentication failed",error)
   toast.error("An error occurred!")
   
 }
};



</script>
