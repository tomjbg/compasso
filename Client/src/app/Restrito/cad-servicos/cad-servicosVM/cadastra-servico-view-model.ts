import { VantagemViewModel } from './vantagem-view-model';
import { ImagemViewModel } from './imagem-view-model';
// import { SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

export class CadastraServicoViewModel {
    id: number;
    iconFont: string;
    titulo: string;
    urlVideo: string;
    imagem: ImagemViewModel;
    descricaoCurta: string;
    descricaoLonga: string;
    listaVantagens: VantagemViewModel[];
    ativo: boolean;

    constructor() {
        this.iconFont = '';
        this.titulo = '';
        this.urlVideo = '';
        this.imagem = new ImagemViewModel();
        this.descricaoCurta = '';
        this.descricaoLonga = '';
        this.listaVantagens = new Array<VantagemViewModel>();
        this.ativo = true;
    }
}
