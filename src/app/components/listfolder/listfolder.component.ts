import { Component, Input } from '@angular/core';
import { Folder } from '../../interfaces/Folder';
import { FileSystemItemTypes } from '../../enums/FileSystemItemTypes';

@Component({
  selector: 'app-listfolder',
  templateUrl: './listfolder.component.html',
  styleUrls: ['./listfolder.component.scss'],
})
export class ListfolderComponent {
  @Input() data!: Folder;

  folder = FileSystemItemTypes.folder;
  file = FileSystemItemTypes.file;
  imgFolder: string = '../../assets/folder.png';
  imgArrow: string = '../../assets/down-arrow.png';
  imgFile: string = '../../assets/file.png';
  isVisible: boolean = true;
  toggle: boolean = true;

  openFirstFolder() {
    this.isVisible = !this.isVisible;
  }
}
