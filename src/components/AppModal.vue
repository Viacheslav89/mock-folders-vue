<template>
  <div class="modal">
    <header class="header">
      <h3 class="header__title">{{ titleModal }}</h3>
    </header>

    <main class="main">
      <ul class="main__list">
        <li class="main__item" v-for="folder of mockFolders" :key="folder.id">
          <AppFolder :folder="folder"/>
        </li>
      </ul>
    </main>

    <footer class="footer">
      <div class="footer__button--wrapper">
        <button class="footer__button">Ок</button>
        <button class="footer__button" @click="closeModal">Закрыть</button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { Folder } from "./../type";
import { ref } from "vue";
import AppFolder from "./AppFolder.vue";

const props = defineProps<{
  titleModal: string;
  mockFolders: Folder[];
}>();

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();

const closeModal = () => {
  emit("closeModal");
};
</script>

<style scoped lang="scss">
.modal {
  width: 700px;
  min-height: 560px;
  border: 1px solid black;
  border-radius: 20px;
  margin: 100px auto 0 auto;
}

.header {
  &__title {
    font-size: 22px;
    text-align: center;
  }
}

.main {
  width: 600px;
  margin: 0 auto 30px auto;
  min-height: 400px;

  &__list {
    padding: 0;
  }

  &__item {
    list-style: none;
    margin-bottom: 50px;
  }
}

.footer {
  &__button--wrapper {
    width: 250px;
    margin: 0 auto 25px auto;
    display: flex;
    justify-content: space-between;
  }

  &__button {
    width: 120px;
    height: 30px;
    border-radius: 13px;
  }
}
</style>
