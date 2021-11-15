import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';

@Component({
  selector: 'sap-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent {
  @Input()
  isDarkMode = true;
  
  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();
 
  onDarkModeSwitched({ checked } : MatSlideToggleChange){
    this.darkModeSwitched.emit(checked);
  }
}