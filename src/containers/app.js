import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import '../styles/index.css'
import '../styles/foundation.scss'

// load jquery and foundation in the window scope
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'


// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // children are components which defined in the routes as children of App
    const { children } = this.props
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {})(App)
