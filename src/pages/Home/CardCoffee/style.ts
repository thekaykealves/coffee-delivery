import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  padding: 20px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors['base-100']};
  position: relative;

  img {
    width: 120px;
    height: 120px;
    position: absolute;
    top: -24px;
    margin-bottom: 20px;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    font-size: 14px;
    line-height: 18.2px;
    color: ${(props) => props.theme.colors['base-400']};
  }
`

export const DivPrice = styled.span`
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors['base-700']};
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  line-height: 18px;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    margin-left: 3px;
  }
`

export const CardCoffeeBuy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 33px;
  letter-spacing: 1.5px;

  a {
    text-decoration: none;
  }
`

export const CardButtonBuy = styled.span`
  margin-left: 23px;
  margin-right: 8px;
  padding: 12px 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-300']};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    button {
      width: 14px;
      height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-purple']};
      border: none;
    }
  }
`

export const CoffeeCategories = styled.div`
  display: flex;
  margin-bottom: 16px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    margin-right: 4px;
    margin-top: 12px;
    border-radius: 100px;
    padding: 4px 8px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    background-color: ${(props) => props.theme.colors['brand-yellow-light']};
  }
`

export const DivShoppingCart = styled.div`
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors['base-100']};
  background-color: ${(props) => props.theme.colors['brand-purple-dark']};

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`
