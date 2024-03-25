import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUpdateUserComponent } from './components/add-update-user/add-update-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'add-update-user',
    component: AddUpdateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
