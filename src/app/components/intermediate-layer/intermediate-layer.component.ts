import { Component, Input } from '@angular/core';
import { Folder } from '../../interfaces/folder';
import { FileSystemItemTypes } from '../../enums/file-system-item-types';

@Component({
  selector: 'app-intermediate-layer',
  templateUrl: './intermediate-layer.component.html',
  styleUrls: ['./intermediate-layer.component.scss'],
})
export class IntermediateLayerComponent {
  @Input() isVisible!: boolean;
  @Input() data!: Folder;
  folder = FileSystemItemTypes.folder;
  file = FileSystemItemTypes.file;

}
