import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './Header/header.component';
import { FormsComponent } from './Forms/forms.component';

import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [ 
    HeaderComponent, 
    FormsComponent 
  ],
  exports:[
    CommonModule,
    HeaderComponent,
    FormsComponent
  ],
  imports:[
    MaterialModule,
    FormsModule,
  ]
})

export class ComponentsModules {}