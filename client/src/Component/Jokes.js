import React from 'react'
import axios from 'axios'

class Jokes extends React.Component {
  state = {
    jokes: []
  }
  render() {
    return (
      <div>
        {this.state.jokes.map(joke =>
          <div key={joke._id}>
            {joke.type}
            {joke.setup}
            {joke.punchline}
          </div>
        )}
      </div>
    )
  }
  componentDidMount() {
    const token = localStorage.getItem('adfJWT')
    const requestOptions = {
      headers: {
        Authorization: token
      }
    }
    axios
      .get('http://localhost:5000/api/jokes', requestOptions)
      .then(response => {
        this.setState({ jokes: response.data })
      })
      .catch(err => {
        console.error(err)
      })
  }
}
export default Jokes
