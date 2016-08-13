const Content = React.createClass({
  render() {
    return (
      <li>
        {this.props.content.name}
        <span>{this.props.content.time}</span>
        <ul>
          {this.props.content.summaries.map((summary, index) => {
            return <Summary key={index} summary={summary} />
          })}
        </ul>
      </li>
    )
  }
});
