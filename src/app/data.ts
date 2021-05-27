import {Types} from "./Enums/Types";

export const FILES_STRUCTURE = [
  {
    name: 'Fruit',
    type: Types.folder,
    children: [
      {
        name: 'Apple',
        type: Types.file
      },
      {
        name: 'Banana',
        type: Types.file
      },
      {
        name: 'Fruit loops',
        type: Types.folder,
        children: [
          {
            name:'reewfwe',
            type:Types.file
          },
          {
            name:'awdawdwd',
            type:Types.file
          }
        ]
      }
    ]
  },
  {
    name: 'Vegetables',
    type: Types.folder,
    children: [
      {
        name: 'Green',
        type: Types.folder,
        children: [
          {
            name: 'Broccoli',
            type:Types.file
          },
          {
            name: 'Brussels',
            type:Types.file
          },
          {
            name: 'Brussels',
            type:Types.file
          },
        ]
      },
      {
        name: 'Orange',
        type:Types.folder,
        children: [
          {
            name: 'Pumpkins',
            type:Types.file
          },
          {
            name: 'Carrots',
            type:Types.file
          },
        ]
      },
      {
        name: 'Banana',
        type:Types.file
      }
    ]
  },
];
