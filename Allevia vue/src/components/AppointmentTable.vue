<template>
  <table class="table rounded shadow-sm table-hover table-striped">
    <thead>
      <tr>
        <th scope="col" width="50">S/N</th>
        <th scope="col">Title</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
   
    <tbody >
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.first_name }}</td>
        <td>Jonny</td>
        <td>$1200</td>
        <td>
          <button type="button" class="btn gn btn-success me-2 text-black">
            <RouterLink to="/schedule-appointment" class="text-decoration-none text-black">  Reschedule</RouterLink>
        
          </button>
          <button @click="deleteUser" type="button" class="btn rd btn-danger">Cancel</button>
        </td>
      </tr>
      
    </tbody>
  </table>
</template>

<script setup>
import { ref , reactive, onMounted} from 'vue';
import data from '@/MOCK_DATA.json';
import { useToast } from 'vue-toastification';
import { useRouter,useRoute } from 'vue-router';
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

const toast = useToast();
const router = useRouter();
const route = useRoute();

const appointId = route.params.id;

const users = ref(data);
console.log(users)

const state = reactive({
  appointments: [],
  isLoading: true,
});

//GET request to populate  appointment table
onMounted( async () => {
  try {
    const response = await axios.get(`/api/appointments/${appointId}`,)
    state.appointments = response.data
    
  } catch (error) {
    console.error('Error fetching appointments!', error)
    
  }
  finally{
    isLoading = false
  }
})




const deleteUser =  async () =>{
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
</script>
