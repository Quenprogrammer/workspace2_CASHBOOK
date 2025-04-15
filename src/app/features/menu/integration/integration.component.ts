import {Component} from '@angular/core';

@Component({
  selector: 'app-integration',
  standalone: true,
  imports: [],
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.css'
})
export class IntegrationComponent {
  heading:string='Integrated features from these accounts make it easier to collaborate with people you know on Front Dashboard.\''

integrationList=[
  {name:'Mail', icon:'', link:'',tagLine:'' },
  {name:'Drive', icon:'', link:'', tagLine:'' },
  {name:'Inbox', icon:'', link:'inbox.svg' , tagLine:''},
]
}
