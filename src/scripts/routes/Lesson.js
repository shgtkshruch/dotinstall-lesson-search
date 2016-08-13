const LessonRoute = React.createClass({
  render() {
    const lesson = this.props.route.data.filter((lesson, i, array) => {
      return lesson.name === this.props.params.lessonName;
    });
    const contents = lesson[0].contents.map((content, i) => {
      return <Content key={i} content={content} />
    });
    return (
      <div>
        {this.props.params.lessonName}
        <ul>
          {contents}
        </ul>
      </div>
    )
  }
});

