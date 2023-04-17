import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule
  ]
})
export class NewsModule { }
