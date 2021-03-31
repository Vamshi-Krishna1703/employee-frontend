import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { CusnavbarComponent } from './cusnavbar/cusnavbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HrhomeComponent } from './hrhome/hrhome.component';
import { HrappliedjobsComponent } from './hrappliedjobs/hrappliedjobs.component';
import { HrresultComponent } from './hrresult/hrresult.component';
import { HrnavbarComponent } from './hrnavbar/hrnavbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppliedjobsComponent,
    CusnavbarComponent,
    HomecomponentComponent,
    AdminhomeComponent,
    HrhomeComponent,
    HrappliedjobsComponent,
    HrresultComponent,
    HrnavbarComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
