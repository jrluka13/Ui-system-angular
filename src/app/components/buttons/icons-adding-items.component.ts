import { Component, Input } from '@angular/core';
import { Folder } from '../../interfaces/folder';
import { CreatingItemService } from '../../services/creating-item.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './icons-adding-items.component.html',
  styleUrls: ['./icons-adding-items.component.scss'],
})
export class ButtonsComponent {
  @Input() data!: Folder;
  imgFolderCreate: string = '../../assets/add_folder.png';
  imgFileCreate: string = '../../assets/add_file.png';

  constructor(private creating_item: CreatingItemService) {
  }

  addFile() {
    this.creating_item.createFile(this.data.children);
  }

  addFolder() {
    this.creating_item.createFolder(this.data.children);
  }
}
