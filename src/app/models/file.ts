import { FileSystemItemTypes } from '../enums/file-system-item-types';

export class FileModel {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getFile() {
    return {
      name: this.name,
      type: FileSystemItemTypes.file,
    };
  }
}
