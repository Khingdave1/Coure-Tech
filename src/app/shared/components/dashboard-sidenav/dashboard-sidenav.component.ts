import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent {

  @Input() navLinks: any;
  @Output() hamClick: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  // Close menu
  closeMenu() {
    this.hamClick.emit();
  }

  // Log out
  logOut() {
    this.router.navigate(['/login'])
  }

}
