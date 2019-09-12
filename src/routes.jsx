import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import Speaker from './components/Speaker/Speaker'
import Board from './components/Board/Board'
import Audience from './components/Audience/Audience'

const Routes = (props) => {
 return (
  <BrowserRouter>
   {/* <Route exact path="/" component={Audience} /> */}
   <Route exact path="/" render={() => <Audience emit={props.emit} props={props} />} />
   <Route exact path="/board" component={Board} />
   <Route exact path="/speaker" component={Speaker} />
  </BrowserRouter>
 )
}

export default Routes