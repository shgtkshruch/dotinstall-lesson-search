(() => {
  'use strict';

  ReactDOM.render(
    <Helloworld/>,
    document.getElementById('react')
  );

  fetch('https://raw.githubusercontent.com/shgtkshruch/dotinstall-lesson-list/master/dotinstall-lesson-list.json')
    .then(res => {
      return res.json();
    }).then(json => {
      console.log(json);
    });

})();
