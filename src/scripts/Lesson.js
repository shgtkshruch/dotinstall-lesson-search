const Lesson = React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  render() {
    const contents = this.props.lesson.contents.map((content, index) => {
      return <Content key={index} content={content} />
    });

    return (
      <li className="lesson__item">
        <a href={this.props.lesson.link}>
          {this.props.lesson.name}
        </a>
        <ul className="lesson__content">
          {contents}
        </ul>
      </li>
    )
  }
});
