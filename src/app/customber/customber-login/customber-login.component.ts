import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customber-login',
  templateUrl: './customber-login.component.html',
  styleUrls: ['./customber-login.component.css']
})
export class CustomberLoginComponent implements OnInit {

  hide=true
  constructor(
    private dilog:MatDialog
  ) { }

  ngOnInit(): void {
  }

}
