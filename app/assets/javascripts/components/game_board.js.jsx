var GameBoard = React.createClass({

  propTypes: {
    pictures: React.PropTypes.array.isRequired,
    backImage: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    var shuffled = this.shuffle(this.props.pictures.slice(0));
    return {
      flipCount: 0,
      deck: shuffled
    };
  },

  shuffle: function(array) {
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
  },

  render: function() {
    var that = this;
    return(
      <div className="board">
        <div className="row">
          { this.state.deck.map(function(card, i){
                return (
              <Card key={i} front={card} back={that.props.backImage} clickHandler={that.handleClick.bind(that, i)}/>
                  );
            }) }
        </div>
      </div>
    );
  }
});
