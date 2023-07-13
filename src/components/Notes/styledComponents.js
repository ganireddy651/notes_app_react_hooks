import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#d8d8d8' : '#000000')};
  min-height: 100vh;
  padding: 30px;
  text-align: center;
  @media screen and (max-width: 576px) {
    padding: 15px;
  }
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-weight: 600;
  font-weight: 'Roboto';
  font-size: 42px;
`
export const NotesContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-height: 300px;
  box-shadow: 1px 1px 1px 1px #bfbfbf;
  border-radius: 10px;
  padding: 20px;
  text-align: end;
  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`

export const InputElement = styled.input`
  outline: none;
  border: none;
  width: 100%;
`

export const TextAreaElement = styled.textarea`
  outline: none;
  width: 100%;
  border: none;
  margin-top: 20px;
`
export const AddButton = styled.button`
  color: #ffffff;
  background-color: #4c63b6;
  height: 35px;
  width: 60px;
  outline: none;
  border: none;
  margin-top: 10px;
  border-radius: 3px;
  font-size: 15px;
`
