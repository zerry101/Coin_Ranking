import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAlertModule,
  NbBadgeModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbStepperModule,
  NbTagModule,
  NbRadioModule,
  NbFormFieldModule,
  NbThemeModule,
  NbButtonModule,
  NbUserModule,
  NbDialogModule,
  NbSearchModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbTooltipModule,
  NbLayoutModule,
  NbToastrModule,

} from '@nebular/theme';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { ProductsComponent } from './products/products.component';
import {RouterModule} from '@angular/router';
import { ETHComponent } from './crypto-currency/eth/eth.component';


// import { NavbarComponent } from './navbar/navbar.component';

const THEME_MODULE = [
  NbCardModule,
  NbStepperModule,
  NbInputModule,
  NbSidebarModule,
  NbMenuModule,
  NbTagModule,
  NbIconModule,
  NbListModule,
  NbAlertModule,
  NbBadgeModule,
  NbRadioModule,
  NbFormFieldModule,
  NbThemeModule,
  NbButtonModule,
  NbUserModule,
  NbDialogModule,
  NbSearchModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbTooltipModule,
  NbLayoutModule,
  NbToastrModule
];

@NgModule({
  declarations: [


    CryptoCurrencyComponent,
         ExchangesComponent,
         WatchlistComponent,
         CalendarsComponent,
         ProductsComponent,
         ETHComponent,

  ],
  imports: [CommonModule, THEME_MODULE,RouterModule],
  exports: [THEME_MODULE],
})
export class ThemeModule {}
