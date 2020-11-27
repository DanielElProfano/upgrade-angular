import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Igallery } from './Igallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

fotos : Igallery[] | null = null;

  constructor(private galleryService : GalleryService) { 


  }

  ngOnInit(): void {
    debugger
    this.fotos = this.galleryService.getGalleryService();


  }

}
