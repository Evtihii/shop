import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';


import { HiglightDirective } from './directives/higlight.directive';
import { ChoosedDirective } from './directives/choosed.directive';
import { OrderByPipePipe } from './pipes/order-by-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PaginatorModule,
    ToastModule,
    MenuModule,
    ToggleButtonModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    DividerModule,
    CheckboxModule,
    FormsModule
  ],
  declarations: [
    HiglightDirective,
    ChoosedDirective,
    OrderByPipePipe
  ],
  exports: [
    CardModule,
    PaginatorModule,
    ToastModule,
    MenuModule,
    ToggleButtonModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    HiglightDirective,
    ChoosedDirective,
    OrderByPipePipe,
    DividerModule,
    CheckboxModule,
    FormsModule
  ],
})
export class SharedModule { }
