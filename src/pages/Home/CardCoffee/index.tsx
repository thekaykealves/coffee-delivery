import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeContext, CardProps } from '../../../contexts/CoffeeContext'
import { NavLink } from 'react-router-dom'

import {
  CardCoffeeBuy,
  DivShoppingCart,
  CardCoffeeContainer,
  DivPrice,
  CardButtonBuy,
  CoffeeCategories,
} from './style'

export function CardCoffee(props: CardProps) {
  const { setCoffeeSelected, setRemoveCoffee } = useContext(CoffeeContext)

  const [amountCardCoffees, setAmountCardCoffees] = useState(0)

  function handleAddCoffee() {
    const coffee = {
      id: props.id,
      imageSrc: props.imageSrc,
      typeOfCoffee: props.typeOfCoffee,
      descriptionOfCoffee: props.descriptionOfCoffee,
      title: props.title,
      price: props.price,
      amount: props.amount + 1,
    }

    setAmountCardCoffees(amountCardCoffees + 1)
    setCoffeeSelected(coffee)
  }

  function handleRemoveCoffee() {
    const coffee = {
      id: props.id,
      imageSrc: props.imageSrc,
      typeOfCoffee: props.typeOfCoffee,
      descriptionOfCoffee: props.descriptionOfCoffee,
      title: props.title,
      price: props.price,
      amount: props.amount - 1,
    }

    if (amountCardCoffees === 0) {
      return
    }

    setAmountCardCoffees(amountCardCoffees - 1)
    setRemoveCoffee(coffee)
  }

  return (
    <>
      <CardCoffeeContainer>
        <img src={props.imageSrc} alt="Imagem do café" />
        <CoffeeCategories>
          {props.typeOfCoffee.map((type, index) => {
            return <span key={index}>{type}</span>
          })}
        </CoffeeCategories>
        <h3>{props.title}</h3>
        <p>{props.descriptionOfCoffee}</p>

        <CardCoffeeBuy>
          <DivPrice>
            R$
            <strong>{props.price.toFixed(2).replace('.', ',')}</strong>
          </DivPrice>

          <CardButtonBuy>
            <div>
              <button onClick={handleRemoveCoffee}>
                <Minus size={14} />
              </button>
              <strong>{amountCardCoffees}</strong>
              <button onClick={handleAddCoffee}>
                <Plus size={14} />
              </button>
            </div>
          </CardButtonBuy>

          <NavLink to="/checkout">
            <DivShoppingCart>
              <ShoppingCart size={22} weight="fill" />
            </DivShoppingCart>
          </NavLink>
        </CardCoffeeBuy>
      </CardCoffeeContainer>
    </>
  )
}
