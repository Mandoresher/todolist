import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [CategoriesListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  exports: [CategoriesListComponent],
})
export class CategoriesListModule {}
