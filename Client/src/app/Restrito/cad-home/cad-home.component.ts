import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadHomeService } from './cad-home.service';
import { ToastrService } from 'ngx-toastr';
import { IdentidadeViewModel } from './identidade-view-model';
import { HomesomosViewModel } from './homesomos-view-model';

@Component({
  selector: 'comp-cad-home',
  templateUrl: './cad-home.component.html',
  styleUrls: ['./cad-home.component.scss']
})
export class CadHomeComponent implements OnInit {

  frmCadHomeSomos: FormGroup;
  // frmCadIdentidade: FormGroup;
  HomeSomos: HomesomosViewModel;
  lstHomeSomos: HomesomosViewModel[];
  fileupload: File;
  imagemPreview: any;

  constructor(private fb: FormBuilder, 
              private cadHomeService: CadHomeService, 
              private toast: ToastrService) {
   }

  ngOnInit() {
    this.frmCadHomeSomos = this.fb.group({
      imagem: this.fb.control(''),
      titulo: this.fb.control(''),
      texto: this.fb.control('')
    });

  }

  onChangeImage(files: FileList): void {
    let file: File;
    file = files.item(0);

    this.fileupload = files.item(0);

    let reader = new FileReader();
    if (files && files.length > 0) {

      reader.onload = (e: any) => {
        this.HomeSomos.imagem.data = reader.result;
        this.HomeSomos.imagem.contentType = this.fileupload.type;
        
        this.imagemPreview = e.target.result;
        
      }
      reader.readAsDataURL(file);

    }

    console.log(this.HomeSomos);
    console.log(this.fileupload);

  }

  getHomeSomos(): void {
    this.cadHomeService.getHome().subscribe(res => {
      console.log(res);
      console.log(res.data);
      this.toast.success('Dados buscados com sucesso', 'Sucesso');
    }, err => {
      console.log(err);
      this.toast.error('Infelizmente aconteceu um erro', 'Erro');
    });
  }

  postHomeSomos(HomeSomos): void {
    console.log(HomeSomos);
  }



}
