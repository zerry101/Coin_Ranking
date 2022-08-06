import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarsComponent } from './@theme/calendars/calendars.component';
import { CryptoCurrencyComponent } from './@theme/crypto-currency/crypto-currency.component';
import { ExchangesComponent } from './@theme/exchanges/exchanges.component';
import { ProductsComponent } from './@theme/products/products.component';
import { WatchlistComponent } from './@theme/watchlist/watchlist.component';

const routes: Routes = [
{
  path:'CryptoCurrency',
  component:CryptoCurrencyComponent
}
,
{
  path:'Exchanges',
  component:ExchangesComponent
},
{
  path:'Watchlist',
  component:WatchlistComponent
},
{
  path:'Calendars',
  component:CalendarsComponent
},
{
  path:'Products',
  component:ProductsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
