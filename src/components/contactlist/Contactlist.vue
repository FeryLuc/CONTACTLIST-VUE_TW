<script setup>
import ContactlistHeader from './ui/ContactlistHeader.vue';
import SearchBar from './ui/SearchBar.vue';
import ListTable from './ui/listtable/ListTable.vue';
import DB from '@/DB';
import { reactive, ref, onMounted } from 'vue';

const contacts = reactive([]);
onMounted(async () => {
  DB.setApiUrl('https://691b0e532d8d7855757146d3.mockapi.io/');
  const response = await DB.findAll();
  contacts.splice(contacts.length, 0, ...response);
  console.table(contacts);
});
</script>
<template>
  <!-- Section droite pour la liste des contacts -->
  <section class="w-2/3 p-6">
    <contactlist-header />
    <!-- Filtre de recherche -->
    <search-bar />
    <!-- Liste des contacts triée et filtrée -->
    <list-table :contacts="contacts" />
  </section>
</template>
<style scoped></style>
