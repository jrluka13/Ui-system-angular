import { Component, Input } from '@angular/core';
import { Folder } from '../../interfaces/folder';
import { FileSystemItemTypes } from '../../enums/file-system-item-types';

@Component({
  selector: 'app-intermediate-layer',
  templateUrl: './determining-file-type.html',
  styleUrls: ['./determining-file-type.component.scss'],
})
export class IntermediateLayerComponent {
  @Input() data!: Folder;
  folder = FileSystemItemTypes.folder;
  file = FileSystemItemTypes.file;

}
