var GameBoard = React.createClass({
  render: function() {
    return(
      <div className="board">
        <div className="row">
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
        </div>
        <div className="row">
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
        </div>
        <div className="row">
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
          <Card picture={this.props.pictures} />
        </div>
      </div>
    );
  }
});
