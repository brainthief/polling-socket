import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import Speaker from './components/Speaker/Speaker'
import Board from './components/Board/Board'
import Audience from './components/Audience/Audience'

const Routes = (props) => {
 return (
  <BrowserRouter>
   {/* <Route exact path="/" component={Audience} /> */}
   <Route exact path="/" render={() => <Audience emit={props.emit} />} />
   <Route exact path="/board" component={Board} />
   <Route exact path="/speaker" render={() => <Speaker emit={props.emit} />} />
  </BrowserRouter>
 )
}

export default Routes