import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalWindowService {
  getName(str: string) {
    let name = prompt(str);

    return name !== null ? name : '';
  }
}
