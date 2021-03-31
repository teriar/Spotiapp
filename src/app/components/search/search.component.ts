import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
  
export class SearchComponent implements OnInit {
     artistas: any [] = [];
     loading: boolean=false;
  constructor( private spotify: SpotifyService) { }
buscar(termino:string){
if(termino.length===0){
  this.loading=false
}else{
  this.loading=true;

  this.spotify.getArtista(termino).subscribe( (data: any) =>{
    console.log(data);
    this.artistas= data;

    this.loading=false;
  })
  console.log(termino);
}}
  ngOnInit(): void {
  }

}
