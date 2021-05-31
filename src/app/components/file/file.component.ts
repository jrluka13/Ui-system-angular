import { Component, Input } from '@angular/core';
import { Folder } from "../../interfaces/Folder";
import { FileSystemItemTypes } from "../../enums/FileSystemItemTypes";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  @Input() data!: Folder;

  imgFile: string = '../../assets/file.png';
  folder = FileSystemItemTypes.folder;

}
