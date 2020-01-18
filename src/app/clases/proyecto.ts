export class Proyecto {
    link  : string;
    tipo  : string;
    mockup: string;
    titulo: string;
    colores     : string[];
    interfaz    : string[];
    logotipo    : string[];
    informacion : string[];
    herramientas: string[];

    constructor() {
        this.link   = '';
        this.tipo   = '';
        this.mockup = '';
        this.titulo = '';
        this.colores      = [];
        this.interfaz     = [];
        this.logotipo     = [];
        this.informacion  = [];
        this.herramientas = [];
    }
}
