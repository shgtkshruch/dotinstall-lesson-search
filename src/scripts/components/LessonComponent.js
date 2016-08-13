const Link = ReactRouter.Link;

const LessonComponent = React.createClass({
  render() {
    return (
      <li className="lesson__item">
        <Link to={`/${this.props.lesson.name}`}>
          {this.props.lesson.name}
        </Link>
      </li>
    )
  }
});
