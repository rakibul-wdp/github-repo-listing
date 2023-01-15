import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  /**
   * get details of user using username
   * @param userName username of github
   * @returns user details
   */
  getUserDetails(userName: any): Observable<any> {
    return this.http.get(this.endpoint + userName);
  }

  /**
   * get user repository list using username & get list according to the page no and items per page
   * @param userName username of github
   * @param page page number
   * @param itemsPerPage items per page ( maximum is 100 )
   * @returns user repository list
   */
  getUserRepos(
    userName: any,
    page: number,
    itemsPerPage: number
  ): Observable<any> {
    return this.http.get(
      this.endpoint +
        userName +
        '/repos' +
        `?page=${page}&per_page=${itemsPerPage}`,
      { observe: 'response' }
    );
  }
}
