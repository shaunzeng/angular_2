import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './login.component.html',
})
export class LoginModalContent {
  @Input() name: string;

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(public loginService: LoginService, public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  private getUsername() {
    return this.loginForm.get('username').value;
  }

  private getPassword() {
    return this.loginForm.get('password').value;
  }

  login() {
    this.loginService.login(this.getUsername(), this.getPassword()).then(
      (data) => {
        this.activeModal.close('logged in');
      },
      (err) => {
        alert(err);
      }
    );
  }
}
