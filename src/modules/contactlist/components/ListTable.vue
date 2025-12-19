<script setup>
import Contact from "./Contact.vue";

const props = defineProps({
  contacts: { type: Array },
  editingId: { type: Number },
  filteredContacts: { type: Array },
});

const emit = defineEmits(["onDelete", "onUpdate", "onEditing"]);
const onDelete = (id) => {
  emit("onDelete", id);
};
const onEditing = (id) => {
  emit("onEditing", id);
};
const onUpdate = (newContact) => {
  emit("onUpdate", newContact);
};
</script>
<template>
  <table class="table-auto w-full contacts-table">
    <thead>
      <tr class="bg-gray-200">
        <th class="text-left p-4 rounded-tl-lg">
          <a href="#">Firstname</a>
        </th>
        <th class="text-left p-4"><a href="#">Lastname</a></th>
        <th class="text-left p-4">
          <a href="#">Email</a>
        </th>
        <th class="text-right p-4 rounded-tr-lg">Actions</th>
      </tr>
    </thead>
    <tbody>
      <contact
        v-for="contact in props.contacts"
        :key="contact.id"
        :contact="contact"
        @on-delete="onDelete"
        @on-editing="onEditing"
        @on-update="onUpdate"
        :isEditing="props.editingId === contact.id"
      />
    </tbody>
  </table>
</template>
<style scoped></style>
