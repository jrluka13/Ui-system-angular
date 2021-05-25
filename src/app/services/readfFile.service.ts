import { Injectable } from '@angular/core';

import {FILES_STRUCTURE} from "../data";
@Injectable({
  providedIn: 'root'
})
export class ReadfFileService {

  readFile(){

    return FILES_STRUCTURE
  }
}
