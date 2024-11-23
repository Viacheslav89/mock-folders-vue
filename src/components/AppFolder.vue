<template>
  <div class="folder">
    <div class="folder__wrapper">
      <div
        :class="['folder__triangle', { 'folder__triangle--down': !isOpen }]"
        v-if="folder.children.length"
        @click="toggleList"
      ></div>
      <p
        class="folder__text"
        :class="['folder__text', { 'folder__text--cheked': checkedFolder === folder.id }]"
        @click="toggleCheckedFolder(folder.id)"
      >
        {{ folder.name }}
      </p>
    </div>
    <ul
      v-if="folder.children"
      v-for="folderChild of folder.children"
      :key="folderChild.id"
      class="folder__list"
    >
      <li class="folder__item" v-if="isOpen">
        <AppFolder :folder="folderChild" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Folder } from "./../type";
import AppFolder from "./AppFolder.vue";
import { ref } from "vue";

const props = defineProps<{
  folder: Folder;
}>();

const isOpen = ref(true);

// const isCheckedFolder = ref<null | string>(null);
// const checkedFolder = ref([]);
const checkedFolder = ref<null | number>(null)

const toggleList = () => {
  isOpen.value = !isOpen.value;
};

const toggleCheckedFolder = (name: number | null) => {
  // isCheckedFolder.value = isCheckedFolder.value === name ? null : name;
  checkedFolder.value = name;
};
</script>

<style scoped lang="scss">
.folder {
  &__wrapper {
    display: flex;
    justify-content: left;
  }

  &__triangle {
    width: 0px;
    height: 0px;
    border-top: 9px solid black;
    border-right: 9px solid transparent;
    transform: rotate(225deg);
    margin-right: 10px;
    margin-top: 2px;
    cursor: pointer;
  }

  &__triangle--down {
    transform: rotate(135deg);
  }

  &__text {
    margin: 0;
    padding: 2px;
  }

  &__text:hover {
    background-color: rgb(227, 248, 241);
    cursor: pointer;
  }

  &__text--cheked {
    background-color: rgb(229, 145, 191);
  }

  &__list {
    margin-left: 30px;
    margin-top: 10px;
    margin: 0;
  }

  &__item {
    list-style: none;
    margin-top: 10px;
  }
}
</style>
