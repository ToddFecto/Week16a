import { Component } from '@angular/core';
import { CardApiService } from './card-api.service';
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

	constructor(private cardapi: CardApiService) { }

	getDeck() {
		/*
		this.http.get<any>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').subscribe(
			(result: Deck) => {
				this.deck = result;
				console.log(this.deck);
			}
		);*/

		this.cardapi.getDeck(
			(result: Deck) => this.deck = result
		);
	}

	getCards() {
		/*if (this.deck) {
			this.http.get<any>(`https://deckofcardsapi.com/api/deck/${this.deck.deck_id}/draw/?count=2`).subscribe(
				(result: Cards) => {
					//alert(result.remaining);
					this.cards = result;
				}
			);		
		}*/

		if (this.deck) {
			this.cardapi.getCards(this.deck.deck_id, 
				(result: Cards) => this.cards = result
			);
		}
	}
}
