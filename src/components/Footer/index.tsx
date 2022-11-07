import { ArrowFatLineUp, GithubLogo, InstagramLogo } from 'phosphor-react'
import { FooterContainer, SocialNetworks } from './style'

export function Footer() {
  return (
    <FooterContainer>
      <SocialNetworks>
        <a
          href="https://instagram.com/kaka__alvess"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo size={32} />
        </a>
        <a
          href="https://github.com/thekaykealves"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={32} />
        </a>
      </SocialNetworks>
      <h4>By Kayke Alves</h4>
      <a href="#">
        <ArrowFatLineUp size={32} color="#C47F17" />
      </a>
    </FooterContainer>
  )
}
