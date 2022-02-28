import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  listDragons() {
    this.isMenuOpen = false;
    this.router.navigateByUrl('/dragons');
  }

  addDragon():void {
    this.isMenuOpen = false;
    this.router.navigateByUrl('/dragons/add');
  }

  logOut():void {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }

  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
