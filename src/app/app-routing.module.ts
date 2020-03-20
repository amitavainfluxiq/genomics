import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CGXInformationComponent } from './cgxinformation/cgxinformation.component';

const routes: Routes = [

  {path:'', component: HomeComponent}, 
  {path:'CGXInformation', component: CGXInformationComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
