import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTestComponent } from './advance-test.component';

describe('AdvanceTestComponent', () => {
  let component: AdvanceTestComponent;
  let fixture: ComponentFixture<AdvanceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
