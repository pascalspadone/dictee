import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicteeComponent } from './dictee.component';

describe('DicteeComponent', () => {
  let component: DicteeComponent;
  let fixture: ComponentFixture<DicteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
