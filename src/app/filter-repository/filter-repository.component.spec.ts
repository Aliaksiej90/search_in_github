import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRepositoryComponent } from './filter-repository.component';

describe('FilterRepositoryComponent', () => {
  let component: FilterRepositoryComponent;
  let fixture: ComponentFixture<FilterRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRepositoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
