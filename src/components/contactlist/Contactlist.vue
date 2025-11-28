<script setup>
import ContactlistHeader from './ui/ContactlistHeader.vue';
import SearchBar from './ui/SearchBar.vue';
import ListTable from './ui/listtable/ListTable.vue';
import DB from '@/DB';
import { computed, onMounted, watch, ref } from 'vue';

const contacts = ref([]);
const contactCount = ref(0);
onMounted(async () => {
  DB.setApiUrl('https://691b0e532d8d7855757146d3.mockapi.io/');
  const response = await DB.findAll();
  contacts.value.splice(contacts.value.length, 0, ...response);
  console.table(contacts);
});

const props = defineProps({
  formData: { type: Object },
});
const deleteContact = async (id) => {
  await DB.deleteOneById(id);
  const index = contacts.value.findIndex((c) => c.id === id);
  if (index != -1) {
    contacts.value.splice(index, 1);
  }
};
const addContact = async () => {
  const response = await DB.create(props.formData);
  contacts.value.splice(contacts.value.length, 0, response);
  console.table(contacts);
};
const updateContact = async (newContact) => {
  await DB.updateOne(newContact);
};
const getContactCount = computed(() => contacts.value.length);
watch(props.formData, addContact);
</script>
<template>
  <!-- Section droite pour la liste des contacts -->
  <section class="w-2/3 p-6">
    <contactlist-header :contactCount="getContactCount" />
    <!-- Filtre de recherche -->
    <search-bar />
    <!-- Liste des contacts triée et filtrée -->
    <list-table
      :contacts="contacts"
      @on-delete="deleteContact"
      @on-update="updateContact"
    />
  </section>
</template>
<style scoped></style>
