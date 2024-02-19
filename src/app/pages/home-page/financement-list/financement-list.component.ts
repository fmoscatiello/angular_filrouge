import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-financement-list',
  standalone: true,
  imports: [],
  templateUrl: './financement-list.component.html',
  styleUrl: './financement-list.component.css'
})
export class FinancementListComponent {

  @Input()
  sectionId: string = '';
  @Input()
  sectionClass: string = '';
  @Input()
  sectionTitle: string = 'Default title';

}
