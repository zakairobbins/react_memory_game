var back = "assets/jlalogo.JPG";

var RootComponent = React.createClass({
  render: function() {
    return(
        <GameBoard pictures={pictures} back={back}/>
    );
  }
});
