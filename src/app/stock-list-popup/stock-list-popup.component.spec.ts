import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListPopupComponent } from './stock-list-popup.component';

describe('StockListPopupComponent', () => {
  let component: StockListPopupComponent;
  let fixture: ComponentFixture<StockListPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockListPopupComponent]
    });
    fixture = TestBed.createComponent(StockListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
