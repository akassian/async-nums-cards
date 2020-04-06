let deckId=""
async function getNewDeck(){
    let deckIdResponse = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle")
    deckId = deckIdResponse.data.deck_id
    return deckId
}
async function drawCard(event){
    let card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    $('#cardImage').show()
    console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
    $('#cardImage').attr('src', card.data.cards[0].image)
  }

  async function request5(){
    let card = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    deckId = card.data.deck_id
    let secondCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
    console.log(`${secondCard.data.cards[0].value} of ${secondCard.data.cards[0].suit}`)
  }
  
  $(document).ready(async function () {
    await getNewDeck();
    $('#cardImage').hide()
    $('#button').on('click', drawCard)
  })


