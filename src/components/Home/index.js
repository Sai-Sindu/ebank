import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  HomeContainer,
  HeaderCard,
  LogoImg,
  LogoutButton,
  TitleText,
  DigitalCardImg,
  DigitalCard,
} from './styledComponents'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  const onClickLogout = () => {
    console.log(props)
    const {history} = props
    history.replace('/ebank/login')
    Cookies.remove('jwt_token')
  }

  return (
    <HomeContainer>
      <HeaderCard>
        <LogoImg
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
      </HeaderCard>

      <DigitalCard>
        <TitleText>Your Flexibility, Our Excellence</TitleText>
        <DigitalCardImg
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </DigitalCard>
    </HomeContainer>
  )
}

export default Home
