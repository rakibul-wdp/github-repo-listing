import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UserService } from '@app/shared/services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent implements OnInit, OnDestroy {
  @Input() searchedUserName: any;

  subscription: Subscription = new Subscription();
  userRepoList: Array<any> = [];

  // For Pagination
  collection: any;
  activePage: number = 0;
  itemsPerPage: number = 6;
  totalItems: any;

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getRepos(this.searchedUserName, this.activePage, this.itemsPerPage);
  }

  /**
   * get repository list
   * @param userName username
   * @param page page number
   * @param itemsPerPage items to be shown per page
   */
  getRepos(userName: string, page: number, itemsPerPage: number) {
    this.subscription.add(
      this.userService
        .getUserRepos(userName, page, itemsPerPage)
        .subscribe((response) => {
          const maxCount = this.getTotalRepo(response);
          this.userRepoList = [...response.body];
          this.collection = [...response.body];
          this.totalItems = maxCount * itemsPerPage;
          this.cd.markForCheck();
        })
    );
  }

  /**
   * get the next / previous page when pagination is clicked
   * @param page page number
   */
  getPage(page: any) {
    this.subscription.add(
      this.userService
        .getUserRepos(this.searchedUserName, page, this.itemsPerPage)
        .subscribe((response) => {
          const maxCount = this.getTotalRepo(response);
          this.userRepoList = [...response.body];
          this.collection = [...response.body];
          this.totalItems = maxCount * this.itemsPerPage;
          this.cd.markForCheck();
        })
    );
  }

  /**
   * getting total repo count from response header link
   * @param response response
   * @returns total repo count
   */
  getTotalRepo(response: any) {
    const headers = response.headers.get('link');
    let maxCount = 0;
    if (headers) {
      const links = headers.split('?');
      const subLinks = links[2].split('=');
      maxCount = +subLinks[1].split('&')[0];
    }
    return maxCount;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
