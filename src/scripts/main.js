(() => {
  'use strict';

  const Router= ReactRouter.Router;
  const Route = ReactRouter.Route;
  const browserHistory = ReactRouter.browserHistory;

  const jsonUrl = 'https://raw.githubusercontent.com/shgtkshruch/dotinstall-lesson-list/master/dotinstall-lesson-list.json';

  fetch(jsonUrl)
    .then(res => {
      return res.json();
    }).then(json => {
      ReactDOM.render((
        <Router history={browserHistory}>
          <Route path="/" data={json} component={DotinstallLessonSearch} />
          <Route path="/:lessonName" data={json} component={LessonRoute} />
        </Router>
      ), document.getElementById('react')
      );
    });
})();
