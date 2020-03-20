import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGXInformationComponent } from './cgxinformation.component';

describe('CGXInformationComponent', () => {
  let component: CGXInformationComponent;
  let fixture: ComponentFixture<CGXInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGXInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGXInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
