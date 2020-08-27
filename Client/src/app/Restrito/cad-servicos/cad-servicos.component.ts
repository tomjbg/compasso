import { Component, OnInit, AfterContentInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CadServicosService } from './cad-servicos.service';
import { CadastraServicoViewModel } from './cad-servicosVM/cadastra-servico-view-model';
import { VantagemViewModel } from './cad-servicosVM/vantagem-view-model';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'comp-cad-servicos',
  templateUrl: './cad-servicos.component.html',
  styleUrls: ['./cad-servicos.component.scss']
})
export class CadServicosComponent implements OnInit, AfterContentInit {

  frmCadServicos: FormGroup;
  fileupload: File;

  ServicoVM: CadastraServicoViewModel = new CadastraServicoViewModel();
  ServicosVM: CadastraServicoViewModel[];
  Servicos: [{}];
  VideoPreviewUrl: any;
  ImagePreview: any;

  constructor(private cadServicos: CadServicosService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private hostElement: ElementRef,
    private domSanitizer: DomSanitizer,
    private embedService: EmbedVideoService) {
  }

  ngOnInit() {

    this.frmCadServicos = this.fb.group({
      titulo: this.fb.control(''),
      urlvideo: this.fb.control(''),
      imagem: this.fb.control(''),
      descricaocurta: this.fb.control(''),
      descricaolonga: this.fb.control('')
    });

    this.getServicos();

  }

  ngAfterContentInit(): void {
  }

  postServicos(servico?: CadastraServicoViewModel): void {

    if (this.ServicoVM.id === null || this.ServicoVM.id === undefined) {

      this.ServicoVM.titulo = this.frmCadServicos.value.titulo;
      this.ServicoVM.descricaoCurta = this.frmCadServicos.value.descricaocurta;
      this.ServicoVM.descricaoLonga = this.frmCadServicos.value.descricaolonga;
      this.ServicoVM.urlVideo = this.frmCadServicos.value.urlvideo;

      this.cadServicos.postServicos(this.ServicoVM, this.fileupload).subscribe(res => {

        if (res.success === true) {
          this.toast.success(`Serviço cadastrado com sucesso.`, 'Cadastro de serviços');
          this.ServicosVM.push(res.data);
          this.limpaformulario();
        } else {
          this.toast.error('Falha ao cadastrar serviço.', 'Cadastro de serviços');
          console.log(res);
        }

      }, err => {
        this.toast.error('Falha ao cadastrar serviço.', 'Cadastro de serviços');
        console.log(err);
      });

    } else {

      this.ServicoVM.titulo = this.frmCadServicos.value.titulo;
      this.ServicoVM.descricaoCurta = this.frmCadServicos.value.descricaocurta;
      this.ServicoVM.descricaoLonga = this.frmCadServicos.value.descricaolonga;
      this.ServicoVM.urlVideo = this.frmCadServicos.value.urlvideo;

      this.cadServicos.putServicos(this.ServicoVM, this.fileupload).subscribe(res => {

        if (res.success === true) {
          this.toast.success('Dados alterados c/ sucesso.', 'Alteração de registro');
          let servicovmEdit: CadastraServicoViewModel = this.ServicosVM.find(m => m.id === this.ServicoVM.id);
          servicovmEdit = Object.assign(servicovmEdit, res.data);
          this.limpaformulario();
        } else {
          this.toast.error('Falha na alteração do registro.', 'Alteração de registro');
          console.log(res);
        }

      }, err => {
        this.toast.error('Falha do servidor na alteração do registro.', 'Alteração de registro');
        console.log(err);
      });

    }

  }

  editaServico(cadservicovm: CadastraServicoViewModel) {

    this.ServicoVM = cadservicovm;
    this.frmCadServicos.get('titulo').setValue(cadservicovm.titulo);
    this.frmCadServicos.get('urlvideo').setValue(cadservicovm.urlVideo);
    this.frmCadServicos.get('descricaocurta').setValue(cadservicovm.descricaoCurta);
    this.frmCadServicos.get('descricaolonga').setValue(cadservicovm.descricaoLonga);

    if (cadservicovm.urlVideo) {
      this.VideoPreviewUrl = this.embedService.embed(cadservicovm.urlVideo);
    }

  }

  getServicos(): void {
    this.cadServicos.getServicos().subscribe(res => {

      if (res.success === true) {
        this.ServicosVM = res.data;
      } else {
        this.toast.error('Erro ao buscar serviços cadastrados.', 'Lista serviços');
      }

    }, err => {
      this.toast.error('Falha ao buscar serviços cadastrados.', 'Lista serviços');
      console.log(err);
    });
  }

  delServicos(srvvm: CadastraServicoViewModel): void {
    if (srvvm.id) {

      this.cadServicos.deleteServicos(srvvm.id).subscribe(res => {

        if (res.success === true) {
          let index = this.ServicosVM.indexOf(srvvm);
          this.ServicosVM.splice(index, 1);

          this.toast.success('Serviço deletado com sucesso.', 'Delete de serviço');
        } else {
          this.toast.error('O Delete do serviço falhou.', 'Delete de serviço');
          console.log(res);
        }
      }, err => {
        this.toast.error('Infelizmente aconteceu um erro.', 'Delete de Serviço');
        console.log(err);
      });

    }

  }



  limpaformulario() {
    this.frmCadServicos.reset();
    this.ImagePreview = undefined;
    this.VideoPreviewUrl = undefined;
    this.ServicoVM = new CadastraServicoViewModel();
  }

  addVantagens(txt: HTMLInputElement) {

    if (this.ServicoVM.listaVantagens === null || this.ServicoVM.listaVantagens === undefined) {
      this.ServicoVM.listaVantagens = new Array<VantagemViewModel>();
      let vantagem: VantagemViewModel = new VantagemViewModel();
      vantagem.descricao = txt.value;
      this.ServicoVM.listaVantagens.push(vantagem);

      txt.value = '';
      txt.focus();
    } else {
      let vantagem: VantagemViewModel = new VantagemViewModel();
      vantagem.descricao = txt.value;
      this.ServicoVM.listaVantagens.push(vantagem);

      txt.value = '';
      txt.focus();
    }

  }

  removeVantagens(vantagem: VantagemViewModel) {
    let i = this.ServicoVM.listaVantagens.findIndex(v => v.descricao === vantagem.descricao);
    this.ServicoVM.listaVantagens.splice(i, 1);
  }



  b64toUint8Array(b64Data): any {
    let sliceSize = 512;

    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);

      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      let byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }
    return byteArrays;
  }

  b64toBlob(b64Data, contentType, sliceSize?): Blob {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);

      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      let byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  onChangeImage(files: FileList): void {
    let file: File;
    file = files.item(0);

    this.fileupload = files.item(0);

    let reader = new FileReader();
    if (files && files.length > 0) {

      reader.onload = (e: any) => {
        this.ServicoVM.imagem.data = reader.result;
        this.ServicoVM.imagem.contentType = file.type;
        this.ImagePreview = e.target.result;
      }
      reader.readAsDataURL(file);

      // reader.onload = (e: any) => {
      //   // preview da imagem
      //   this.ImagePreview = e.target.result;

      //   // this.ServicoVM.File = file;
      //   // adiciona no form

      //   // this.frmCadServicos.get('imagem').setValue(file, {
      //   //   filename: file.name,
      //   //   filetype: file.type
      //   // });

      // };

    }

  }

  onChangeVideo(txt: any): void {
    // console.log('Valor do txt: ---> ' + txt.value);
    // console.log(this.embedService.embed(txt.value));

    this.VideoPreviewUrl = this.embedService.embed(txt.value);
    this.ServicoVM.urlVideo = txt.value;

    // this.ServicoVM.UrlVideo = this.domSanitizer.bypassSecurityTrustResourceUrl(txt.value);
    // this.ServicoVM.safeurl = this.domSanitizer.bypassSecurityTrustResourceUrl(txt.value);

  }

  getEmbedImage(url: string) {
    let img = this.embedService.embed_image(url, { image: 'thumbnail_small' });
    let i = img.__zone_symbol__value;
    // console.log(i.html);
    return i.link;
  }

  getEmbedUrl(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
