import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerDesComponent } from './servicer-des.component';

describe('ServicerDesComponent', () => {
  let component: ServicerDesComponent;
  let fixture: ComponentFixture<ServicerDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicerDesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicerDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
