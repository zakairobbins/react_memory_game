var GameBoard = React.createClass({

  propTypes: {
    backImage: React.PropTypes.string.isRequired,
    pictures:  React.PropTypes.array.isRequired
  },

  rerender: function(){
    this.forceUpdate();
  },

  getInitialState: function(){
    var model = new GameModel(this.props.pictures, this.rerender.bind(this))
    return {model: model};
  },

  handleClick: function(cardId){
    console.log("You Clicked", cardId);
    this.state.model.flip(cardId);
    this.setState({ model: this.state.model });
  },

  render: function() {
    var that = this;
    return(
      <div className="board">
        <div className="row">
          { that.state.model.deck().map(function(card, i){
                return (
              <Card
                key={card.id()}
                frontImage={card.image()}
                backImage={that.props.backImage}
                flipped={card.flipped()}
                className={card.flipped() ? 'show-front' : 'show-back'}
                clickHandler={that.handleClick.bind(that, card.id())}/>);
            }) }
        </div>
      </div>
    );
  }
});
