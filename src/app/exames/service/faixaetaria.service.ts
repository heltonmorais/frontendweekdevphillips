import { Injectable } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaetariaService {

  constructor() { }

  listFaixaEtaria(): Faixaetaria[]{
    return [
      { id: 1, faixa_i: 1, faixa_n: 30, descricao: "Até 30 anos"}
    ];
  }
}
