var GameBoard = React.createClass({
  render: function() {
    return(
      <div className="card">
        <Card picture={this.props.picture} />
      </div>
    );
  }
});
