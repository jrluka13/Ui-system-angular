import { Injectable } from '@angular/core';
import { FILES_STRUCTURE } from '../data';
import { Folder } from '../interfaces/folder';

@Injectable({
  providedIn: 'root',
})
export class FilesStructureService {

  getFilesStructure(): Folder[] {
    return FILES_STRUCTURE;
  }
}
