import { Component,  Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() items: any []=[];
  constructor(private router:Router) { }

 verArtista(item : any){
   let artistaId;
 
if(item.type==="artist"){
     console.log(item.id);
     artistaId= item.id;
}else{
  console.log(item.artists[0].id);
  artistaId = item.artists[0].id;
}
  this.router.navigate(['/artist',artistaId]);
}

}
