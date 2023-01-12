import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {

  proyecto: Proyecto = null;

  constructor(
    private proyService: ProyectoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyService.listaPorId(id).subscribe((data) => {
      this.proyecto = data;
    });
  }
  onUpdate(): void {
    
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

   
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.proyService.update(id, this.proyecto).subscribe((data) => {
      this.proyService = data;
      alert('Proyecto Modificado');
      this.router.navigate(['']);
    });
  }
}

