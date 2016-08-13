const DotinstallLessonSearch = React.createClass({
  getInitialState() {
    return {
      filterText: ''
    };
  },

  handleChange(e) {
    this.setState({
      filterText: e.target.value
    });
  },

  render() {
    var lessons = [];
    this.props.route.data.forEach((lesson, index) => {
      if (lesson.name.toLowerCase().indexOf(this.state.filterText) === -1) {
        return;
      }
      lessons.push(<LessonComponent key={index} lesson={lesson} />);
    });

    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange}/>
        </form>
        <ul className="lesson">
          {lessons}
        </ul>
      </div>
    );
  }
});
