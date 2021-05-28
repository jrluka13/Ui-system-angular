import {FileSystemItemTypes} from './enums/FileSystemItemTypes';

export const FILES_STRUCTURE = [
  {
    name: 'Fruit',
    type: FileSystemItemTypes.folder,
    children: [
      {
        name: 'Apple',
        type: FileSystemItemTypes.file,
      },
      {
        name: 'Banana',
        type: FileSystemItemTypes.file,
      },
      {
        name: 'Fruit loops',
        type: FileSystemItemTypes.folder,
        children: [
          {
            name: 'reewfwe',
            type: FileSystemItemTypes.file,
          },
          {
            name: 'awdawdwd',
            type: FileSystemItemTypes.file,
          },
        ],
      },
    ],
  },
  {
    name: 'Vegetables',
    type: FileSystemItemTypes.folder,
    children: [
      {
        name: 'Green',
        type: FileSystemItemTypes.folder,
        children: [
          {
            name: 'Broccoli',
            type: FileSystemItemTypes.file,
          },
          {
            name: 'Brussels',
            type: FileSystemItemTypes.file,
          },
          {
            name: 'Brussels',
            type: FileSystemItemTypes.file,
          },
        ],
      },
      {
        name: 'Orange',
        type: FileSystemItemTypes.folder,
        children: [
          {
            name: 'Pumpkins',
            type: FileSystemItemTypes.file,
          },
          {
            name: 'Carrots',
            type: FileSystemItemTypes.file,
          },
        ],
      },
      {
        name: 'Banana',
        type: FileSystemItemTypes.file,
      },
    ],
  },
];
