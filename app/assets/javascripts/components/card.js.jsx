var Card = React.createClass({

  propTypes: {
    backImage: React.PropTypes.string.isRequired,
    frontImage: React.PropTypes.string.isRequired,
    flipped: React.PropTypes.bool.isRequired,
    clickHandler: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      flipped: false
    };
  },

  whichPic: function(){
    if(this.props.flipped){
      return this.props.frontImage;
    }
    else{
      return this.props.backImage
    }
  },

  render: function() {
    return(
      <span>
      <img onClick={this.props.clickHandler} className="cardPic" src={this.whichPic()}/>
      </span>
    );
  }
});
