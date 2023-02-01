import { CardCoffee } from '../CardCoffee'
import { OurCofesContainer, OurCofesContainerGrid } from './style'

import { data } from '../../../provider/fake-api'

export function OurCofes() {
  return (
    <>
      <OurCofesContainer>
        <h2>Nossos Cafés</h2>

        <OurCofesContainerGrid>
          {data.map((coffees) => {
            return (
              <CardCoffee
                key={coffees.id}
                id={coffees.id}
                title={coffees.title}
                imageSrc={coffees.img}
                typeOfCoffee={coffees.types}
                descriptionOfCoffee={coffees.description}
                price={coffees.price}
                amount={coffees.amount}
              />
            )
          })}
        </OurCofesContainerGrid>
      </OurCofesContainer>
    </>
  )
}
