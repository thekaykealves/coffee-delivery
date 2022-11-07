import { Coffee } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Form } from './Form'
import { ManWithCoffeeImage } from './ManWithCoffeeImage'
import { CheckoutTitle, NoCoffeeSelectedDiv } from './style'

export function Checkout() {
  const { amountCoffeesSelected } = useContext(CoffeeContext)

  return (
    <>
      <div>
        {amountCoffeesSelected.length > 0 ? (
          <div>
            <CheckoutTitle>
              <h2>Complete seu pedido</h2>
              <h2>Cafés selecionados</h2>
            </CheckoutTitle>

            <Form />
          </div>
        ) : (
          <NoCoffeeSelectedDiv>
            <h1>
              Nenhum café encontrado!
              <Coffee size={24} color="#8047F8" weight="fill" />
            </h1>
            <p>
              Volte a <NavLink to="/">página inicial</NavLink> e adicione os
              cafés desejados ao carrinho.
            </p>

            <ManWithCoffeeImage />
          </NoCoffeeSelectedDiv>
        )}
      </div>
    </>
  )
}
