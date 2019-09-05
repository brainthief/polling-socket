import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
 const { status, title } = props.mainPage
 return (
  <h1>{title} - {status ? 'connected' : 'disconencted'}</h1>
 )
}

const mapStateToProps = (state) => {
 return {
  mainPage: state.mainPage
 }
}

export default connect(mapStateToProps, null)(Header)