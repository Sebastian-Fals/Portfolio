import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPython,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faAngular,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss',
})
export class SobreMiComponent {
  python = faPython;
  html = faHtml5;
  css = faCss3;
  js = faJs;
  node = faNodeJs;
  angular = faAngular;
  react = faReact;
}
