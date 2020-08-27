import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'comp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private toastr: ToastrService) {
    
   }

  ngOnInit() {
  }

  onSuccess(titulo: string, message: string): void {
    this.toastr.success(message, titulo);
  }

  onError(titulo: string, message: string): void {
    this.toastr.error(message, titulo);
  }

}
