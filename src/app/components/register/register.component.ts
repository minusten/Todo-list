import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import {  UserService } from '../user/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
    }

}
