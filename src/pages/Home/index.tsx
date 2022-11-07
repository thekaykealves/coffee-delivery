import imageCoffee from '../../provider/coffeesImage/Image-coffee.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import { OurCofes } from './OurCofes'

import {
  DeferentialInfosContainer,
  DivColorContainer,
  HomeContainer,
} from './style'

const iconSize = 16

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <DeferentialInfosContainer>
            <span>
              <DivColorContainer variant="yellowDark">
                <ShoppingCart size={iconSize} weight="fill" />
              </DivColorContainer>
              Compra simples e segura
            </span>
            <span>
              <DivColorContainer variant="baseText">
                <Package size={iconSize} weight="fill" />
              </DivColorContainer>
              Embalagem mantém o café intacto
            </span>
            <span>
              <DivColorContainer variant="yellow">
                <Timer size={iconSize} weight="fill" />
              </DivColorContainer>
              Entrega rápida e rastreada
            </span>
            <span>
              <DivColorContainer variant="brandPurple">
                <Coffee size={iconSize} weight="fill" />
              </DivColorContainer>
              O café chega fresquinho até você
            </span>
          </DeferentialInfosContainer>
        </div>
        <img src={imageCoffee} alt="Imagem de um copo de café" />
      </HomeContainer>

      <OurCofes />
    </>
  )
}
