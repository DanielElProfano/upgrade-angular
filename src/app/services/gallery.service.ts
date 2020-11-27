import { Injectable } from '@angular/core';
import { Igallery } from '../component/body/gallery/Igallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
 
  fotos : Igallery[];
 
  array : Igallery[] =[];

  constructor() {
    
    this.fotos = [{
      img : "https://cdnx.jumpseller.com/bundle/image/388943/thumb/230/260?1433521152",
      alt : "texto alternativo",
      description : "chaqueta",
      price : 120,
      color : "blue"
    },
    {
      
      img : "https://cdnx.jumpseller.com/bundle/image/409914/thumb/230/260?1437135516",
      alt : "texto alternativo",
      description : "jersey",
      price : 120,
      color : "red"
     }
    ];



   }


  getGalleryService(){
    
    return this.fotos;
  }
  pushFoto(foto: Igallery){
    this.fotos.push(foto);
    

  }
}