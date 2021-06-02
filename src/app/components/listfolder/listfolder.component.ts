import { Component, Input } from '@angular/core';
import { Folder } from '../../interfaces/folder';
import { FileSystemItemTypes } from '../../enums/file-system-item-types';

@Component({
  selector: 'app-listfolder',
  templateUrl: './listfolder.component.html',
  styleUrls: ['./listfolder.component.scss'],
})
export class ListfolderComponent {
  @Input() data!: Folder[];

  folder = FileSystemItemTypes.folder;
  isVisible: boolean = true;

  changeVisible(ev: boolean) {
    this.isVisible = ev;
  };
}
