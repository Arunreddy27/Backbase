import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenttransComponent } from './recenttrans.component';

describe('RecenttransComponent', () => {
  let component: RecenttransComponent;
  let fixture: ComponentFixture<RecenttransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecenttransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenttransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
