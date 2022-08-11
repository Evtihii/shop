import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ConstantLiteral } from 'src/app/core/models/constant.model';
import { ConstantLiteralToken } from 'src/app/core/services/constants.service';
import { GeneratorToken } from 'src/app/core/services/generator.service';
import { LocalStorageService, LocalStorageToken } from 'src/app/core/services/localStorage.service';
import { Category } from './config';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name!: string;
  description!: string;
  price!: number;
  category!: Category;
  isAvailable!: boolean;
  
  constructor(
    @Optional() @Inject(ConstantLiteralToken) private constant: ConstantLiteral,
    @Optional() @Inject(GeneratorToken) private generator: string,
    @Optional() @Inject(LocalStorageToken) private localS: LocalStorageService
  ) { 
  
  }

  ngOnInit(): void {
  }

}
