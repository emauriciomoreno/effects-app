import { Usuario } from './../../models/usuario.model';
import { CargarUsuario } from './../../store/actions/usuario.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducer';

import * as usuarioActions from '../../store/actions'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  loading: boolean;
  error:any;
  user:Usuario;

  constructor(private router:ActivatedRoute,
              private store:Store<AppState>) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      const id = params['id'];
      this.store.dispatch( new usuarioActions.CargarUsuario(id))
    });

    this.store.select('usuario').subscribe( usuario => {
      this.user = usuario.user;
      this.loading = usuario.loading;
      this.error = usuario.error;
    });
  }

}
