<script setup></script>
<template>
  <button
    class="btn-check isEditing-visible bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
    @click="onUpdate"
  >
    <slot></slot>
  </button>
</template>
<style scoped></style>
