import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NxenesiComponent } from './nxenesi/nxenesi.component';
import { MesuesiComponent } from './mesuesi/mesuesi.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NxenesiComponent,
    MesuesiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
