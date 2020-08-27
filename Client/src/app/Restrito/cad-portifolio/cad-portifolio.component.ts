import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadPortifolioService } from './cad-portifolio.service';
import { CadPortifolioModel } from './cad-portifolio-model';

@Component({
  selector: 'comp-cad-portifolio',
  templateUrl: './cad-portifolio.component.html',
  styleUrls: ['./cad-portifolio.component.scss']
})
export class CadPortifolioComponent implements OnInit {

  frmCadPortifolio: FormGroup;
  cadPortifolio: CadPortifolioModel;
  Portifolios: CadPortifolioModel[];

  constructor(private cadPortService: CadPortifolioService, private fb: FormBuilder) {
   }

  ngOnInit() {
    this.frmCadPortifolio = this.fb.group({
      titulo: this.fb.control(''),
      descricaocurta: this.fb.control(''),
      descricaolonga: this.fb.control(''),
      imagempath: this.fb.control('')
    });
  }

  

}
