import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'tabs',
    templateUrl: './pages/tabs/tabs.html'
})
export class TabsComponent {
    constructor(private router: RouterExtensions,
                private route: ActivatedRoute) {
    }
}