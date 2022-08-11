import { Injectable, InjectionToken } from '@angular/core';
import { GenIdService } from './gen-id.service';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private generatorID: GenIdService) { }

  generate(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        characters.length));
    }
    return result;
  }

  getNewID() {
    return this.generatorID.genID();
  }
}

export const GeneratorToken = new InjectionToken<string>('generatedString');