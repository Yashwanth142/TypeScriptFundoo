import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenotethreeComponent } from './takenotethree.component';

describe('TakenotethreeComponent', () => {
  let component: TakenotethreeComponent;
  let fixture: ComponentFixture<TakenotethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenotethreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenotethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
