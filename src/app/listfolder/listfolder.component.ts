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
  toggle:boolean = true;
  openFirstFolder(){
    this.isVisible = !this.isVisible

  }

  openFolder(arrow:any){
    this.toggle = !this.toggle
    if(arrow.style.transform!='rotate(270deg)'){
      arrow.style.transform = 'rotate(270deg)'
    }else{
      arrow.style.transform = 'rotate(0deg)'
    }
    console.log(arrow.style)
  }
  ngOnInit(): void {
  }

}
