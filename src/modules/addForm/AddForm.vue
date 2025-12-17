<script setup>
import AddBtn from "./components/AddBtn.vue";
import MyInput from "@/components/ui/MyInput.vue";
import { store } from "@/stores/contacts";
</script>
<template>
  <!-- Aside gauche pour le formulaire -->
  <aside class="w-1/3 bg-gray-200 p-6 pb-12">
    <h2 class="text-xl font-bold mb-4">Add a Contact</h2>
    <my-input v-model="store.formData.firstname" placeholder="Alex"
      >Firstname</my-input
    >
    <my-input v-model="store.formData.lastname" placeholder="Doe"
      >Lastname</my-input
    >
    <my-input
      v-model="store.formData.email"
      placeholder="alex.doe@gmail.com"
      type="email"
      >Email</my-input
    >
    <add-btn @on-send="store.createContact" />
  </aside>
</template>
<style scoped></style>
