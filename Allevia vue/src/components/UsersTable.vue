<template>
  <div class="col">
    <table class="table rounded shadow-lg table-hover table-striped"  >
      <thead >
        <tr>
          <th scope="col" width="50">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Profession</th>
          <th scope="col">Time</th>
          <th scope="col">Age</th>
          <th scope="col">Roles</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name}} {{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.profession }}</td>
          <td>${{ user.time }}</td>
          <td>{{ user.gender }}</td>
          <td>$1200</td>
          <td>
            <RouterLink to="/showUser">
              <button type="button" class="btn gn btn-success text-black me-2">
                Show
              </button>
            </RouterLink>
            <RouterLink to="/showUser">
              <button type="button" class="btn gn btn-success text-black me-2">
                Edit
              </button></RouterLink
            >

            <button type="submit" @click="deleteUser" class="btn rd btn-danger">Delete</button>
          </td>
        </tr>
       
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import data from '@/MOCK_DATA.json';
import { ref} from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const router = useRouter();
const toast = useToast();

const deleteUser = async () =>{
  try {
    const confirm = window.confirm('Are you sure you want to delete this user?');
    if(confirm) {
      await axios.delete(`/api/users/${userId}`)
    toast.success('User Deleted Successfully!')
    router.push('/admin-dashboard')
    }
  } catch (error) {
   console.error('Failed to delete user',error )
   toast.error('User not deleted!')
    
  }
}

const users = ref(data);
console.log(users);


</script>