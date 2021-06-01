import { Injectable } from '@angular/core';
import { FILES_STRUCTURE } from '../data';

@Injectable({
  providedIn: 'root',
})
export class FilesStructureService {

  getFilesStructure() {

    return FILES_STRUCTURE;
  }
}
