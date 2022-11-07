import Switch from 'react-switch'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { NavLink } from 'react-router-dom'

import LogoCoffeeDelivery from '../../provider/coffeesImage/coffee-cup.png'

import {
  DivLocation,
  DivShoppingCart,
  HeaderContainer,
  HeaderWrapper,
} from './style'

import { ThemeContext } from 'styled-components'

interface Props {
  toggleTheme: () => void
}

export function Header({ toggleTheme }: Props) {
  const { name, colors } = useContext(ThemeContext)
  const { amountCoffeesSelected } = useContext(CoffeeContext)

  const totalCoffeesSelected = amountCoffeesSelected.length

  return (
    <>
      <HeaderContainer>
        <NavLink to="/">
          <img src={LogoCoffeeDelivery} alt="Logo" />
        </NavLink>
        <HeaderWrapper>
          <Switch
            onChange={toggleTheme}
            checked={name === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={30}
            offColor={colors['base-700']}
            onColor={colors['base-900']}
          />
          <DivLocation>
            <MapPin size={22} color="#8047F8" weight="fill" />
            <span>São Paulo, SP</span>
          </DivLocation>
          <NavLink to="/checkout">
            <DivShoppingCart>
              <ShoppingCart size={22} weight="fill" />
              {totalCoffeesSelected > 0 ? (
                <span>{totalCoffeesSelected}</span>
              ) : (
                <></>
              )}
            </DivShoppingCart>
          </NavLink>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  )
}
