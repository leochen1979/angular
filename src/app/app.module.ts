import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';

import { PhotosComponent } from './media/photos/photos.component';
import { AlbumsComponent } from './media/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
	PhotosComponent,
	AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	RouterModule.forRoot([ 
      { path: 'home', component:HomeComponent }, 
      { path: 'dash', component:DashComponent },
	  { path: 'photos', component: PhotosComponent},
      { path: 'albums', component: AlbumsComponent}
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
