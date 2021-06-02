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
  isVisible: boolean = true;

  openFirstFolder() {
    this.isVisible = !this.isVisible;
    this.ToggleHandler.emit(this.isVisible);
  };

}
