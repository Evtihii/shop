import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConstantLiteralToken, Literal } from './services/constants.service';
import { GeneratorFactory } from './services/generator.factory';
import { GeneratorService, GeneratorToken } from './services/generator.service';


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
  ]
})
export class CoreModule {}
