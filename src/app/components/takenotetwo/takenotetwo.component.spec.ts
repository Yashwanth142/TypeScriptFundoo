import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenotetwoComponent } from './takenotetwo.component';

describe('TakenotetwoComponent', () => {
  let component: TakenotetwoComponent;
  let fixture: ComponentFixture<TakenotetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenotetwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenotetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
