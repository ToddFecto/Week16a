import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards, Deck } from './deck';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  constructor(private http: HttpClient) { }

  getDeck(cb: Function) {
    this.http.get<any>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').subscribe(
			(result: Deck) => {
        cb(result);
			}
		);
  }

  getCards(deck_id: String, cb: Function) {
    this.http.get<any>(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`).subscribe(
			(result: Cards) => {
        cb(result);
			}
		);
  }
}
