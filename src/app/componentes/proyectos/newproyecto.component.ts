import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreProyecto: string;
  descripcionProyecto: string;
  linkproyecto: string; 
  imgproyecto: string = '';

  constructor(private proyService: ProyectoService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(
      this.nombreProyecto,
      this.descripcionProyecto,
      this.imgproyecto,
      this.linkproyecto
    );


    (function () {
      'use strict';

  
      var forms = document.querySelectorAll('.needs-validation');


      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          'submit',
          function (event: any): void {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add('was-validated');
          },
          false
        );
      });
    })();


    this.proyService.save(proyecto).subscribe((response) => {
      alert('Proyecto añadido');
      this.proyService.lista();
      this.router.navigate(['']);
    });
  }


}
