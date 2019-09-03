import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const MaterialComponents =  [
  MatIconModule, 
  MatListModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatInputModule, 
  MatSelectModule, 
  MatCheckboxModule,
  MatChipsModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
