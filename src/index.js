import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import Input from './components/input';
import Branches from './components/branches';
import Commits from './components/commits';

const App = () =>{
  return(
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Input} />
        <Route path="/branches" exact component={Branches} />
        <Route path="/commits" exact component={Commits} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));