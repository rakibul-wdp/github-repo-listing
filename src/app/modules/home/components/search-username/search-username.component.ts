import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/shared/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-username',
  templateUrl: './search-username.component.html',
  styleUrls: ['./search-username.component.scss'],
})
export class SearchUsernameComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  searchedUserName: string = '';

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * check if userName is present or not
   */
  checkIfUserExists() {
    if (this.searchedUserName && this.searchedUserName.length) {
      this.getUser(this.searchedUserName);
    } else {
      this.toastr.error('Please enter username');
    }
  }

  /**
   * get user details
   * @param userName username
   */
  getUser(userName: string) {
    this.subscription.add(
      this.userService.getUserDetails(userName).subscribe((response) => {
        if (response) {
          this.router.navigate(['home/user'], {
            queryParams: { username: this.searchedUserName },
          });
        } else {
          this.toastr.error('username doesnot exists');
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
