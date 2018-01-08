import { Component } from '@angular/core'


@Component({
  selector: 'app-warning-alert',
  template: '<p class="alert alert-warning"> ALERT!! </p>',
  styles:   ['p {color: red;}']
})
export class WarningAlertComponent {
  
}