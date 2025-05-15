import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  public livro: Livro;
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService,
    router: Router
  ) {
    this.livro = new Livro(0, 0, '', '', []);
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n'); 
    this.servLivros.incluir(this.livro); 
    this.router.navigateByUrl('/lista');
  };
}
