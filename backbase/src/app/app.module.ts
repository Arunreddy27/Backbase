import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { RecenttransComponent } from './transactioins/recenttrans/recenttrans.component';
import { TransferComponent } from './transactioins/transfer/transfer.component';
import { DataServiceService } from './transactioins/transfer/data-service.service';
import { HomeComponent } from './home/home.component';
import { NavigationComponent} from './navigation/navigation.component'


@NgModule({
  declarations: [
    AppComponent,
    RecenttransComponent,
    TransferComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"home", component: HomeComponent},
      {path:"recenttransactions", component: RecenttransComponent},
      {path:"transfer", component: TransferComponent},
      {path:"", redirectTo:"home", pathMatch: 'full'},
      {path:"**", redirectTo:"home"}
    ])
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
