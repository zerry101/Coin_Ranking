import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyComponent } from './crypto-currency.component';

describe('CryptoCurrencyComponent', () => {
  let component: CryptoCurrencyComponent;
  let fixture: ComponentFixture<CryptoCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
