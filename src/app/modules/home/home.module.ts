import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { AvatarModule } from 'ngx-avatar';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchUsernameComponent } from './components/search-username/search-username.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchUsernameComponent,
    UserDetailsComponent,
    UserReposComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AvatarModule,
    NgxPaginationModule,
  ],
})
export class HomeModule {}
