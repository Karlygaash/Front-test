import { Link } from 'react-router-dom';
import '../styles/Footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return(
    <footer className="footer">
        <div className="footer__container">
            <p className='footer__company'>© 2003–2023 ТОО «Интернет-компания PS»</p>
            <div className='footer__list'>
                <Link className='footer__list-link'>Контакты</Link>
                <Link className='footer__list-link'>Правила использования</Link>
                <Link className='footer__list-link'>Публичная оферта</Link>
                <Link className='footer__list-link'>Политика конфиденциальности</Link>
            </div>
            <div className='footer__socials'>
                <div className='footer__social-item'>
                    <FaFacebookF className='footer__social-item-link'/>
                </div>
                <div className='footer__social-item'>
                    <SlSocialVkontakte className='footer__social-item-link'/>
                </div>
                <div className='footer__social-item'>
                    <FaTwitter className='footer__social-item-link'/>
                </div>
                <div className='footer__social-item'>
                    <FaInstagram className='footer__social-item-link'/>
                </div>
                <div className='footer__social-item'>
                    <FaTelegramPlane className='footer__social-item-link'/>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;