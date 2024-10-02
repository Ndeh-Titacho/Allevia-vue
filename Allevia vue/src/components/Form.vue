<script setup>
import axios from "axios";
import { ref,reactive } from "vue";
import { useToast } from "vue-toastification";
// import formData from '@/data.json';

const form = reactive({
  name: "",
  email: "",
  contact: "",
  message: "",
});

const handleForm = async () => {
  const formDetails = {
    name: form.name,
    email: form.email,
    contact: form.contact,
    message: form.message,
  };

  const toast = useToast();

  if (
    !formDetails.name ||
    !formDetails.email ||
    !formDetails.contact ||
    !formDetails.message
  ) {
    toast.warning("All fields must be filled!");
  } else {
    toast.success("Entries Validated!");
    console.log(form.value);
  }

  try {
        await axios.post('http://http://localhost:8000/Messages', formDetails);
       toast.success('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Something went wrong, try again later!')
      }
};

//Clear all fields
form.name = "";
form.email = "";
form.contact = "";
form.message = "";
</script>

<template>
  <!-- form -->
  <div class="col form-container shadow d-md-flex justify-content-center p-0">
    <form
      @submit.prevent="handleForm"
      action=""
      class="p-3 rounded-4 w-100 m-auto me-5"
    >
      <h2 class="text-center mb-1 text-dark">Contact Us</h2>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control shadow"
          v-model="form.name"
          name="name"
          placeholder="Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgb(71, 85, 54,100%)"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
            /></svg
        ></span>
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control shadow"
          v-model="form.email"
          name="email"
          placeholder="Email"
          aria-label="Recipient's email"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgb(71, 85, 54,100%)"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            /></svg
        ></span>
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control shadow"
          v-model="form.contact"
          name="contact"
          placeholder="Contact"
          aria-label="Recipient's contact"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgb(71, 85, 54,100%)"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
            /></svg
        ></span>
      </div>

      <div class="input-group">
        <textarea
          class="form-control"
          v-model="form.message"
          name="message"
          placeholder="Message"
          aria-label="With textarea"
        ></textarea>
      </div>
      <br />

      <button class="btn" id="submit" type="submit">
      Send
      </button>
    </form>
  </div>
</template>
