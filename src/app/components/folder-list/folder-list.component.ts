import { Component, Input } from '@angular/core';
import { Folder } from '../../interfaces/folder';
import { FileSystemItemTypes } from '../../enums/file-system-item-types';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss'],
})
export class FolderListComponent {
  @Input() data!: Folder[];
  folder = FileSystemItemTypes.folder;
  isOpened: boolean = true;

  changeVisible(ev: boolean) {
    this.isOpened = ev;
  };
}
