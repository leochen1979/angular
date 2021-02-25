import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit  {
  photoResults:any;  
constructor(private mediaService: ServiceService) { 
  }

  ngOnInit() {
    this.mediaService.getPhotos().subscribe((data)=>{
      console.log(data);
	  this.photoResults = data;
      //this.articles = data['title'];
    });
  }


}




