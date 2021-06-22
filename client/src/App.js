import React, { Component } from 'react'
import axios from 'axios'
import Api from './components/Api'

class App extends Component {
  state ={
    users:[]
  }

  async componentDidMount(){
    const users = await axios.get('/api/users')
    this.setState({
      users:users.data
    })
    console.log(users.data)
  }
  
  createUser=async(users)=>{
    const user = await axios.post('/api/users',{
      name:users.name,
      email:users.email,
      password:users.password
    })
    console.log(user)
  }

  render() {
    return (
      <div>
        <Api createUser={this.createUser}/>
      </div>
    )
  }
}

export default App

