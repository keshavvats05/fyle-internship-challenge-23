import { Component, OnInit } from '@angular/core';
import { repoDetails } from 'src/app/Interfaces/repoDetails';
import { userData } from 'src/app/Interfaces/userData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-github-container-component',
  templateUrl: './github-container-component.component.html',
  styleUrls: ['./github-container-component.component.scss'],
})
export class GithubContainerComponentComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  userData!: userData;
  repos!: repoDetails[];
  getUserLoadingStatus!: string;
  getRepoLoadingStatus!: string;
  errorMessage!: string;

  ngOnInit(): void {}

  getUserDetails(userName: string) {
    this.getUserLoadingStatus = 'loading';
    this.apiService.getUser(userName).subscribe((response: any) => {
      console.log(response);
      this.userData = response;
      this.getUserLoadingStatus = 'loaded';
    },
    (error) => {
      console.error('Error:', error);
      console.log(error.error.message)
      if (error.error.message === 'Not Found'){
        this.errorMessage = 'User not found!'
      }
      else {
        this.errorMessage = 'Something went wrong!'
      }
      this.getUserLoadingStatus = 'error';
    }

    );
  }
  getRepoDetails({
    userName,
    currentPage,
    perPage,
  }: {
    userName: string;
    currentPage: number;
    perPage: number;
  }) {
    this.getRepoLoadingStatus = 'loading';
    this.apiService
      .getRepoDetails(userName, currentPage, perPage)
      .subscribe((response: any) => {
        console.log(response);
        this.repos = response;
        this.repos.forEach((repo) => {
          this.apiService
            .getRepoLanguages(repo.languages_url)
            .subscribe((languages: any) => {
              repo.languages = Object.keys(languages);
            });
        });
        this.getRepoLoadingStatus = 'loaded';
      }
      ,
    (error) => {
      console.error('Error:', error);
      this.getRepoLoadingStatus = 'error'
    }
      );
  }
  getTotalItems() {}
}
