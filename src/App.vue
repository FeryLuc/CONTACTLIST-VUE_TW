<script setup>
import AddForm from './components/addForm/AddForm.vue';
import Contactlist from './components/contactlist/Contactlist.vue';
import AppFooter from './components/AppFooter.vue';
import { reactive } from 'vue';

const formData = reactive({});
const getFormData = (data) => {
  Object.assign(formData, data);
  console.log(formData);
};
</script>

<template>
  <AddForm @on-send="getFormData" />
  <Contactlist :formData="formData" />
  <AppFooter />
</template>

<style scoped></style>
