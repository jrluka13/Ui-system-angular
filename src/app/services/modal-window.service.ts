import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalWindowService {
  promptWithMessage(str: string) {
    let name = prompt(str);

    return name !== null ? name : '';
  }
}
