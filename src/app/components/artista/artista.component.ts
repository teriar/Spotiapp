import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {
   artista: any  ={};
   tracks: any [] =[];
   loadingArtist: boolean=true;
  constructor( private spotify: SpotifyService ,private router: ActivatedRoute ){ 
    this.router.params.subscribe( (params: any ) =>{
      // console.log(params);
      this.showArtista(params['id']);
      this.getToptracks(params['id']);
      this.loadingArtist=true;      
      });

    }
    showArtista(id : string){
      this.loadingArtist= true;
      this.spotify.showArtista(id)
      .subscribe(artista  => {
       this.artista=artista;
       this.loadingArtist=false;
      })
   
 }
getToptracks(id: string){
  this.spotify.getTopTracks(id)
  .subscribe((tracks: any) => {
    
     this.tracks = tracks;
    console.log(this.tracks);
  });

}

  }

   
 