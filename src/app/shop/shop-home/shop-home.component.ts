import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  name: any;
  opened:boolean= true
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  constructor(
    private observe:BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.observe.observe(['(max-width:768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.close();
      }
    })
  }

}

