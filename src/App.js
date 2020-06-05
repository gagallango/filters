import React, { Component } from 'react'
import Users from '../src/Users/Users'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      search: ""
    }
  }

  updateSearch(e) {
    this.setState({ search: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({ users: response })
      })
  }

  render() {

    const { search } = this.state;
    const filteredUsers = this.state.users.filter(user => {
      if (user.username.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        return user.username
      } else if (user.email.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        return user.email
      } else if (user.website.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        return user.website
      }
    })

    return (
      <>
        <div className="search-box">
          <h2>Usuarios</h2>
          <input type="text" placeholder="Busca por nombre, email o website" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        </div>
        <table>
          <thead>
            <tr className="table-r">
              <th>Id</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody className="tbody-r">
            {filteredUsers.map(elm =>
              <Users id={elm.id} username={elm.username} email={elm.email} address={elm.address} website={elm.website} />
            )}
          </tbody>
        </table>
      </>
    )
  }

}

export default App;
