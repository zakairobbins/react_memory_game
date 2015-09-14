var Card = React.createClass({
  getInitialState: function() {
    return {
      flipped: false
    };
  },

  cardFlip: function() {
    if (this.state.flipped) {
      return this.setState({flipped: false});
    }else{
      return this.setState({flipped: true});
    }
  },

  setFace: function(){
    if(this.state.flipped){
      return this.props.front;
    }
    else{
      return this.props.back
    }
  },

  render: function() {
    return(
      <span>
      <img onClick={this.cardFlip} className="cardPic" src={this.setFace()}/>
      </span>
    );
  }
});

//       // <img onClick={this.cardFlip} className="cardPic" src={this.cardFace} alt="comic" />
// var Card = React.createClass({
//   getInitialState: function() {
//     return {
//       front: assignUnique(pictures),
//       back: "assets/jlalogo.JPG",
//       flipped: false
//     };
//   },

//   cardFlip: function() {
//     if (this.state.flipped) {
//       return this.state.flipped = false;
//     }else{
//       return this.state.flipped = true;
//     }
//   },

//   cardFace: function(flipped) {
//     if (flipped) {
//       flipped = false;
//       return <img className="cardPic" src={this.state.front} alt="comic" />
//     }else{
//       flipped = true;
//       return <img className="cardPic" src={this.state.back} alt="comic" />
//     }
//   },

//   render: function() {
//     return(

//       <span onClick={this.cardFace(this.state.flipped)}>
//       {this.cardFace(this.state.flipped)}
//       </span>
//     );
//   }
// });
//       // <img onClick={this.cardFlip} className="cardPic" src={this.cardFace} alt="comic" />
