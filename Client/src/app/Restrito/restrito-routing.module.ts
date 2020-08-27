import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CadBlogComponent } from './cad-blog/cad-blog.component';
import { RestritoComponent } from './restrito.component';
import { CadServicosComponent } from './cad-servicos/cad-servicos.component';
import { CadHomeComponent } from './cad-home/cad-home.component';
import {  CadPortifolioComponent } from './cad-portifolio/cad-portifolio.component';
import {  CadPodcastsComponent } from './cad-podcasts/cad-podcasts.component';
import {  CadAudiosComponent } from './cad-audios/cad-audios.component';
import { CadVideosComponent } from './cad-videos/cad-videos.component';
import { AnalyticsReportComponent } from './analytics-report/analytics-report.component';

const routes: Routes = [
  { path: '', component: RestritoComponent,
    children: [
      { path: '', component: PrincipalComponent },
      { path: 'cadhome', component: CadHomeComponent },
      { path: 'cadservicos', component: CadServicosComponent},
      { path: 'cadportifolio', component: CadPortifolioComponent},
      { path: 'cadpodcasts', component: CadPodcastsComponent},
      { path: 'cadblog', component: CadBlogComponent},
      { path: 'cadaudios', component: CadAudiosComponent},
      { path: 'cadvideos', component: CadVideosComponent },
      { path: 'dados', component: AnalyticsReportComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestritoRoutingModule { }
