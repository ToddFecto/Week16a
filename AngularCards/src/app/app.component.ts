import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cards, Deck } from './deck';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'AngularCards';
	deck?: Deck; // The question mark overrides the requirement that it must be initialized
	cards?: Cards; // Another question mark -- doesn't need to be initialized

	/*
	http: HttpClient = null;

	constructor(theHttp: HttpClient) {
		this.http = theHttp;
	}
	*/

	constructor(private http: HttpClient) { }

	getDeck() {
		this.http.get<any>(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).subscribe(
			(result: Deck) => {
				this.deck = result;
				console.log(this.deck);
			}
		);
	}

	getCards() {
		if (this.deck) {
			this.http.get<any>(`https://deckofcardsapi.com/api/deck/${this.deck.deck_id}/draw/?count=2`).subscribe(
				(result: Cards) => {
					//alert(result.remaining);
					this.cards = result;
				}
			);		
		}
	}
}