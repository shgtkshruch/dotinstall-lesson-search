const Lesson = React.createClass({
  render() {
    return (
      <li className="lesson__item">
        <a href={this.props.link}>
          {this.props.lesson.name}
        </a>
        <ul className="lesson__content">
          {this.props.lesson.contents.map((content, index) => {
            return <Content key={index} content={content} />
          })}
        </ul>
      </li>
    )
  }
});
