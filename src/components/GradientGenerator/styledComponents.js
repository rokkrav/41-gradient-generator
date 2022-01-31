import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const CustomParagraph = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
`

export const DirectionList = styled.ul`
  padding-left: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 65%;
    max-width: 425px;
  }
`

export const CustomInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const EachInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomColorInput = styled.input`
  width: 100px;
  height: 50px;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
`
