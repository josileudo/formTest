import { ApplicationRef, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class ThemingService implements OnInit{
  themes = ["dark-theme", "light-theme"];
  theme = new BehaviorSubject("light-theme");

  constructor (
    private ref: ApplicationRef
  ){}
  
  themeFunction() {
    const darkModeOn = 
    window.matchMedia && 
    window.matchMedia("(prefers-color-scheme: dark)")
    .matches;
  
    if (darkModeOn) {
      this.theme.next("dark-theme");
    }
  
    window.matchMedia("(prefers-color-scheme: dark)")
      .addListener(e => {
        const turnOn = e.matches;
        this.theme.next(turnOn ? 'dark-theme' : 'light-theme');
  
        this.ref.tick();
    })
  }

  ngOnInit(){
    this.themeFunction();
  }
}

