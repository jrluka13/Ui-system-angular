import {Component} from '@angular/core';
import {ReadfFileService} from "./services/readfFile.service";
export interface objData{
  folderName:string,
  arrFileName:Array<string>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  arr:objData[]


  constructor(private readFileService: ReadfFileService ) {
    let obj = readFileService.readFile();
    // @ts-ignore
    this.arr = obj['default'];
    console.log(this.arr)
  }

}
