<template>
  <section class="container profile mb-5">
    <!-- <div class="arrow container-fluid mt-5 ms-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class=""
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
        />
      </svg>
    </div> -->

    <!-- profile image section -->
    <div class="john text-center">
      <img
        :src="profilepic"
        alt=""
        height="250"
        width="250"
        class="rounded-circle picture"
      />
      <h1>John Doe</h1>
      <h6 class="">john@gmail.com</h6>
      <button class="edit rounded-2 py-2 px-3">
        <RouterLink
          to="/edit-profile"
          class="text-decoration-none edit border border-none"
          >Edit Profile</RouterLink
        >
      </button>
    </div>

    <!-- Input details section -->
    <div class="row row-cols-2 mt-5 d-flex justify-content-center">
      <!-- left side -->
      <div class="col-sm-4">
        <div class="row border-bottom border-black pb-2">
          <div class="col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgba(107, 128, 80, 1)"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              />
            </svg>
          </div>
          <div class="col-10">
            <div>Name</div>
            <div>John Doe</div>
          </div>
        </div>

        <div class="row border-bottom border-black pb-2 mt-3">
          <div class="col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgba(107, 128, 80, 1)"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </div>
          <div class="col-10">
            <div>Contact</div>
            <div>+237 652-962-750</div>
          </div>
        </div>

        <div class="row border-bottom border-black pb-2 mt-3">
          <div class="col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgba(107, 128, 80, 1)"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </div>
          <div class="col-10">
            <div>Age</div>
            <div>89 Years</div>
          </div>
        </div>
      </div>
      <!--  Right side -->
      <div class="col-sm-4 ms-5">
        <div class="row border-bottom border-black pb-2">
          <div class="col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgba(107, 128, 80, 1)"
              class="bi bi-gender-ambiguous"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"
              />
            </svg>
          </div>
          <div class="col-10">
            <div>Gender</div>
            <div>Male</div>
          </div>
        </div>

        <div class="row border-bottom border-black pb-2 mt-3">
          <div class="col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgba(107, 128, 80, 1)"
              class="bi bi-telephone-outbound-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <div class="col-10">
            <div>Emergency Contact</div>
            <div>+237 652-962-750</div>
          </div>
        </div>

        <div>
          <div class="row border-bottom border-black pb-3">
            <RouterLink
              to="/medical-history"
              class="text-black text-decoration-none pt-4"
              >Medical History
              <span class>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="rgba(107, 128, 80, 1)"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                  />
                </svg> </span
            ></RouterLink>
          </div>
          <div class="row border-bottom border-black mt-4 pb-3">
            <RouterLink
              to="caregiveraccess.html"
              class="text-black text-decoration-none"
              >Caregiver Access
              <span class>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="rgba(107, 128, 80, 1)"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                  /></svg></span
            ></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profilepic from "@/assets/profilepic.jpg";
import { RouterLink, useRoute } from "vue-router";
import { reactive,onMounted } from "vue";

const route =useRoute();

const profileId = route.params.id;

const state = reactive({
  profile: [],
  isLoading: true
})

onMounted( async()=>{
  
  try{
    const response = await axios.get(`/api/profile/${profileId}`)
    state.profile = response.data
  }
  catch(error){
    console.error('Error fetching profile!', error)
  }
  finally{
    isLoading = false
  }
})
</script>
