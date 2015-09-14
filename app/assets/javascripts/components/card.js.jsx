var Card = React.createClass({
  getInitialState: function() {
    return {
      pic: assignUnique(pictures)
    };
  },
  render: function() {
    return(
      <img className="cardPic"src={this.state.pic} alt="comic" />
    );
  }
});
