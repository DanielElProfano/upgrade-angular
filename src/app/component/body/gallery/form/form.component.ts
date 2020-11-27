
import { Igallery } from '../Igallery';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

import { GalleryService } from 'src/app/services/gallery.service';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formGallery : FormGroup | any = null
  public submitted = false;
  constructor(private formbuilder: FormBuilder, private galleryService : GalleryService ) { 

    this.formGallery = this.formbuilder.group({
      img: ['',[Validators.minLength(2)]],
      alt: ['',[Validators.minLength(2)]],
      description: ['',[Validators.minLength(2)]],
      price: ['',[Validators.minLength(2)]],
      color: ['',[Validators.minLength(2)]],

    })
  }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.formGallery.valid) {
      // Creamos un Usuario y lo emitimos
      const foto: Igallery = {
        img: this.formGallery.get('img').value,
        alt:this.formGallery.get('alt').value,
        description: this.formGallery.get('description').value,
        price: this.formGallery.get('price').value,
        color: this.formGallery.get('color').value,
       
      };
      
      // Reseteamos todos los campos y el indicador de envío o submitted
      // this.busqueda = search.search;
      debugger
      console.log(foto);
      this.galleryService.pushFoto(foto);
      this.formGallery.reset();
      this.submitted = false;
     
      
    }
  }
 
}
