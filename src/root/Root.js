import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Home/Home';
import AdoptAPet from '../AdoptAPet/AdoptAPet';
import AdoptionLine from '../AdoptionLine/AdoptionLine';

function Root() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/adopt" component={AdoptAPet} />
      <Route exact path="/line" component={AdoptionLine} />
    </div>
  );
}

export default Root;
