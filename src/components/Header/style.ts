import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 32px 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors['base-50']};
`

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

export const DivBase = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 8px;
`

export const DivLocation = styled(DivBase)`
  display: flex;
  gap: 4px;
  color: ${(props) => props.theme.colors['brand-purple-dark']};
  background-color: ${(props) => props.theme.colors['brand-purple-light']};
`

export const DivShoppingCart = styled(DivBase)`
  background-color: ${(props) => props.theme.colors['brand-yellow-light']};
  color: ${(props) => props.theme.colors['brand-yellow-dark']};
  position: relative;
  border: none;

  span {
    position: absolute;
    content: '';
    top: -8px;
    left: 26.35px;
    width: 20px;
    height: 20px;
    clip-path: circle();
    background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }
`
