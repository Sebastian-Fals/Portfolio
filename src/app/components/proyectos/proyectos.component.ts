import { Component } from '@angular/core';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { faAngular, faPython, faCss3Alt, faHtml5, faSquareJs } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ProyectoComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {
  //Iconos de tecnologias
  faAngular = faAngular;
  faPython = faPython;
  faCss = faCss3Alt;
  faHtml = faHtml5;
  faJs = faSquareJs;
}
