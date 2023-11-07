import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { CategoriesListModule } from "./components/categories-list/categories-list.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    TasksTableComponent,
    CategoriesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
