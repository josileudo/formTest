import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private currentTheme = "light-mode";

  get isDarkMode(): boolean {
    return this.currentTheme === "dark-mode";
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ){}

  ngOnInit(): void{
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme)
  }
  
  switchMode(isDarkMode: boolean) {
    this.currentTheme = isDarkMode ? "dark-mode" : 'light-mode';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }
}