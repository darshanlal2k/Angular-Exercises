import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecordsDetailsComponent } from './user-records-details.component';

describe('UserRecordsDetailsComponent', () => {
  let component: UserRecordsDetailsComponent;
  let fixture: ComponentFixture<UserRecordsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecordsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecordsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
