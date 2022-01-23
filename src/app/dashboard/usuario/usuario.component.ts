import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  //Datos de usuario
  name = '';
  imgUrl:string= '';
  species='';
  status='';
  gender=''
  origin='';
  episodios= 0;
  id: number;

  loading = true;
  constructor(private _route: ActivatedRoute, private _usuarioservices: UsuarioService) {
    // + es para convertir string a number
    this.id = +this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // console.log(this.id);
    this.getSingleUsuario();

  }

  //Custom methods
  getSingleUsuario(){
    this._usuarioservices.getSingleUsuario(this.id).subscribe(data => {
      // console.log(data);
      this.loading = false;
      this.name= data.name;
      this.imgUrl= data.image;
      this.gender=data.gender;
      this.species=data.species;
      this.status=data.status;
      this.origin= data.origin.name;
      this.episodios= data.episode.length

      // this.id=data.id;
    }, error => {
      console.log(error);
    })
  }

}
