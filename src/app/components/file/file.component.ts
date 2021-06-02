import { Component, Input } from '@angular/core';
import { File } from '../../interfaces/file';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() data!: File;
  imgFile: string = '../../assets/file.png';
}
