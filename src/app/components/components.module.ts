import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './Header/header.component';

import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [ HeaderComponent ],
  exports:[
    CommonModule,
    HeaderComponent
  ],
  imports:[
    MaterialModule,
    FormsModule,
  ]
})

export class ComponentsModules {}