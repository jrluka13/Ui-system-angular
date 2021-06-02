import { Injectable } from '@angular/core';
import { ModalWindowService } from './modal-window.service';
import { File } from '../interfaces/file';
import { Folder } from '../interfaces/folder';

@Injectable({
  providedIn: 'root',
})
export class CreatingItemService {

  constructor(private modal: ModalWindowService) {
  }

  createFile(data: Folder[] | undefined) {
    let file: File = {
      name: this.modal.getName('Назовите файл'),
      type: 'file',
    };

    if (data)
      data.push(file);
  }

  createFolder(data: Folder[] | undefined) {
    let folder: Folder = {
      name: this.modal.getName('Назовите папку'),
      type: 'folder',
      children: [],
    };

    if (data)
      data.push(folder);
  }
}
