var RootComponent = React.createClass({
  render: function() {
    return(
        <GameBoard pictures={ALL_PICTURES} backImage={BACK_IMAGE}/>
    );
  }
});
