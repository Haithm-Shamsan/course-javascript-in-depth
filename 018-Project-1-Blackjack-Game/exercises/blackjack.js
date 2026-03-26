const GenerateDeck = () => {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  const GeneratedDeck = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      GeneratedDeck.push({ suit, rank });
    }
  }
  return GeneratedDeck;
};

const DrawCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);

  const card = deck[randomIndex];

  deck.splice(randomIndex, 1);
  // Remove the card from the deck array
  return card;
};
const CalcScore = (hand) => {
  let Score = 0;
  for (const card of hand) {
    if (
      card["rank"] == "Jack" ||
      card["rank"] == "Queen" ||
      card["rank"] == "King"
    ) {
      Score += 10;
    } else if (card["rank"] == "Ace") {
      Score += 1;
    } else {
      Score += Number(card["rank"]);
    }
  }
  return Score;
};
const deck = GenerateDeck();

const PlayerHand = [];
const DealerHand = [];

console.log("----------{Player Hand}----------");
PlayerHand.push(DrawCard(deck));
PlayerHand.push(DrawCard(deck));
PlayerHand.push(DrawCard(deck));
console.log(PlayerHand);
let PlayerScore = CalcScore(PlayerHand);
console.log(`PlayerHand Score :${PlayerScore}`);
console.log("---------------------------------");
console.log("----------{Dealer Hand}----------");
DealerHand.push(DrawCard(deck));
DealerHand.push(DrawCard(deck));
DealerHand.push(DrawCard(deck));
console.log(DealerHand);

let DealerScore = CalcScore(DealerHand);
console.log(`DealerHand Score :${DealerScore}`);
console.log("---------------------------------");

while (true) {
  if (PlayerScore > 21) {
    return console.log(
      `Player Loset ,Becouse you  bust with score ${PlayerScore} and Dealer Had ${DealerScore}  `
    );
    break;
  } else if (PlayerScore === 21) {
    return console.log(
      `Player Won ,Becouse you  got  score ${PlayerScore} and Dealer Had ${DealerScore}  `
    );
  } else if (PlayerScore === DealerScore) {
    return console.log("its Drow between the Player and Dealer");
    break;
  }
  return console.log(
    `Dealer Loset ,Becouse you  bust with score ${DealerScore} and Player Had ${PlayerScore}  `
  );
}
