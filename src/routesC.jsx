import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import Speaker from './componentsC/SpeakerC/SpeakerC'
// import Board from './componentsC/Board/Board'
import Audience from './componentsC/AudienceC/AudienceC'

export default class RoutesC extends React.Component {
 render() {
  return (
   <BrowserRouter>
    {/* <Route exact path="/" component={Audience} /> */}
    <Route exact path="/" render={() => <Audience {...this.props} />} />
    {/* <Route exact path="/board" component={Board} /> */}
    <Route exact path="/speaker" render={() => <Speaker {...this.props} />} />
   </BrowserRouter>
  )
 }
}
