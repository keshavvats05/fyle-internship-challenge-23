import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  // private authToken = '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'
  // private authToken = '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'
  private authToken =
    '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';

  getUser(githubUsername: string) {
    const headers = new HttpHeaders({
      Authorization: `${this.authToken}`,
    });
    return this.httpClient.get(
      `https://api.github.com/users/${githubUsername}`,
      { headers }
    );
  }

  getRepoDetails(githubUsername: string, page: number, perPage: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());
    return this.httpClient.get(
      `https://api.github.com/users/${githubUsername}/repos?page=${page}`,
      { params }
    );
  }

  

  getRepoLanguages(languagesUrl: string) {
    const headers = new HttpHeaders({
      Authorization: `${this.authToken}`,
    });
    return this.httpClient.get(`${languagesUrl}`, { headers });
  }
}
