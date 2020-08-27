import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContaService } from '../../services/conta.service';
import { Router } from '@angular/router';
import { Access } from '../../security/login/access.model';

@Component({
  selector: 'comp-restrito-navbar',
  templateUrl: './restrito-navbar.component.html',
  styleUrls: ['./restrito-navbar.component.scss']
})
export class RestritoNavbarComponent implements OnInit, AfterViewInit {
  

  public accessData: Access;
  username: string = '';

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit() {
    // let access = localStorage.getItem('comp.access');
    // if (access !== undefined) {
    //   Object.assign(this.accessData, access);
    // }
    let access = localStorage.getItem('comp.access');
    this.username = JSON.parse(access).UserName;
  }
  ngAfterViewInit(): void {
    // let access = localStorage.getItem('comp.access');
    // this.username = JSON.parse(access).UserName;
  }


  logout(): void {
    if (this.contaService.logout()) {
      document.location.reload();
    }
  }

}
