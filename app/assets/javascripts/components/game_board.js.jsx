  var makeDeck = function() {
      var deck = []
    for (var i = 0; i < 12; i++) {
      deck[i] = <Card front={assignUnique(pictures)} back={back}/>
    };
    return deck;
  }
var GameBoard = React.createClass({
  render: function() {
    var deck = makeDeck()
    return(
      <div className="board">
        <div className="row">
          {deck}
        </div>
      </div>
    );
  }
});

//   var makeDeck = function() {
//       var deck = []
//     for (var i = 0; i <= 6; i++) {
//       deck[i] = <Card />
//     };
//     return deck;
//   }
// var GameBoard = React.createClass({
//   render: function() {
//     {var deck = makeDeck()}
//     console.log(deck);
//     return(
//       <div className="board">
//         <div className="row">
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//         </div>
//         <div className="row">
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//         </div>
//         <div className="row">
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//           <Card picture={this.props.pictures} />
//         </div>
//       </div>
//     );
//   }
// });
