import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
 selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})

export class AlbumsComponent implements OnInit  {
  albumsResults:any;  
constructor(private mediaService: ServiceService) { 
  }

  ngOnInit() {
    this.mediaService.getAlbums().subscribe((data)=>{
      console.log(data);
	  this.albumsResults = data;
    });
  }


}