import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development"

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    return this.httpClient.get(
      `${environment.githubBaseUrl}/${githubUsername}`
    );
  }

  getRepoDetails(githubUsername: string, page: number, perPage: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());
    return this.httpClient.get(
      `${environment.githubBaseUrl}/${githubUsername}/repos?page=${page}`,
      { params }
    );
  }

  getRepoLanguages(languagesUrl: string) {
    return this.httpClient.get(`${languagesUrl}`);
  }
}
