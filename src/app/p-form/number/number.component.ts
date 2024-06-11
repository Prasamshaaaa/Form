import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
@Input() label!:string;
@Input() formControlName!: string;
constructor(){}
ngOnInit(): void {}

}
