import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateUserComponent } from './components/add-update-user/add-update-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomLayoutModule } from '../../layout/custom-layout/custom-layout.module';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [UserComponent, AddUpdateUserComponent, UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CustomLayoutModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
