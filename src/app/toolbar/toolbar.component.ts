import {Component, OnInit} from '@angular/core';
import {ReadfFileService} from "../services/readfFile.service";
import {objData} from "../app.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  arr!:objData[]


  constructor(private readFileService: ReadfFileService ) {
    this.arr = readFileService.readFile();
    console.log(this.arr)
  }

  ngOnInit(): void {
  }

}
