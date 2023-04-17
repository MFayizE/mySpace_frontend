import { NgModule } from '@angular/core';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    LayoutsRoutingModule,
    SharedModule,
     
  ]
})
export class LayoutsModule { }
