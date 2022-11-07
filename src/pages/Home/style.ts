import styled from 'styled-components'

const COLORS_VARIANTS = {
  yellow: 'brand-yellow',
  yellowDark: 'brand-yellow-dark',
  baseText: 'base-700',
  brandPurple: 'brand-purple',
} as const

export type ColorVariant = keyof typeof COLORS_VARIANTS

interface DivColorsProps {
  variant: ColorVariant
}

export const DivColorContainer = styled.div<DivColorsProps>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  border: none;

  color: white;
  background-color: ${(props) =>
    props.theme.colors[COLORS_VARIANTS[props.variant]]};
`

export const HomeContainer = styled.main`
  height: 544px;
  padding: 94px 0px;
  display: flex;
  justify-content: space-between;
  background-image: url(Background);

  div {
    h2 {
      width: 588px;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 48px;
      line-height: 62.4px;
      margin-bottom: 16px;
    }

    p {
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 66px;
    }

    span {
      display: flex;
      align-items: center;
    }

    span > * {
      margin-right: 12px;
    }
  }
`

export const DeferentialInfosContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;

  span {
    color: ${(props) => props.theme.colors['base-700']};
    white-space: nowrap;
  }
`
