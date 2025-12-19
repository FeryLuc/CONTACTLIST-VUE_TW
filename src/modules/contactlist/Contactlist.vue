<script setup>
import ContactlistHeader from "./components/ContactlistHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import ListTable from "./components/ListTable.vue";
import { store } from "@/stores/contacts";

// const filteredContacts = ref(contacts.value);

// const searchInArray = (searchValue) => {
//   filteredContacts.value = contacts.value.filter(
//     (c) =>
//       c.firstname.toLowerCase().includes(searchValue) ||
//       c.lastname.toLowerCase().includes(searchValue) ||
//       c.email.toLowerCase().includes(searchValue)
//   );
// };
// watch(props.formData, addContact);
// watch(
//   contacts,
//   () => {
//     filteredContacts.value = contacts.value;
//   },
//   { deep: true }
// );
</script>
<template>
  <!-- Section droite pour la liste des contacts -->
  <section class="w-2/3 p-6">
    <contactlist-header :contactCount="store.contactCount" />
    <!-- Filtre de recherche -->
    <search-bar @on-search="searchInArray" />
    <!-- Liste des contacts triée et filtrée -->
    <list-table
      :contacts="store.contacts"
      @on-delete="store.deleteContact"
      @on-editing="store.startEditing"
      @on-update="store.updateContact"
      :editingId="store.editingId"
    />
  </section>
</template>
<style scoped></style>
