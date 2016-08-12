const Lesson = React.createClass({
  render() {
    return (
      <li>
        <a href={this.props.link}>
          {this.props.lesson.name}
        </a>
        <ul>
          {this.props.lesson.contents.map((content, index) => {
            return <Content key={index} content={content} />
          })}
        </ul>
      </li>
    )
  }
});
