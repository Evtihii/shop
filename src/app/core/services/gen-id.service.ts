import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenIdService {
  private id = 0;

  genID(): number {
      return this.id++;
  }
}
