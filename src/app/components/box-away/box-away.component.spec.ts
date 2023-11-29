import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAwayComponent } from './box-away.component';

describe('BoxAwayComponent', () => {
  let component: BoxAwayComponent;
  let fixture: ComponentFixture<BoxAwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxAwayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
