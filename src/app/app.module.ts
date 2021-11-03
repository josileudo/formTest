import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { Routes, RouterModule } from '@angular/router';
import { ComponentsModules } from './components/components.module';

// const routes: Routes = [
//   {path: '', loadChildren: () => }
// ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
