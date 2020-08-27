import { Component, OnInit, AfterContentInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'comp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  constructor(private render: Renderer2) { }

  ngOnInit() {
    
  }

  ngAfterContentInit(): void {
    // this.preloader();
  }

  // preloader(): void {
  //   setTimeout(() => {
  //     $('#preloader').fadeOut('slow', () => { $(this).remove(); });
  //   }, 3000);
  // }



  reload(): void {
    window.location.reload();

  }





}
