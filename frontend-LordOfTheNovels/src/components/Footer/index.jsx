import React from 'react'

import { Link } from "react-router-dom"

import { FaFacebook, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa"
import logo from "../../assets/Logo-White.png"
import * as Styles from "./style"

const Footer = () => {
  return (
    <Styles.Container>
      <Styles.Section>
        <Styles.Social>
          <img src={logo} alt="Logo" />
          <Styles.ListSocial>
            <Link to={"/"} className='socialLink'>
              <li><FaFacebook/></li>
            </Link>
            <Link to={"/"} className='socialLink'>
              <li><FaInstagram/></li>
            </Link>
            <Link to={"/"} className='socialLink'>
              <li><FaDiscord/></li>
            </Link>
            <Link to={"/"} className='socialLink'>
              <li><FaTiktok/></li>
            </Link>
          </Styles.ListSocial>
        </Styles.Social>

        <Styles.Recursos>
          <h1>Recursos</h1>
          <Link style={{textDecoration:"none"}}>
            <h3>Termos de Uso</h3>
          </Link>
          <Link style={{textDecoration:"none"}}>
            <h3>Política de Privacidade</h3>
          </Link>
        </Styles.Recursos>

      </Styles.Section>

      <Styles.InfoSection>
        <p>Copyright © 2023 Lord Of The Novels. All Rights Reserved</p>
        <p>Isenção de responsabilidade: Este site Lord Of The Novels não armazena nenhum arquivo em seu servidor. Todos os conteúdos são fornecidos por terceiros não afiliados.</p>
      </Styles.InfoSection>
    </Styles.Container>
  )
}

export default Footer