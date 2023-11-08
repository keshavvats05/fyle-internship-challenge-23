import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubContainerComponentComponent } from './github-container-component.component';

describe('GithubContainerComponentComponent', () => {
  let component: GithubContainerComponentComponent;
  let fixture: ComponentFixture<GithubContainerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubContainerComponentComponent]
    });
    fixture = TestBed.createComponent(GithubContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
