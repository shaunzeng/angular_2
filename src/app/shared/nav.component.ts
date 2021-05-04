import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { LoginService } from './services/login.service';
import { LoginModalContent } from './login.component';

@Component({
  selector: 'app-nav',
  moduleId: module.id,
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(public loginService: LoginService, private modalService: NgbModal) {}

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn$.asObservable().pipe(distinctUntilChanged());
  }

  onLogin() {
    const modalRef = this.modalService.open(LoginModalContent);
    modalRef.componentInstance.name = 'Login';
  }

  onLogout() {
    this.loginService.logout().then(() => {
      alert('logged out');
    });
  }
}
