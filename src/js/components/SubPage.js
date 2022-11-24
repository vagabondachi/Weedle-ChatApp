import React from 'react';

import { 
    HashRouter as Router, 
    Route, 
    Switch,
  } from "react-router-dom";
import DirectMsg from './DirectMsg';
import Profile from './Profile';

import TeamMsg from './TeamMsg';
  
const SubPage =() => {
return(
    <div>
        <Router>
        <Switch>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/directMsg" element={<DirectMsg/>}/>
        <Route path="/teamMsg" element={<TeamMsg/>}/>         
        </Switch>
        </Router>         
    </div>
)
}

export default SubPage;
