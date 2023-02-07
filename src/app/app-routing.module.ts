import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { CustomberDashboardComponent } from './customber/customber-dashboard/customber-dashboard.component';
import { CustomberHomeComponent } from './customber/customber-home/customber-home.component';
import { CustomberLoginComponent } from './customber/customber-login/customber-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopDashboardComponent } from './shop/shop-dashboard/shop-dashboard.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ShopComponent } from './shop/shop.component';
import { ShoploginComponent } from './shop/shoplogin/shoplogin.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'adminlogin',component: AdminloginComponent},
  
  {
  path: 'adminhome', component: AdminhomeComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
    ]
    },

    { path:'customber-login',component: CustomberLoginComponent},
    {
      path: 'customber-home',component:CustomberHomeComponent,
      children: [
        { path: '',component:CustomberDashboardComponent},
        { path: 'customber-dashboard',component: CustomberDashboardComponent}
      ]
    },
    { path:'shop-login',component:ShoploginComponent},
    {
       path: 'shop-home',component:ShopHomeComponent,
       children:[
        {path: '',component:ShopDashboardComponent},
        {path: 'shop-dashboard',component:ShopDashboardComponent}
       ]
      }
    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
