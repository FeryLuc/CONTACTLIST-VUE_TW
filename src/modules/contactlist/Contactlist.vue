<script setup>
import ContactlistHeader from "./components/ContactlistHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import ListTable from "./components/ListTable.vue";
import { store } from "@/stores/contacts";
</script>
<template>
  <!-- Section droite pour la liste des contacts -->
  <section class="w-2/3 p-6">
    <contactlist-header :contactCount="store.contactCount" />
    <!-- Filtre de recherche -->
    <search-bar v-model="store.searchValue" />
    <!-- Liste des contacts triée et filtrée -->
    <list-table
      :filteredContacts="store.filteredContacts"
      @on-delete="store.deleteContact"
      @on-editing="store.startEditing"
      @on-update="store.updateContact"
      :editingId="store.editingId"
    />
  </section>
</template>
<style scoped></style>
