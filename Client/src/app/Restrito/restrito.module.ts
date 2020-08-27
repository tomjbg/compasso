import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RestritoRoutingModule } from './restrito-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmbedVideo } from 'ngx-embed-video';


import { CadServicosService } from './cad-servicos/cad-servicos.service';

import { RestritoNavbarComponent } from './restrito-navbar/restrito-navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { RestritoComponent } from './restrito.component';
import { CadBlogComponent } from '../Restrito/cad-blog/cad-blog.component';
import { CadServicosComponent } from './cad-servicos/cad-servicos.component';
import { RestritoFooterComponent } from './restrito-footer/restrito-footer.component';
import { CadHomeComponent } from './cad-home/cad-home.component';
import { CadPortifolioComponent } from './cad-portifolio/cad-portifolio.component';
import { CadPodcastsComponent } from './cad-podcasts/cad-podcasts.component';
import { CadAudiosComponent } from './cad-audios/cad-audios.component';
import { CadVideosComponent } from './cad-videos/cad-videos.component';
import { AnalyticsReportComponent } from './analytics-report/analytics-report.component';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RestritoRoutingModule,
    EmbedVideo.forRoot()
  ],
  declarations: [
    RestritoNavbarComponent,
    PrincipalComponent,
    RestritoComponent,
    CadBlogComponent,
    CadServicosComponent,
    RestritoFooterComponent,
    CadHomeComponent,
    CadPortifolioComponent,
    CadPodcastsComponent,
    CadAudiosComponent,
    CadVideosComponent,
    AnalyticsReportComponent
  ],
  providers: [
    CadServicosService
  ],
  bootstrap: [RestritoComponent]
})
export class RestritoModule { }
