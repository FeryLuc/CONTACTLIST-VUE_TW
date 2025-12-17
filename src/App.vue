<script setup>
import AddForm from "./modules/addForm/AddForm.vue";
import Contactlist from "./modules/contactlist/Contactlist.vue";
import AppFooter from "./layout/AppFooter.vue";
import { onMounted } from "vue";
import { store } from "./stores/contacts";

onMounted(async () => {
  await store.init("https://691b0e532d8d7855757146d3.mockapi.io/");
});
</script>

<template>
  <AddForm />
  <Contactlist />
  <AppFooter />
</template>

<style scoped></style>
