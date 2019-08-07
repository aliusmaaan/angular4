import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MdSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashHomeComponent } from './dashboard/dash-home/dash-home.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { UsmanComponent } from './usman/usman.component';
import { NavsComponent } from './dashboard/navs/navs.component';
import { BoxsComponent } from './dashboard/boxs/boxs.component';
import { MainComponent } from './main/main.component';
import { ApiService } from './APIs/api.service';
import { Dir1Directive } from './directives/dir1.directive';
import { Dir2Directive } from './directives/dir2.directive';


const appRoutes: Routes = [
  { path: 'home', component: MainComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashHomeComponent, pathMatch: 'full' },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: 'home'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    UsmanComponent,
    MainComponent,
    Dir1Directive,
    Dir2Directive
  ],
  imports: [
    HttpModule,
    BrowserModule,
    DashboardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
