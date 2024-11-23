<template>
    <div class="folders">
      <button class="folders__button" v-if="!isOpenModal" @click="toggleModal">
        Открыть
      </button>
      <AppModal
        v-if="isOpenModal"
        @closeModal="toggleModal"
        :titleModal="titleModal"
        :mockFolders="mockFolders"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import AppModal from "./AppModal.vue";
  import { useFolders } from "@/composables/useFolders";
  
  const { mockFolders } = useFolders();
  
  
  const titleModal = "Дерево папок";
  const isOpenModal = ref(false);
  
  const toggleModal = () => {
    isOpenModal.value = !isOpenModal.value;
  };
  </script>
  
  <style lang="scss" scoped>
  .folders {
    // width: 700px;
    margin: 0 auto;
  
    &__button {
      display: block;
      width: 300px;
      height: 50px;
      margin: 200px auto 0 auto;
      border-radius: 25px;
      font-size: 20px;
      background-color: #adadec;
    }
  }
  </style>
  