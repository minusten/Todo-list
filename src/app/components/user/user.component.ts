import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-user',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
  })
  export class UserComponent {
    constructor(private router: Router) { }
    logout(): void {
         this.router.navigate(['login']);
        }
      
}
