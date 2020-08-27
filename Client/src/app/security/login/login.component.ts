import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { ContaService } from '../../services/conta.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Usuario } from '../usuarios/usuario.model';
import { Access } from './access.model';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';


@Component({
  selector: 'comp-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, AfterContentInit {

  frmLogin: FormGroup;
  accessData: Access;

  constructor(private fb: FormBuilder, private contaService: ContaService, private router: Router) { }


  ngOnInit() {
    this.frmLogin = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }
  ngAfterContentInit(): void {
  }

  login(): void {
    // console.log('login component');

    let user = {
      Username: this.frmLogin.value.username,
      Password: this.frmLogin.value.password
    };

    if (this.frmLogin.dirty && this.frmLogin.valid) {
      this.contaService.login(user.Username, user.Password).subscribe((res) => {
        this.saveToken(res);
        this.router.navigate(['/restrito']);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
    }

  }

  saveToken(res: any): void {
    // console.log(res);
    this.accessData = new Access();
    this.accessData.Authenticated = res.authenticated;
    this.accessData.Created = new Date(res.created);
    this.accessData.Expiration = new Date(res.expiration);
    this.accessData.Message = res.message;
    this.accessData.UserName = res.userName;

    localStorage.setItem('comp.access', JSON.stringify(this.accessData));
    localStorage.setItem('comp.token', res.accessToken);
  }


}


