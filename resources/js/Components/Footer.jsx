//css
import './Footer.css';
//Imagem
import Logo from '../../img/logo.jpeg';
//Icons
import {MdEmail, MdLocationOn} from 'react-icons/Md';
import {BsFillTelephoneFill, BsWhatsapp,BsGithub,BsLinkedin} from 'react-icons/Bs';
import {FaInstagram} from 'react-icons/Fa';

export default function Footer() {
  return (
    <footer>
        <div className='div-img'>
            <img src={Logo} alt='Mestre da massa' title='pizzaria' width='250px'/>
        </div>
        <div className='div-info'>
            <h6>Contato</h6>
            <ul>
                <li>
                    <p><MdEmail /> kaiogbar@hotmail.com</p>
                </li>
                <li>
                    <p><BsFillTelephoneFill /> (11)99999-9999</p>
                </li>
                <li>
                    <p><MdLocationOn /> São Paulo - SP</p>
                </li>
            </ul>
        </div>
        <div className='div-redes'>
            <h6>Redes Socias</h6>
            {/* <ul>
                <li>
                    <a href="#"><FaInstagram /></a>
                </li>
                <li>
                    <a href="#"><BsWhatsapp /></a>
                </li>
                <li>
                    <a href="#"><BsGithub /></a>
                </li>
                <li>
                    <a href="#"><BsLinkedin /></a>
                </li>
            </ul> */}
        </div>
    </footer>
  )
}
