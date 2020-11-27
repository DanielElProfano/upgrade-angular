import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Igallery } from './Igallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
   borrar = false;
fotos : Igallery[] | null = null;

  constructor(private galleryService : GalleryService) { 


  }

  ngOnInit(): void {
    
    this.fotos = this.galleryService.getGalleryService();


  }

  deleteFoto(e:any){
    debugger
    let deleteId = e.target.id
    this.fotos = this.galleryService.deleteFoto(deleteId)
    console.log("Borrar ---" +deleteId);
    this.borrar = true;


    
  }
  modifyFoto(e:object){
    
    
    this.borrar = true;
    debugger


  }

}
