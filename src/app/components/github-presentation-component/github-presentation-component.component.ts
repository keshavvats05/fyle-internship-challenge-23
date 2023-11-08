import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { repoDetails } from 'src/app/Interfaces/repoDetails';
import { userData } from 'src/app/Interfaces/userData';

@Component({
  selector: 'app-github-presentation-component',
  templateUrl: './github-presentation-component.component.html',
  styleUrls: ['./github-presentation-component.component.scss'],
})
export class GithubPresentationComponentComponent implements OnInit {
  @Input() userData!: userData;
  @Input() repos!: repoDetails[];
  @Input() getUserLoadingStatus!: string;
  @Input() getRepoLoadingStatus!: string;
  @Input() errorMessage!: string
  postForm!: FormGroup;
  @Output() getUserData = new EventEmitter<any>();
  @Output() getPaginatedRepos = new EventEmitter<{
    userName: string;
    currentPage: number;
    perPage: number;
  }>();
  currentPage = 1;
  perPage = 5;
  totalPages!: number;

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.postForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
    });
  }
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.userData?.public_repos / this.perPage);
  }
  onPageChange(newPage: number) {
    this.calculateTotalPages();
    console.log(this.totalPages);
    console.log(this.currentPage);
    this.currentPage = newPage;
    if (this.totalPages >= this.currentPage) {
      this.getPaginatedRepos.emit({
        userName: this.postForm.value.userName,
        currentPage: this.currentPage,
        perPage: this.perPage,
      });
    }
  }
  onSubmit() {
    if (this.postForm.invalid){
      return
    }
    this.getUserData.emit(this.postForm.value.userName);
    this.getPaginatedRepos.emit({
      userName: this.postForm.value.userName,
      currentPage: this.currentPage,
      perPage: this.perPage,
    });
    this.postForm.reset()
  }
  onClose(){
    this.getUserLoadingStatus = ''
    }
}
