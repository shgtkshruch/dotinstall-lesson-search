const DotinstallLessonSearch = React.createClass({
  getInitialState() {
    return {
      data: [],
      filterText: ''
    };
  },

  componentDidMount() {
    fetch(this.props.url)
      .then(res => {
        return res.json();
      }).then(json => {
        this.setState({
          data: json
        });
      });
  },

  handleChange(e) {
    this.setState({
      filterText: e.target.value
    });
  },

  render() {
    var lessons = [];
    this.state.data.forEach((lesson, index) => {
      if (lesson.name.toLowerCase().indexOf(this.state.filterText) === -1) {
        return;
      }
      lessons.push(<Lesson key={index} lesson={lesson} />);
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
