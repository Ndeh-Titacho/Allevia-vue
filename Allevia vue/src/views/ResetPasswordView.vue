<script setup>
import lock from "@/assets/lock.svg";
</script>
<template>
  <section class="">
    <div class="container reset-container shadow pt-3 w-75 w-lg-50">
      <div class="text-center mb-5"><img :src="lock" height="50" alt="" /></div>
      <h5 class="text-center">
        Forgot your password? <br />
        No worries, we've got you covered
      </h5>

      <form action="" class="bg-white">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control shadow"
            placeholder="New Password"
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
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control shadow"
            placeholder="Confirm New Password"
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
        <div class="buttonContainer d-flex justify-content-center">
          <button type="submit" class="btn button w-md-25 w-50 rounded-pill">
            RESET PASSWORD
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
