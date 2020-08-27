export class HomesomosViewModel {
    id: number;
    imagem: { data: any, contentType: string };
    titulo: string;
    texto: string;

    constructor(_imagem: { data: any, contentType: ''}, _titulo: string='', _texto: string='') {
        this.imagem = _imagem;
        this.titulo = _titulo;
        this.texto = _texto;
    }
}