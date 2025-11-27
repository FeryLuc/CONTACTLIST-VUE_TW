<script setup>
const props = defineProps({
  email: { type: String },
  firstname: { type: String },
  lastname: { type: String },
});

const emit = defineEmits(['onSend']);
const onSend = () => {
  emit('onSend', {
    email: props.email,
    firstname: props.firstname,
    lastname: props.lastname,
  });
  console.log('Le bouton add récupère et émet ' + props.email, props.firstname);
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
