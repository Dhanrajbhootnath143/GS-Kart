import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CustomberComponent } from './customber/customber.component';
import { CustomberLoginComponent } from './customber/customber-login/customber-login.component';
import { CustomberHomeComponent } from './customber/customber-home/customber-home.component';
import { CustomberSidebarComponent } from './customber/customber-sidebar/customber-sidebar.component';
import { CustomberDashboardComponent } from './customber/customber-dashboard/customber-dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { ShoploginComponent } from './shop/shoplogin/shoplogin.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ShopDashboardComponent } from './shop/shop-dashboard/shop-dashboard.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    CustomberComponent,
    CustomberLoginComponent,
    CustomberHomeComponent,
    CustomberSidebarComponent,
    CustomberDashboardComponent,
    ShopComponent,
    ShoploginComponent,
    ShopHomeComponent,
    ShopDashboardComponent,
    ShopSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatSelectModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
