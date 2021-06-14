import { Component, Input } from '@angular/core';
import { Folder } from '../../interfaces/folder';
import { FileSystemItemTypes } from '../../enums/file-system-item-types';

@Component({
  selector: 'app-item-types-entities',
  templateUrl: './item-types-entities.html',
})
export class ItemTypesEntitiesComponent {
  @Input() data!: Folder;
  folder = FileSystemItemTypes.folder;
  file = FileSystemItemTypes.file;
}
