import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
// import { EmbedVideo } from 'ngx-embed-video';

import { GoogleAnalyticsModule, GA_TOKEN } from 'angular-ga';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { RecuperarSenhaComponent } from './security/recuperar-senha/recuperar-senha.component';
import { UsuariosComponent } from './security/usuarios/usuarios.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { SobreComponent } from './sobre/sobre.component';
import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';

import { FooterBasicComponent } from './Shared/footer-basic/footer-basic.component';
import { PortifolioDetalheComponent } from './portifolio/portifolio-detalhe/portifolio-detalhe.component';
import { BlogDetalheComponent } from './blog/blog-detalhe/blog-detalhe.component';
import { Token } from './security/login/token.model';
import { CompassocoolabComponent } from './compassocoolab/compassocoolab.component';
import { IdentidadeComponent } from './identidade/identidade.component';
import { BrandingComponent } from './servicos/branding/branding.component';
import { LivemarketingComponent } from './servicos/livemarketing/livemarketing.component';
import { EducacaoComponent } from './servicos/educacao/educacao.component';
import { MidiaComponent } from './servicos/midia/midia.component';
import { ConsultoriaComponent } from './servicos/consultoria/consultoria.component';
import { OutsourcingComponent } from './servicos/outsourcing/outsourcing.component';
// import { NgxResponsiveEmbedComponent } from 'ngx-responsive-embed';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RecuperarSenhaComponent,
    UsuariosComponent,
    ServicosComponent,
    PortifolioComponent,
    SobreComponent,
    BlogComponent,
    ContatoComponent,
    FooterBasicComponent,
    PortifolioDetalheComponent,
    BlogDetalheComponent,
    CompassocoolabComponent,
    IdentidadeComponent,
    BrandingComponent,
    LivemarketingComponent,
    EducacaoComponent,
    MidiaComponent,
    ConsultoriaComponent,
    OutsourcingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleAnalyticsModule.forRoot(),
    ToastrModule.forRoot({
      progressBar: true
    }),
    MDBBootstrapModule.forRoot(),
    
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('comp.token');
        }
      }
    })
  ],
  providers: [
    { provide: GA_TOKEN, useValue: 'UA-125365244-1'}
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
