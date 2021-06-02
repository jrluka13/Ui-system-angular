import { FileSystemItemTypes } from '../enums/file-system-item-types';

export class FolderModel {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getFolder() {
    return {
      name: this.name,
      type: FileSystemItemTypes.folder,
      children: [],
    };
  }
}
