import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshanLalComponent } from './darshan-lal.component';

describe('DarshanLalComponent', () => {
  let component: DarshanLalComponent;
  let fixture: ComponentFixture<DarshanLalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshanLalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshanLalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
