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
      color : "blue",
      id:0
    },
    {
      
      img : "https://cdnx.jumpseller.com/bundle/image/409914/thumb/230/260?1437135516",
      alt : "texto alternativo",
      description : "jersey",
      price : 120,
      color : "red",
      id:1
     },
     {
      
      img : "https://cdnx.jumpseller.com/bundle/image/409917/thumb/230/260?1437135615",
      alt : "texto alternativo",
      description : "chaqueta",
      price : 120,
      color : "red",
      id:2
     },
     {
      
      img : "https://cdnx.jumpseller.com/bundle/image/6754435/thumb/230/260?1571068182",
      alt : "texto alternativo",
      description : "Chica con chaqueta",
      price : 120,
      color : "red",
      id:3
     },
     {
      img : "https://cdnx.jumpseller.com/bundle/image/388943/thumb/230/260?1433521152",
      alt : "texto alternativo",
      description : "chaqueta",
      price : 120,
      color : "blue",
      id:4
    },
    {
      
      img : "https://cdnx.jumpseller.com/bundle/image/388946/thumb/230/260?1433529429",
      alt : "texto alternativo",
      description : "jersey",
      price : 120,
      color : "red",
      id:5
     },
     {
      
      img : "https://cdnx.jumpseller.com/bundle/image/409921/thumb/230/260?1437135871",
      alt : "texto alternativo",
      description : "chaqueta",
      price : 120,
      color : "red",
      id:6
     },
     {
      
      img : "https://cdnx.jumpseller.com/bundle/image/6754435/thumb/230/260?1571068182",
      alt : "texto alternativo",
      description : "Chica con chaqueta",
      price : 120,
      color : "red",
      id:7
     },
    ];
   }


  getGalleryService(){
    
    return this.fotos;
  }
  pushFoto(foto: Igallery){
    this.fotos.push(foto);
    

  }

  deleteFoto(id:number){
    
        this.fotos.forEach(foto =>{

      if(id != foto.id){
        this.array.push(foto);
      }
    })
    this.fotos = this.array;
    this.array = [];
    debugger
    return this.getGalleryService();

  }
}