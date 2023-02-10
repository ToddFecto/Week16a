import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../deck';

@Component({
	selector: 'app-one-card',
	templateUrl: './one-card.component.html',
	styleUrls: ['./one-card.component.css']
})
export class OneCardComponent implements OnInit {

	@Input() card?: Card;

	constructor() { }

	ngOnInit(): void {
	}

}
