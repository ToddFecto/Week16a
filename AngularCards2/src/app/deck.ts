export interface Deck {
    deck_id: String,
    remaining: Number,
    shuffled: Boolean,
    success: Boolean
}

export interface Card {
    image: String,
    value: String,
    suit: String,
    code: String
}

export interface Cards {
    success: Boolean,
    cards: Card[],
    deck_id: String,
    remaining: Number
}
