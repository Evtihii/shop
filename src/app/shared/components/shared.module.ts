import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';

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
    TableModule
  ],
  declarations: [],
  exports: [
    CardModule,
    PaginatorModule,
    ToastModule,
    MenuModule,
    ToggleButtonModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule
  ],
})
export class SharedModule {}
