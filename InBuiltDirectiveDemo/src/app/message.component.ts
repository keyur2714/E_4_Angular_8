import { Component } from '@angular/core';

@Component({
    selector : 'app-message',
    template : `
                <input type=text name=age class="form-control" [(ngModel)]="age" />
                <p>
                    Your Age is : {{age}}
                </p>
                <h1 *ngIf="age >= 18">You are elegible for voting.</h1>
                <h1 *ngIf="age < 18">You are Not elegible for voting.</h1>
                `,
    styles : ['h1{color : green;}']                
})
export class MessageComponent {
    age : number = 17;
}