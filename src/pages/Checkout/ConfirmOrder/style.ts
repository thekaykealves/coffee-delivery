import styled from 'styled-components'

export const HorizontalCardCoffee = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 64px;
    height: 64px;
  }

  strong {
    white-space: nowrap;
  }
`

export const DivInfosCoffee = styled.div`
  width: 170px;
  margin-right: 50px;
  margin-left: 20px;
`

export const DivButtonRemoveItem = styled.div`
  button {
    margin-top: 8px;
    padding: 6.5px 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    text-transform: uppercase;
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme.colors['base-200']};
    background-color: ${(props) => props.theme.colors['base-400']};
    cursor: pointer;

    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const DivTotalInfosContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const DivTotalInfos = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DivTotal = styled(DivTotalInfos)`
  font-size: 20px;
`

export const DivSeparator = styled.div`
  margin-block: 24px;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors['base-300']};
`
