import styled from 'styled-components'

export const CustomListItem = styled.li`
  list-style-type: none;
  width: 49%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const CustomItemButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  width: 100%;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
