import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTableComponent } from './testing-table.component';

describe('TestingTableComponent', () => {
  let component: TestingTableComponent;
  let fixture: ComponentFixture<TestingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
