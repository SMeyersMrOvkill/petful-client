import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Home/Home';
import AdoptAPet from '../AdoptAPet/AdoptAPet';

function Root() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/adopt" component={AdoptAPet} />
    </div>
  );
}

export default Root;
