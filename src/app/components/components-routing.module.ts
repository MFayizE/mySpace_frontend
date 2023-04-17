import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
