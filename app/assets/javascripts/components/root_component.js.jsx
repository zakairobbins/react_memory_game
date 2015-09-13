var RootComponent = React.createClass({
  render: function() {
    return(
      <div className="board">
        <GameBoard picture={this.props.picture}/>
      </div>
    );
  }
});
