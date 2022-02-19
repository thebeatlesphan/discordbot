class Deck {
    constructor() {
        this.Deck = []
        this.reset();
        this.shuffle();
    }

    reset() {
        this.Deck = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.Deck.push(values[value] + " of " + suits[suit]);
            }
        }
    }

    shuffle() {
        let numberOfCards = this.Deck.length;
        for (var i = 0; i < numberOfCards; i++) {
            let j = Math.floor(Math.random() * numberOfCards);
            let tmp = this.deck[i];
            this.Deck[i] = this.Deck[j];
            this.Deck[j] = tmp;
        }
    }   
}

module.exports = Deck;