import {Component} from 'react'

import {
  AppContainer,
  ContentContainer,
  Heading,
  CustomParagraph,
  DirectionList,
  CustomInputContainer,
  EachInputContainer,
  ColorText,
  CustomColorInput,
  GenerateBtn,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].value,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  clickOnDirection = direction => {
    this.setState({activeDirectionId: direction})
  }

  onChangeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onGenerate = () => {
    const {activeDirectionId, firstColorInput, secondColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeDirectionId}, ${firstColorInput}, ${secondColorInput}`,
    })
  }

  render() {
    const {
      activeDirectionId,
      firstColorInput,
      secondColorInput,
      gradientValue,
    } = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <CustomParagraph>Choose Direction</CustomParagraph>
          <DirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                isActive={activeDirectionId === eachDirection.value}
                clickOnDirection={this.clickOnDirection}
              />
            ))}
          </DirectionList>
          <CustomParagraph>Pick the Colors</CustomParagraph>
          <CustomInputContainer>
            <EachInputContainer>
              <ColorText>{firstColorInput}</ColorText>
              <CustomColorInput
                type="color"
                value={firstColorInput}
                onChange={this.onChangeFirstColor}
              />
            </EachInputContainer>
            <EachInputContainer>
              <ColorText>{secondColorInput}</ColorText>
              <CustomColorInput
                type="color"
                value={secondColorInput}
                onChange={this.onChangeSecondColor}
              />
            </EachInputContainer>
          </CustomInputContainer>
          <GenerateBtn onClick={this.onGenerate}>Generate</GenerateBtn>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
