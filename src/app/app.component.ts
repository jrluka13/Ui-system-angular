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

  arr!:objData[]


  constructor(private readFileService: ReadfFileService ) {
    this.arr = readFileService.readFile();
    console.log(this.arr)
  }

}
