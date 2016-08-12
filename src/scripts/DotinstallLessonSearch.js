const DotinstallLessonSearch = React.createClass({
  getInitialState() {
    return {
      data: []
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

  render() {
    return (
      <ul className="lesson">
        {this.state.data.map((lesson, index) => {
          return <Lesson key={index} lesson={lesson} />
        })}
      </ul>
    );
  }
});
