<template>
  <div class="folders">
    <button class="folders__button" v-if="!isOpenModal" @click="toggleModal">
      Открыть
    </button>
    <AppModal
      v-if="isOpenModal"
      @closeModal="toggleModal"
      @selectFolder="setFocusedFolderId"
      :titleModal="titleModal"
      :mockFolders="mockFolders"
    />
    <p class="folders__info-checked" v-if="focusedFolderId">
      Идентификатор выбранной папки:
      <span class="folders__checked-id">{{ focusedFolderId }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppModal from "./AppModal.vue";
import { useFolders } from "@/composables/useFolders";

const { mockFolders } = useFolders();

const titleModal = "Дерево папок";
const isOpenModal = ref(false);
const focusedFolderId = ref<number | null>(null);

const toggleModal = () => {
  isOpenModal.value = !isOpenModal.value;
};

const setFocusedFolderId = (focusedFolder: number | null) => {
  focusedFolderId.value = focusedFolder;
  toggleModal();
};
</script>

<style lang="scss" scoped>
.folders {
  margin: 20px auto;
  min-height: 600px;
  width: 700px;
  border-radius: 10px;

  &__button {
    display: block;
    width: 200px;
    height: 50px;
    margin: 200px auto 0 auto;
    border-radius: 25px;
    font-size: 18px;
    background-color: #d2d2d6;
  }

  &__info-checked {
    text-align: center;
    font-size: 20px;
    margin-top: 40px;
  }

  &__checked-id {
    color: rgb(226, 111, 174);
  }
}

@media screen and (max-width: 570px) {
  .folders {
    width: 350px;


    &__button {
      width: 150px;
      font-size: 15px;
    }

    &__info-checked {
      font-size: 16px;
      margin-top: 20px;

    }

    &__checked-id {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
