import { Component } from '@angular/core';
import { ReadfFileService } from '../../services/readfFile.service';
import { Folder } from '../../interfaces/Folder';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  arr!: Folder[]

  constructor(private readFileService: ReadfFileService) {
    this.arr = readFileService.readFile();
  }

}
