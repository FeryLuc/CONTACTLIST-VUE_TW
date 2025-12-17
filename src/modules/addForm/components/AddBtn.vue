<script setup>
const emit = defineEmits(["onSend"]);
const onSend = () => {
  emit("onSend");
  console.log("Le bouton add ");
};
</script>
<template>
  <button
    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
    @click="onSend"
  >
    Add
  </button>
</template>
<style scoped></style>
