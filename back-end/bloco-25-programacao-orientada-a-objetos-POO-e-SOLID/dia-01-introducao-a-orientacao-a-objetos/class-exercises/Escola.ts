class Escola {
  private _matricula: string;
  private _nome: string;
  private _provas?: number[];
  private _trabalhos?: number[];

  constructor(m: string, n: string) {
    this._matricula = m;
    this._nome = n;
  }

  get matricula() {
    return this._matricula;
  }

  set matricula(matricula) {
    this._matricula = matricula;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get provas() {
    return this._provas;
  }

  set provas(arrayNotas : number[] | undefined) {
    if (!arrayNotas || arrayNotas.length !== 4) throw new Error('São 4 notas de prova');
    this._provas = arrayNotas;
  }

  get trabalhos() {
    return this._trabalhos;
  }

  set trabalhos(arrayNotas : number[] | undefined) {
    if (!arrayNotas || arrayNotas.length !== 2) throw new Error('São 2 notas de trabalhos');
    this._trabalhos = arrayNotas;
  }

  total(): number {
    if (!this.provas || !this.trabalhos) throw new Error('Está faltando alguma nota');
    return this.provas.reduce((a, c) => a + c, 0) + this.trabalhos.reduce((a, c) => a + c, 0)
  }
  media(): number {
    if (!this.provas || !this.trabalhos) throw new Error('Está faltando alguma nota');
    return this.total()/(this.provas.length + this.trabalhos.length);
  }
}

const thierry = new Escola('Programação Back End', 'Thierry');

thierry.provas = [8,8,8,7];
thierry.trabalhos = [7,6];

console.log(thierry.matricula);

thierry.matricula = 'Programação Front end'

console.log(thierry.total());
console.log(thierry.media());

console.log(thierry.matricula);
