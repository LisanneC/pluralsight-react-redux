import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';


// IndexRoute will reference HomePage if just / will load Homepage if /about will load AboutPage (wrapped all in the Route)
// App component will always be loaded and nest other items, pass them as childern based on the routing (see App.js this.props.children)

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
