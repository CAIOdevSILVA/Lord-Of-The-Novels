import { Link } from 'react-router-dom'

import { AiOutlineInstagram, AiOutlineFacebook,  } from "react-icons/ai"
import { RiDiscordLine } from "react-icons/ri"
import { FaTiktok } from "react-icons/fa"
import img from '../../assets/Logo-White.png'

import * as Styles from "./style"

const Footer = () => {
  return (
    <Styles.Container>
      <div className='content'>
        <div>
          <div className='logo'>
            <img src={img} alt="Logo light" />
          </div>
          <ul className='socialMedia'>
            <li className='item'>
              <Link to={"https://instagram.com"} ><AiOutlineInstagram size={24}/></Link>
            </li>
            <li>
              <Link to={"https://faecbook.com"} ><AiOutlineFacebook size={24}/></Link>
            </li>
            <li>
              <Link to={"https://discord.com"} ><RiDiscordLine size={24}/></Link>
            </li>
            <li>
              <Link to={"https://tiktok.com"} ><FaTiktok size={24}/></Link>
            </li>
          </ul>
        </div>
        <div className='resource'>
          <h2>Recursos</h2>
          <ul className='resourceContent'>
            <li>
              <Link to={"/termos"}>Termos de uso</Link>
            </li>
            <li>
              <Link to={"/politica"}>Política de Privacidade</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='info' >
        <p>Copyright © 2023 Lord Of The Novels. All Rights Reserved</p>
        <p>Isenção de responsabilidade: Este site Lord Of The Novels não armazena nenhum arquivo em seu servidor. Todos os conteúdos são fornecidos por terceiros não afiliados.</p>
      </div>
    </Styles.Container>
  )
}

export default Footer