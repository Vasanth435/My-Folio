import { Component, Input, input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  standalone: true,
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
@Input() product! :Product;
}
