import { Injectable } from '@angular/core';
import { Incidencias } from '../model/incidencias';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor() { }

  listIncidencias(): Incidencias[]{
    return [
      { id: 1, regiao_id: 2, mes: 5, faixa_id:1, qnt_exames:44 }
    ];
  }
}
