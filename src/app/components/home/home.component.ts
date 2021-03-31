import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any []=[];
  loading :boolean;
  constructor(private spotifi: SpotifyService ) {
    this.loading=true;
    this.spotifi.getNewReleases().subscribe ((data:any)=>{
    console.log(data);
    this.nuevasCanciones=data;
    this.loading = false;
    });
    
   }

  ngOnInit(): void {
  }

}


//constructor( private http: HttpClient) {
 // console.log('hecho');
 // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data: any) =>{
  //  console.log(data);
  //  this.paises=data;
  //})
 //}