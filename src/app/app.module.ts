import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClassComponent } from './class/class.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DemoComponent } from './demo/demo.component';
import { ProgramComponent } from './program/program.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ClassComponent,
    ContactComponent,
    ScheduleComponent,
    DemoComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
