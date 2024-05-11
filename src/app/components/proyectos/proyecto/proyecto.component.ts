import { Component, Input} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.scss'
})

export class ProyectoComponent{

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() preview: Preview = {};
  @Input() icons: any[] = [];
  @Input() code: string = '';
  @Input() url: string = '';

  // Icons
  faEye = faEye;
  faGithub = faGithub;


}

interface Preview{
  name?: string,
  alt?: string
}
