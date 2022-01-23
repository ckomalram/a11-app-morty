import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios: any[]= [];
  loading= false;
  constructor(private _usuariosservices: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.loading= true;
    this._usuariosservices.getUsuarios().subscribe((data)=>{
        console.log(data.results);
       this.listUsuarios = data.results;
       this.loading= false;
    }, error => {
      console.log(error);
      this.loading= false;
    });
  }

}
