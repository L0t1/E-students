import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MesuesiComponent } from './mesuesi/mesuesi.component';
import { NxenesiComponent } from './nxenesi/nxenesi.component';

const routes: Routes = [
  {path: "",component: AppComponent},
  {path: "admin",component: AdminComponent},
  {path: "mesuesi",component: MesuesiComponent},
  {path: "nxenesi",component: NxenesiComponent},
  {path: "login",component: LoginComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
