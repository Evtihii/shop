import { Component, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
