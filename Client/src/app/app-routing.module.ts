import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { BlogComponent } from './blog/blog.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { AuthService } from './security/auth.service';
import { CompassocoolabComponent } from './compassocoolab/compassocoolab.component';
import { IdentidadeComponent } from './identidade/identidade.component';
import { BrandingComponent } from './servicos/branding/branding.component';
import { LivemarketingComponent } from './servicos/livemarketing/livemarketing.component';
import { EducacaoComponent } from './servicos/educacao/educacao.component';
import { MidiaComponent } from './servicos/midia/midia.component';
import { ConsultoriaComponent } from './servicos/consultoria/consultoria.component';
import { OutsourcingComponent } from './servicos/outsourcing/outsourcing.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'compassocoolab', component: CompassocoolabComponent},
  { path: 'identidade', component: IdentidadeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'fazemos', component: ServicosComponent, children: [
    { path: '', component: BrandingComponent},
    { path: 'livemarketing', component: LivemarketingComponent},
    { path: 'educacao', component: EducacaoComponent},
    { path: 'midia', component: MidiaComponent},
    { path: 'consultoria', component: ConsultoriaComponent},
    { path: 'outsourcing', component: OutsourcingComponent},
    { path: '**', redirectTo: ''}
  ]},
  { path: 'portifolio', component: PortifolioComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'restrito', canActivate: [AuthService], loadChildren: './Restrito/restrito.module#RestritoModule'},
  { path: '**', redirectTo: ''}

];
// { path: 'restrito', loadChildren: './Restrito/restrito.module#RestritoModule'},


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
