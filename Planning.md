# Planning

## MVP Requirements

- single player game
- display
  - name of game
  - brief instructions for how to play
  - highest score achieved by player amongst all previously played games
  - current score achieved in current game instance
  - 12 cards arranged in a grid that each responsively fills the viewport width
- per game instance
  - 12 cards each with a randomly generated image or gif pulled from an API (Giphy)
  - increment current score by 1 if user has clicked on a card that has NOT been previously clicked on in the current game instance
  - reset score to 0 if user has clicked on a card that has been clicked on before (guaranteed after user has clicked on all cards once)
  - ends and starts a new game instance when current score is reset (back to 0)
  - after any card is clicked on, "shuffle" the cards by redisplaying all the cards in a random order

## Structure

- state
  - `cards`: array of `card` objects consisting of
    - `id`: unique string identifier
    - `title`: string name for card
    - `imgSrc`: URL to an image file
  - `visited`: set of `card.id` strings
  - `maxScore`: int set to 0 that represents the highest score achieved by the player
  - `score`: int set to 0 that represents the current score achieved by the player
  - `cardOrder`: array of ints that represents the order in which all the indices of the `cards` should be visually displayed
- functions / utilties / event handlers
  - `imageURL(query)`
  - `randomElement()`
  - `shuffleCards()`
  - `generateCards()`
  - `handleCardClick()`
  - `renderedCards(cards, cardOrder)`
- components
  - `Header`
  - `Scoreboard`
  - `Card`
  - `CardGrid` (optional)

## Pseudocode

- TODO
