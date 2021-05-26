import {Component} from '@angular/core';
export interface objData{
  name:string,
  children?:objData[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



}
