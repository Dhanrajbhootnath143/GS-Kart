import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'adminlogin',component: AdminloginComponent},
  
  {
  path: 'adminhome', component: AdminloginComponent,
    children: []
    },
    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
