import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeInput = event => {
    const {target} = event
    this.setState({[target.name]: target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="text-input"
          value={password}
          onChange={this.onChangeInput}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="text-input"
          value={username}
          onChange={this.onChangeInput}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-bg-container">
        <div className="login-form-container">
          <img
            src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/r5af4v3v1mxqpzdgupqy"
            alt="website logo"
            className="tasty-kitchens-logo"
          />
          <h1 className="logo-heading">Tasty Kitchens</h1>
          <h1 className="login-heading">Login</h1>
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <div className="input-card">{this.renderUsernameField()}</div>
            <div className="input-card">{this.renderPasswordField()}</div>
            {showSubmitError && <p className="error-msg">{errorMsg}</p>}
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="bg-img-container">
          <img
            src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/wcpbrxrskeqjbjt83tj0"
            alt="website login"
            className="login-page-image"
          />
        </div>
      </div>
    )
  }
}

export default LoginForm
