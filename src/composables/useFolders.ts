import type { Folder } from "./../type";
import { ref } from "vue";

const focusedFolder = ref<null | number>(null);

export const useFolders = () => {
  const mockFolders: Folder[] = [
    {
      id: 1,
      name: "Папка 1",
      children: [
        { id: 2, name: "Папка 1.1", children: [] },
        {
          id: 3,
          name: "Папка 1.2",
          children: [
            {
              id: 4,
              name: "Папка 1.2.1",
              children: [{ id: 5, name: "Папка 1.2.1.1", children: [] }],
            },
          ],
        },
        { id: 6, name: "Папка 1.3", children: [] },
        { id: 7, name: "Папка 1.4", children: [] },
      ],
    },

    {
      id: 8,
      name: "Папка 2",
      children: [{ id: 9, name: "Папка 2.1", children: [] }],
    },

    {
      id: 10,
      name: "Папка 3",
      children: [
        {
          id: 11,
          name: "Папка 3.1",
          children: [
            {
              id: 12,
              name: "Папка 3.1.1",
              children: [],
            },
          ],
        },
      ],
    },
  ];

  return {
    mockFolders,
    focusedFolder,
  };
};
