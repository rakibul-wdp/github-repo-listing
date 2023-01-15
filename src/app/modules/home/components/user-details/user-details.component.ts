import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/shared/services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  searchedUserName: string = '';
  userDetails: any;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getQueryParams();
  }

  /**
   * get query params
   */
  getQueryParams() {
    this.subscription.add(
      this.activatedRoute.queryParams.subscribe((params) => {
        this.searchedUserName = params?.username;
        this.getUser(params?.username);
      })
    );
  }

  /**
   * get user details
   * @param userName username
   */
  getUser(userName: string) {
    this.subscription.add(
      this.userService.getUserDetails(userName).subscribe((response) => {
        this.userDetails = { ...response };
        this.cd.markForCheck();
      })
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
