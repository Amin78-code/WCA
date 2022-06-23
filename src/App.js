import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/main/Main'
// import Reviews from './components/body/Reviews'
// import Testimonials from './components/body/testimonials/AllTestimonials'

function App() {

  return (
    <React.Fragment>
      <Router>
        <Switch>
         {/* /* <Route exact path="/whole-cell-online-site/" component={Main}/> */}
         <Route exact path="/" component={Main}/>
          {/* <Route exact path="/whole-cell-online-site/reviews" component={Reviews}/>
          <Route exact path="/whole-cell-online-site/testimonials" component={Testimonials}/> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
