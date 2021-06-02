import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Folder } from '../../interfaces/folder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent {

  @Output() ToggleHandler: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data!: Folder;

  imgFolder: string = '../../assets/folder.png';
  imgArrow: string = '../../assets/down-arrow.png';
  isOpened: boolean = false;

  openFirstFolder() {
    this.isOpened = !this.isOpened;
    this.ToggleHandler.emit(this.isOpened);
  };

}
