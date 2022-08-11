import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConstantLiteralToken, Literal } from './services/constants.service';
import { GeneratorFactory } from './services/generator.factory';
import { GeneratorService, GeneratorToken } from './services/generator.service';
import { LocalStorageService, storageInstance } from './services/localStorage.service';


@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
    
  ],
  exports: [
  
  ],
  providers: [
    {
      provide: ConstantLiteralToken, useValue: Literal
    },
    {
      provide: GeneratorToken, useFactory: GeneratorFactory(16), deps: [GeneratorService] 
    },
    {
      provide: LocalStorageService, useValue: storageInstance
    },
  ]
})
export class CoreModule {}
