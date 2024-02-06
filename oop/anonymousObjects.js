class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards = [
new Card("A", "Hearts"),
new Card("A", "Clubs"),
new Card("A", "Diamonds"),
new Card("A", "Spades"),

new Card("2", "Hearts"),
new Card("2", "Clubs"),
new Card("2", "Diamonds"),
new Card("2", "Spades"),
]

for (const card of cards){
    console.log(`${card.value} ${card.suit}`)
}

cards.forEach(card => console.log(`${card.value} ${card.suit}`))