import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitwareComponent } from './bitware.component';

describe('BitwareComponent', () => {
  let component: BitwareComponent;
  let fixture: ComponentFixture<BitwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
