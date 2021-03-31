import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { HrappliedjobsComponent } from './hrappliedjobs/hrappliedjobs.component';
import { HrhomeComponent } from './hrhome/hrhome.component';

const routes: Routes = [
  {path:'appliedJobs', component:AppliedjobsComponent},
  {path:'home',component:HomecomponentComponent},
  {path:'hr',component : HrhomeComponent},
  {path:'allAppliedJobs',component:HrappliedjobsComponent},
  {path:'admin',component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
