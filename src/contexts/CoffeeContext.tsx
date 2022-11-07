import { createContext, ReactNode, useState } from 'react'

export interface CardProps {
  id: number
  imageSrc: string
  typeOfCoffee: string[]
  descriptionOfCoffee: string
  title: string
  price: number
  amount: number
}

interface CoffeeContextType {
  amountCoffeesSelected: CardProps[]
  setCoffeeSelected: (coffee: CardProps) => void
  setRemoveCoffee: (coffee: CardProps) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [amountCoffeesSelected, setAmountCoffeesSelected] = useState<
    CardProps[]
  >([])

  function setCoffeeSelected(coffee: CardProps) {
    setAmountCoffeesSelected((state) => [...state, coffee])
  }

  function setRemoveCoffee(coffee: CardProps | HTMLElement) {
    const coffeeRemoved = amountCoffeesSelected.findIndex(
      (cardCoffee) => cardCoffee.id === coffee.id,
    )

    const list = [...amountCoffeesSelected]

    list.splice(coffeeRemoved, 1)

    setAmountCoffeesSelected(list)
  }

  return (
    <CoffeeContext.Provider
      value={{
        amountCoffeesSelected,
        setCoffeeSelected,
        setRemoveCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
