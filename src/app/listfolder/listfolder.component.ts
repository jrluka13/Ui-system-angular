import {Component, Input, OnInit} from '@angular/core';
import {objData} from "../app.component";
@Component({
  selector: 'app-listfolder',
  templateUrl: './listfolder.component.html',
  styleUrls: ['./listfolder.component.scss']
})
export class ListfolderComponent implements OnInit {
  @Input() data!:objData
  imgFolder: string = '../../assets/folder.png'
  imgArrow: string = '../../assets/down-arrow.png'
  imgFile: string = '../../assets/file.png'
  isVisible:boolean = true;
  openFolder(){
    this.isVisible = !this.isVisible

  }


  ngOnInit(): void {
  }

}
