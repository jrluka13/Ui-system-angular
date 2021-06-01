import { Component } from '@angular/core';
import { FilesStructureService } from '../../services/files-structure-service';
import { Folder } from '../../interfaces/folder';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar-component.html',
  styleUrls: ['./toolbar-component.scss'],
})
export class ToolbarComponent {
  filesStructure!: Folder[];

  constructor(private filesStructureService: FilesStructureService) {
    this.filesStructure = filesStructureService.getFilesStructure();
  }
}
