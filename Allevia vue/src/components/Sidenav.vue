<template>
  <!-- Sidebar -->
  <div class="schbr " id="sidebar-wrapper">
    <!-- <div
      class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"
    >
      Allevia
    </div> -->
    <div class="list-group list-group-flush my-3">
      <RouterLink
        to="/profile"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="User"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />Profile</RouterLink
      >
    
      <RouterLink
        to="/"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="Caregiver"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />CaregiverAccess</RouterLink
      >
      <RouterLink
        to="/medication-list"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="Medication"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />Medication</RouterLink
      >
      <RouterLink
        to="/"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="Pharmacy"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />Pharmarcy Intergration</RouterLink
      >
      <RouterLink
        to="/"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="Guide"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />Guide</RouterLink
      >
      <RouterLink
        to="/"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="helpdesk"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />Help Center</RouterLink
      >
      <RouterLink
        to="/"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="setting"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />Setting</RouterLink
      >
      <RouterLink
        to="#"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="notification"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />Notification</RouterLink
      >
      <RouterLink
        to="/appointments"
        class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <img
          :src="Logout"
          alt="icon"
          class="img-fluid me-2"
          width="32"
          height="32"
        />Appointment</RouterLink
      >
    </div>
  </div>
  <!-- /#sidebar-wrapper -->
</template>

<script setup>
//  var el = document.getElementById("wrapper");
//         var toggleButton = document.getElementById("menu-toggle");

//         toggleButton.onclick = function () {
//             el.classList.toggle("toggled");
//         };

import { RouterLink } from "vue-router";
import Users from "@/assets/Users.png";
import User from "@/assets/User.png";
import Caregiver from "@/assets/Caregiver.png";
import Medication from "@/assets/Medication.png";
import Pharmacy from "@/assets/Pharmacy.png";
import Guide from "@/assets/Guide.png";
import helpdesk from "@/assets/helpdesk.png";
import setting from "@/assets/setting.png";
import notification from "@/assets/notification.png";
import Logout from '@/assets/Logout.png'
</script>
