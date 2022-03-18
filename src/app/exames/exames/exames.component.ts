import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Incidencias } from '../model/incidencias';
import { Regiao } from '../model/regiao';
import { FaixaetariaService } from '../service/faixaetaria.service';
import { IncidenciasService } from '../service/incidencias.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-regiao',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {
  
  regioes: Regiao[] = [];
  incidencias: Incidencias[] = [];
  faixaetaria: Faixaetaria[] = [];

  constructor(private regiaoService: RegiaoService,
              private incidenciasService: IncidenciasService,
              private faixaetariaService: FaixaetariaService) { }

  ngOnInit(): void {
    this.regiaoService.listRegioes().subscribe(regioes => this.regioes = regioes)
    this.incidencias = this.incidenciasService.listIncidencias();
    this.faixaetaria = this.faixaetariaService.listFaixaEtaria()
  }

}
