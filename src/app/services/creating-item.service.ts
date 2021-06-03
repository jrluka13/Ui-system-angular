import { Injectable } from '@angular/core';
import { ModalWindowService } from './modal-window.service';
import { Folder } from '../interfaces/folder';
import { FolderModel } from '../models/base-file-system';
import { FileModel } from '../models/base-file-system';

@Injectable({
  providedIn: 'root',
})
export class CreatingItemService {

  constructor(private modalWindowService: ModalWindowService) {
  }

  createFile(parent: Folder[] | undefined) {
    const message = 'Назовите файл';
    const name = this.modalWindowService.promptWithMessage(message);
    const newFile = new FileModel(name);

    parent?.push(newFile);
  }

  createFolder(parent: Folder[] | undefined) {
    const message = 'Назовите папку';
    const name = this.modalWindowService.promptWithMessage(message);
    const newFolder = new FolderModel(name);

    parent?.push(newFolder);
  }
}
