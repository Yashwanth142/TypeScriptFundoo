import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenoteoneComponent } from './takenoteone.component';

describe('TakenoteoneComponent', () => {
  let component: TakenoteoneComponent;
  let fixture: ComponentFixture<TakenoteoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenoteoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenoteoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
