import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContBlackComponent } from './cont-black.component';

describe('ContBlackComponent', () => {
  let component: ContBlackComponent;
  let fixture: ComponentFixture<ContBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContBlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
