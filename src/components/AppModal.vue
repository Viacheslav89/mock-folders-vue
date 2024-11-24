<template>
  <div class="modal">
    <header class="header">
      <h3 class="header__title">{{ titleModal }}</h3>
    </header>

    <main class="main">
      <ul class="main__list">
        <li class="main__item" v-for="folder of mockFolders" :key="folder.id">
          <AppFolder :folder="folder" />
        </li>
      </ul>
    </main>

    <footer class="footer">
      <div class="footer__button--wrapper">
        <button class="footer__button" @click="selectFolder(focusedFolder)">
          Ок
        </button>
        <button class="footer__button" @click="closeModal">Закрыть</button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { Folder } from "./../type";
import AppFolder from "./AppFolder.vue";
import { ref } from "vue";
import { useFolders } from "@/composables/useFolders";

const { focusedFolder } = useFolders();

defineProps<{
  titleModal: string;
  mockFolders: Folder[];
}>();

const emit = defineEmits<{
  (e: "closeModal"): void;
  (e: "selectFolder", focusedFolder: number | null): void;
}>();

const closeModal = () => {
  emit("closeModal");
};

const selectFolder = (focusedFolder: number | null) => {
  emit("selectFolder", focusedFolder);
};
</script>

<style scoped lang="scss">
.modal {
  width: 700px;
  min-height: 560px;
  border: 1px solid black;
  border-radius: 20px;
  margin: 60px auto 0 auto;
}

.header {
  &__title {
    font-size: 22px;
    text-align: center;
  }
}

.main {
  width: 600px;
  margin: 30px auto 30px auto;
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
    background-color: #d2d2d6;
  }
}

@media screen and (max-width: 570px) {
  .modal {
    width: 350px;

    .header {
      &__title {
        font-size: 20px;
      }
    }

    .main {
      width: 320px;
      font-size: 13px;
    }

    .footer {
      &__button--wrapper {
        width: 165px;
      }

      &__button {
        width: 80px;
        height: 28px;
        border-radius: 12px;
      }
    }
  }
}
</style>
