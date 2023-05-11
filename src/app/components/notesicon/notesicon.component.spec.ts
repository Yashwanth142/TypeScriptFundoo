import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesiconComponent } from './notesicon.component';

describe('NotesiconComponent', () => {
  let component: NotesiconComponent;
  let fixture: ComponentFixture<NotesiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
