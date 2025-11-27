<script setup>
import FirstnameInput from './ui/FirstnameInput.vue';
import LastnameInput from './ui/LastnameInput.vue';
import EmailInput from './ui/EmailInput.vue';
import AddBtn from './ui/AddBtn.vue';
import { ref } from 'vue';

const emailValue = ref('');
const firstnameValue = ref('');
const lastnameValue = ref('');

const getEmail = (email) => {
  if (email) {
    emailValue.value = email;
    console.log(
      ' Le formulaire réceptionne pour le props vers le bouton' + email
    );
  } else {
    alert('Veuillez renseigné un email compatible');
  }
};
const getFirstname = (firstname) => {
  if (firstname) {
    firstnameValue.value = firstname;
    console.log(
      ' Le formulaire réceptionne pour le props vers le bouton' + firstname
    );
  } else {
    alert('Veuillez renseigner un firstname');
  }
};
const getLastname = (lastname) => {
  if (lastname) {
    lastnameValue.value = lastname;
    console.log(
      ' Le formulaire réceptionne pour le props vers le bouton' + lastname
    );
  } else {
    alert('Veuillez renseigner un lastname');
  }
};
const emit = defineEmits(['onSend']);
const onSend = (data) => {
  emit('onSend', data);
  console.log(data);
};
</script>
<template>
  <!-- Aside gauche pour le formulaire -->
  <aside class="w-1/3 bg-gray-200 p-6 pb-12">
    <h2 class="text-xl font-bold mb-4">Add a Contact</h2>
    <firstname-input @on-firstname="getFirstname" />
    <lastname-input @on-lastname="getLastname" />
    <email-input @on-email="getEmail" />
    <add-btn
      :email="emailValue"
      :lastname="lastnameValue"
      :firstname="firstnameValue"
      @on-send="onSend"
    />
  </aside>
</template>
<style scoped></style>
