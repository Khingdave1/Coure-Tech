import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  @Output() hamClick: EventEmitter<any> = new EventEmitter();
  @Input() isMenuOpen: boolean = false;

  // Toggle Menu
  toggleMenu() {
    this.hamClick.emit();
  }

}
