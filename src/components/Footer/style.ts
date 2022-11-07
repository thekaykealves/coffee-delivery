import styled from 'styled-components'

export const FooterContainer = styled.div`
  margin-top: 30px;
  border-top: 1px solid ${(props) => props.theme.colors['base-300']};
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors['base-50']};
  padding-block: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialNetworks = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: ${(props) => props.theme.colors['brand-yellow']};

    transition: 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }
`
