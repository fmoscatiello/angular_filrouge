import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soustheme',
  standalone: true,
  imports: [],
  templateUrl: './soustheme.component.html',
  styleUrl: './soustheme.component.css'
})
export class SousthemeComponent {

  @Input()
  sousTheme !: any;

}
