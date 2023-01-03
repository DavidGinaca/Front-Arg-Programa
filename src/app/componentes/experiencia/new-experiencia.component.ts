import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  lugar: string ='';
  desde: string ='';
  hasta: string ='';
  descripcion: string ='' ;
  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void {
    const expe = new Experiencia(this.lugar, this.desde, this.hasta, this.descripcion);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("fallo");
      this.router.navigate(['']);
    }
    )
  }

}
