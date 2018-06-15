import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Route, withRouter } from 'react-router-dom'
import Login from './Component/Login'
import Jokes from './Component/Jokes'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            {localStorage.getItem('adfJWT') &&
              <button onClick={this.signout}>signout</button>}
          </div>
        </header>

        {/* <Login /> */}
        {/* <Jokes /> */}
        <Route path='/login' component={Login} />
        <Route path='/jokes' component={Jokes} />
      </div>
    )
  }
  signout = () => {
    if (localStorage.getItem('adfJWT')) {
      localStorage.removeItem('adfJWT')
      this.props.history('/login')
    }
  }
}

export default withRouter(App)
