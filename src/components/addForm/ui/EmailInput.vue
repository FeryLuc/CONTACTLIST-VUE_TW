<script setup>
import { ref } from 'vue';

const email = ref('');

const emit = defineEmits(['onEmail']);
const onEmail = () => {
  emit('onEmail', email.value);
  console.log("J'émets depuis l'email input: " + email.value);
};
</script>
<template>
  <div class="mb-4">
    <label class="block text-gray-700">Email</label>
    <input
      v-model="email"
      type="email"
      class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder="alex.doe@gmail.com"
      @input="onEmail"
    />
  </div>
</template>
<style scoped></style>
