function GameCard(index, pic, flipped){
  this._index = index;
  this._pic = pic;
  this._flipped = flipped;
}


GameCard.prototype.id = function(){
  return this._index;
};

GameCard.prototype.image = function(){
  return this._pic;
};

GameCard.prototype.flipped = function(){
  return this._flipped;
};

GameCard.prototype.flipUp = function(){
  this._flipped = true;
};
GameCard.prototype.flipDown = function(){
  this._flipped = false;
};



function GameModel(pictures, rerender){
  this._rerender = rerender;
  this._cards = this.shuffle(pictures.slice(0)).map(function(pic,i){
     return new GameCard(i, pic, false);
  });
}


GameModel.prototype.flippedCards = function(){
  return this._cards.filter(function(card){ return card.flipped(); });
};

GameModel.prototype.reset = function(){
  this.flippedCards().forEach(function(card){
    card.flipDown();
  });
  this._rerender();
  return this;
};

GameModel.prototype.flip = function(cardId){

  var clickedCard = this._cards[cardId];
  var flippedCards = this.flippedCards();
  console.log('FLIP', cardId, flippedCards)

  if (flippedCards.length > 1) {
    debugger
  }
  clickedCard.flipUp();
  if (flippedCards.length === 0) return;

  flippedCard = flippedCards[0]

  console.log('comparing cards', flippedCard, clickedCard)
  if (flippedCard.image() === clickedCard.image()) {

    return;
  }

  setTimeout(function(){
    this.reset();
    console.log('resetting')
  }.bind(this), 1000)

  // return this.reset();
  return this;


  // var indexes = [];
  // var flipCount = 0;
  // this._cards.forEach(function(card, idx){
  //   if(card.flipped){
  //     flipCount += 1;
  //     indexes.push(idx);
  //   }
  // });

  // if (flipCount < 2) {
  //   this._cards[cardId].flipUp();
  //   console.log(this._cards[cardId])
  // }
  // else if (flipCount === 2) {
  //   return "win"
  // }
  // else {
  //   for(var i = 0; i < indexes.length; i ++){
  //     this._cards[indexes[i]].flipDown();
  //   }
  // }


  // this._cards[cardId].flipUp()


};

GameModel.prototype.debug = function(){
  return console.log(this._cards);
};

GameModel.prototype.deck = function(){
  return this._cards;
};

GameModel.prototype.shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

