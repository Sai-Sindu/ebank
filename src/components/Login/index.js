import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  AppContainer,
  LoginContainer,
  WebsiteLoginImgContainer,
  WebsiteLoginImg,
  LoginCard,
  LoginTitle,
  LoginFormCard,
  InputCard,
  LabelText,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', showErrorMsg: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/ebank/login'

    const userCredentials = {user_id: userId, pin}

    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, pin, showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <LoginContainer>
          <WebsiteLoginImgContainer>
            <WebsiteLoginImg
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </WebsiteLoginImgContainer>
          <LoginCard>
            <LoginTitle>Welcome Back!</LoginTitle>
            <LoginFormCard onSubmit={this.onSubmitForm}>
              <LabelText htmlFor="userId">User ID</LabelText>
              <InputCard
                type="text"
                placeholder="Enter User ID"
                id="userId"
                value={userId}
                onChange={this.onChangeUserId}
              />
              <LabelText htmlFor="pin">PIN</LabelText>
              <InputCard
                type="password"
                placeholder="Enter PIN"
                id="pin"
                value={pin}
                onChange={this.onChangePin}
              />
              <LoginButton type="submit">Login</LoginButton>
              {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
            </LoginFormCard>
          </LoginCard>
        </LoginContainer>
      </AppContainer>
    )
  }
}

export default Login
