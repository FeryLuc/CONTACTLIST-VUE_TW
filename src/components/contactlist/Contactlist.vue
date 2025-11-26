<script setup>
import ContactlistHeader from './ui/ContactlistHeader.vue';
import SearchBar from './ui/SearchBar.vue';
import ListTable from './ui/listtable/ListTable.vue';
</script>
<template>
  <!-- Section droite pour la liste des contacts -->
  <section class="w-2/3 p-6">
    <contactlist-header />
    <!-- Filtre de recherche -->
    <search-bar />
    <!-- Liste des contacts triée et filtrée -->
    <list-table />
  </section>
</template>
<style scoped></style>
