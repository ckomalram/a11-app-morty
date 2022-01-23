import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  id: number;
  @Input() user: any;
  name = '';
  imgUrl:string= '';
  species='';
  status='';
  constructor() { }

  ngOnInit(): void {
    // console.log(this.user);
    this.name= this.user.name;
    this.imgUrl= this.user.image;
    this.species=this.user.species;
    this.status=this.user.status;
    this.id=this.user.id;
  }

}
