import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customber-sidebar',
  templateUrl: './customber-sidebar.component.html',
  styleUrls: ['./customber-sidebar.component.css']
})
export class CustomberSidebarComponent implements OnInit {
  setting: any
  action_icon3: boolean = false
  action_icon4: boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  setting_dropdown() {
    this.setting = document.getElementById("dropdown_setting")
    if (this.setting.style.display != "block") {
      this.setting.style.display = "block";
      this.action_icon3 = true
      this.action_icon4 = false

    } else {
      this.setting.style.display = "none";
      this.action_icon3 = false
      this.action_icon4 = true
    }
  }
}

