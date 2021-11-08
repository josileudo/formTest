import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private isDark = true;

  constructor(){}

  ngOnInit(){}
  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }
  
  switchMode(isDarkMode: boolean) {
    this.isDark= isDarkMode;
  }
}
