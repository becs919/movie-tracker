import React, { Component } from 'react';


export default class NewUser extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  createUser(e) {
    e.preventDefault();
    const { signIn, history } = this.props;
    const body = JSON.stringify(this.state);

    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
      })
      .then(response => {
      if (!response.ok) {
        this.setState({ error: 'Error with sign up' })
        throw new Error(this.state.error)
      }
      else {
        response.json().then(user => {
          console.log(user)
        })
        history.push('/login')
      }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { error } = this.state
    return(
      <div className="login">
        <p>Create your MovieTracker profile!</p>
        { error && <p>{error}</p> }
        <form className="new-user">
          <input name="name" required type="name" placeholder="Name" onChange={ (e) => this.handleChange(e) }/>
          <input name="email" required type="email" placeholder="Email" onChange={ (e) => this.handleChange(e) }/>
          <input name="password" required minLength="4" type="password" placeholder="Password" onChange={ (e) => this.handleChange(e) }/>
          <button className="sign-in-btn" type="submit" onClick={ (e) => this.createUser(e) }>Create account</button>
        </form>
      </div>
    )
  }
}
