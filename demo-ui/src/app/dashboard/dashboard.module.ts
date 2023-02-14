import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
