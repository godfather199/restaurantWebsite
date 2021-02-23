import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClassComponent } from './class/class.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DemoComponent } from './demo/demo.component';
import { ProgramComponent } from './program/program.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'class', component: ClassComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'program', component: ProgramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
