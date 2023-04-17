import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
