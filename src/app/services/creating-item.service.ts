import { Injectable } from '@angular/core';
import { ModalWindowService } from './modal-window.service';
import { Folder } from '../interfaces/folder';
import { FolderModel } from '../models/folder';
import { FileModel } from '../models/file';

@Injectable({
  providedIn: 'root',
})
export class CreatingItemService {

  constructor(private modalWindowService: ModalWindowService) {
  }

  createFile(parent: Folder[] | undefined) {
    const message = 'Назовите файл';
    const name = this.modalWindowService.promptWithMessage(message);
    const file = new FileModel(name);

    if (parent)
      parent.push(file.getFile());
  }

  createFolder(parent: Folder[] | undefined) {
    const message = 'Назовите папку';
    const name = this.modalWindowService.promptWithMessage(message);
    const folder = new FolderModel(name);

    if (parent)
      parent.push(folder.getFolder());
  }
}
