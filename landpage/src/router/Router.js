import Loan1 from '../view/Loan1'
import Loan2 from '../view/Loan2'
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Loan1}/>
      <Route path="/Loan1" component={Loan1}/>
      <Route path="/Loan2" component={Loan2}/>
    </div>
  </Router>
)
export default BasicExample
