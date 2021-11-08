import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'sap-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit {
  @Input()
  isDarkMode = true;
  
  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();
  
  constructor(){}
  
  ngOnInit(){}

  onDarkModeSwitched({ checked } : MatSlideToggleChange){
    this.darkModeSwitched.emit(checked);
  }
}