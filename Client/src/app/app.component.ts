import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from '../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'angular-ga';
// import * as gtag from '../assets/js/gtag.js';

@Component({
  selector: 'comp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Compasso Coolab';
  constructor(private gaService: GoogleAnalyticsService,
    private route: Router) {

  }

  ngOnInit() {

    this.route.events.subscribe(event => {

      if (event instanceof NavigationEnd) {

        // console.log(`url: ${event.url} - urlAfterRedirects: ${event.urlAfterRedirects}`);

        this.gaService.event.emit({
          category: 'Rota',
          action: 'Navegação'
        });

        this.gaService.pageview.emit({
          page: event.url
        });

      }
    });


  }


}
