import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list.component';



@NgModule({
  declarations: [
    CategoriesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriesListComponent
  ]
})
export class CategoriesListModule { }
