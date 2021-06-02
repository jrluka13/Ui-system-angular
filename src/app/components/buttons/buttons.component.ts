import { Component, Input } from '@angular/core';
import { Folder } from '../../interfaces/folder';
import { File } from '../../interfaces/file';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @Input() data!: Folder;
  imgFolderCreate: string = '../../assets/add_folder.png';
  imgFileCreate: string = '../../assets/add_file.png';

  constructor() {
  }

  createFile() {
    let mess = prompt('Назовите файл');

    if (mess !== null) {
      let file: File = {
        name: mess,
        type: 'file',
      };

      this.data.children?.push(file);
    }

  }

  createFolder() {
    let mess = prompt('Назовите папку');

    if (mess !== null) {
      let folder: Folder = {
        name: mess,
        type: 'folder',
        children: [],
      };

      this.data.children?.push(folder);
    }
  }
}
