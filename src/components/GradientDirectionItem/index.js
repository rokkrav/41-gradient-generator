import {CustomListItem, CustomItemButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, clickOnDirection, isActive} = props
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    clickOnDirection(value)
  }
  return (
    <CustomListItem>
      <CustomItemButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </CustomItemButton>
    </CustomListItem>
  )
}

export default GradientDirectionItem
