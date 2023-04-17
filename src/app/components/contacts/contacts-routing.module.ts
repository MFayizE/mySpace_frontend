import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';

const routes: Routes = [
  {
    path: '',
    component:ListContactsComponent
  },
  {
    path: 'add',
    component:AddContactsComponent
  },
  {
    path: 'edit/:',
    component:EditContactsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
