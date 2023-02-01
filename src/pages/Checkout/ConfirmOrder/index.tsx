import {
  DivButtonRemoveItem,
  DivInfosCoffee,
  DivSeparator,
  DivTotal,
  DivTotalInfos,
  DivTotalInfosContainer,
  HorizontalCardCoffee,
} from './style'

import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'

export function ConfirmOrder() {
  const { amountCoffeesSelected, setRemoveCoffee } = useContext(CoffeeContext)

  const deliveryFee = 5.0

  const prices = amountCoffeesSelected.map((coffee) => {
    return Number(coffee.price)
  })

  const totalPrices = prices.reduce(
    (accumulator, price) => accumulator + price,
    0,
  )

  const totalWithDeliveryFee = totalPrices + deliveryFee

  return (
    <div>
      {amountCoffeesSelected.map((coffee, index) => {
        return (
          <div key={index}>
            <HorizontalCardCoffee>
              <img src={coffee.imageSrc} alt="Imagem do café selecionado" />

              <DivInfosCoffee>
                <span>{coffee.title}</span>

                <DivButtonRemoveItem>
                  <button type="button" onClick={() => setRemoveCoffee(coffee)}>
                    <Trash size={16} color="#8047F8" />
                    Remover
                  </button>
                </DivButtonRemoveItem>
              </DivInfosCoffee>

              <strong>R$ {coffee.price.toFixed(2).replace('.', ',')}</strong>
            </HorizontalCardCoffee>

            <DivSeparator />
          </div>
        )
      })}

      <DivTotalInfosContainer>
        <DivTotalInfos>
          <span>Total de itens</span>
          <span>R$ {totalPrices.toFixed(2).replace('.', ',')}</span>
        </DivTotalInfos>
        <DivTotalInfos>
          <span>Entrega</span>
          <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
        </DivTotalInfos>
        <DivTotal>
          <strong>Total</strong>
          <strong>
            R$ {totalWithDeliveryFee.toFixed(2).replace('.', ',')}
          </strong>
        </DivTotal>
      </DivTotalInfosContainer>
    </div>
  )
}
