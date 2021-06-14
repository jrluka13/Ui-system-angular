import { Folder } from '../../interfaces/folder';
import { FileSystemItemTypes } from '../../enums/file-system-item-types';

export const FolderMock: Folder = {
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
};
