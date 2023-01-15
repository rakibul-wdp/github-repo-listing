import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchUsernameComponent } from './components/search-username/search-username.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: SearchUsernameComponent,
  },
  {
    path: 'user',
    component: UserDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
