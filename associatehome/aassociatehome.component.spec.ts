import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AassociatehomeComponent } from './aassociatehome.component';

describe('AassociatehomeComponent', () => {
  let component: AassociatehomeComponent;
  let fixture: ComponentFixture<AassociatehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AassociatehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AassociatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
