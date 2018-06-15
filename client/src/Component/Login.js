import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  state = {
    username: 'kandi',
    password: 'kandi'
  }
  render () {
    return (
      <form onSubmit={this.submitHander}>
        <div>
          <label>Username</label>
          <input
            value={this.state.username}
            onChange={this.inputHandler}
            name='username'
            type='text'
          />
        </div>
        <div>
          <label>password</label>
          <input
            value={this.state.password}
            onChange={this.inputHandler}
            name='password'
            type='password'
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    )
  }
  submitHander = event => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/api/users', this.state)
      .then(response => {
        localStorage.setItem('adfJWT', response.data.token)
        this.props.history.push('/jokes')
      })
      .catch(err => console.error(err))
  }
  inputHandler = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
}
export default Login
