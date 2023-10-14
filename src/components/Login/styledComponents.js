import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #152850;
`
export const LoginContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #e0eefe;
  width: 90%;
  border-radius: 20px;
`
export const WebsiteLoginImgContainer = styled.div`
  width: 50%;
`
export const WebsiteLoginImg = styled.img`
  height: 300px;
`
export const LoginCard = styled.div`
  width: 50%;
  background-color: #ffffff;
  height: 80vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto';
  padding: 10px;
`
export const LoginTitle = styled.h1`
  font-size: 30px;
  color: #183b56;
`
export const LoginFormCard = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputCard = styled.input`
  border: 1px solid #5a7184;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;
`
export const LabelText = styled.label`
  color: #5a7184;
  font-size: 15px;
  margin-bottom: 5px;
`
export const LoginButton = styled.button`
  border: none;
  background-color: #1565d8;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  text-align: center;
`
