import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPresentationComponentComponent } from './github-presentation-component.component';

describe('GithubPresentationComponentComponent', () => {
  let component: GithubPresentationComponentComponent;
  let fixture: ComponentFixture<GithubPresentationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubPresentationComponentComponent]
    });
    fixture = TestBed.createComponent(GithubPresentationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
