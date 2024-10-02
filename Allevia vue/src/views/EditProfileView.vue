<template>
  <div class="container mt-5">
    <h4>Edit Profile</h4>
    <form class="row g-3">
      <div class="col-md-12">
        <label for="inputName" class="form-label">Name</label>
        <input type="text" class="form-control" id="inputName" />
      </div>
      <div class="col-md-6">
        <label for="inputEditprofilepicture" class="form-label"
          >Edit Profile Picture</label
        >
        <select id="inputEditprofilepicture" class="form-select">
          <option>Select from gallery</option>
          <option>take a picture</option>
        </select>
      </div>

      <div class="col-md-6">
        <label for="inputContact" class="form-label">Contact</label>
        <input type="numbers" class="form-control" id="inputContact" />
      </div>
      <div class="col-md-6">
        <label for="inputAddress" class="form-label">Age</label>
        <input
          type="text"
          class="form-control"
          id="inputAge"
          placeholder="30"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword" class="form-label">Password</label>
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          placeholder="xo3xhyw34457"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmergencycontact" class="form-label"
          >Emergency Contact</label
        >
        <input type="number" class="form-control" id="inputEmergencycontact" />
      </div>
      <div class="col-md-6">
        <label for="inputGender" class="form-label">Gender</label>

        <select id="inputGender" class="form-select">
          <option selected>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div class="col-12 mt-4 mx-3">
        <button type="submit" @submit.prevent="handleProfile"  class="btn bg-primary">Update Changes</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const toast = useToast();
const route = useRoute();
const router = useRouter();

const profileId = route.params.id;

const form = reactive({
  name: "",
  contact: "",
  emergencyContact: "",
  age: "",
  password: "",
  gender: "",
  profileImage: ""
});

const handleProfile = async () => {
  const updatedProfile = {
    name: form.name,
    age: form.age,
    gender: form.gender,
    contact: form.contact,
    emergencyContact: form.emergencyContact,
    password: form.password,
    profileImage: form.profileImage


  };

  
  try {
        await axios.put('http://http://localhost:8000/profile', updatedProfile);
       toast.success('Form updated successfully!');
       router.push(`/dashboard/${response.data.id}`)
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Something went wrong, try again later!')
      }
};

const state = ({
  profile: [],
  isLoading: true,
})

onMounted( async() => {

  try {
    const response = await axios.get(`/api/profile/${profileId}`)
    state.profile = response.data
    //populate inputs
    form.name=state.profile.name;
    form.age=state.profile.age;
    form.gender=state.profile.gender;
    form.contact=state.profile.contact;
    form.emergencyContact=state.profile.emergencyContact;
    form.password=state.profile.password;
    form.profileImage= state.profile.profileImage;
  } catch (error) {
    
    console.error('Error fetching profile image',error)
  }
  finally{
    isLoading = false
  }
})

</script>
