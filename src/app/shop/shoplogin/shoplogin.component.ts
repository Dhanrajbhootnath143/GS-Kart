import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shoplogin',
  templateUrl: './shoplogin.component.html',
  styleUrls: ['./shoplogin.component.css']
})
export class ShoploginComponent implements OnInit {

  hide=true
  constructor(
    private dilog:MatDialog
  ) { }

  ngOnInit(): void {
  }

}
