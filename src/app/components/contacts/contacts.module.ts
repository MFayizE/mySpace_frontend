import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListContactsComponent,
    AddContactsComponent,
    EditContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactsModule { }
