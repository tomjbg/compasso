export class IdentidadeViewModel {
    id: number;
    titulo: string;
    texto: string;

    constructor(_titulo: string, _texto: string) {
        this.titulo = _titulo;
        this.texto = _texto;
    }
}
