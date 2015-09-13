var Card = React.createClass({
  getInitialState: function() {
    return {
      pic: pictures[randomNum(0, 14)]
    };
  },
  render: function() {
    console.log(this.state.pic);
    return(
      <img className="cardPic"src={this.state.pic} alt="comic" />
    );
  }
});
