import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

getQuery( query: string){
  const url= `https://api.spotify.com/v1/${query}`;

  const headers= new HttpHeaders({
    'Authorization': 'Bearer BQDd5iGwmVt-p7cB5iFeaOc9RC3WoStmcZLYb_zUhlv6UBKbskO-DB-tIC05U-KvImzLimqGbXpq7MaA0_ajAWw366lRGrcaEMGRMKddpzgfAumzdXEa7dWgid8ExjJgNKQiQnQ4qINW0c8vDolk9r19NTIx9LeDIZompbtxh2CjvAjNGpKxZnRq7ByCZfTOB8Du3FWhIQvAZykyAKdLxonXrHW536j2WA'
  });
  return this.http.get(url,{headers});
}

getNewReleases(){
 return this.getQuery('browse/new-releases')
 .pipe(map((data:any) =>{
     return data.albums.items;
 }));

}
getArtista(termino: string){

return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
.pipe(map((data: any) =>{
  
  return data.artists.items;
   

}));
}
showArtista(id: String ){
 


   return  this.getQuery(`artists/${id}`);
  //  .pipe(map((data:any) =>data.artists.items));
}

getTopTracks(id: String ){
 
  
  
     return  this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe(map((data: any) =>{
       return data.tracks;
       
      }));
    
  }
}