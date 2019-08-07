import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavsComponent } from './navs/navs.component';
import { BoxsComponent } from './boxs/boxs.component';
import { DashHomeComponent } from './dash-home/dash-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavsComponent, BoxsComponent, DashHomeComponent],
  exports: [
    NavsComponent, BoxsComponent, DashHomeComponent
  ]
})
export class DashboardModule { }
