import { HiMenuAlt4 } from "react-icons/hi";
import '../styles/SideBar.scss'
import { GoPersonFill } from "react-icons/go";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from '../images/logo.jpg'
import { FaLanguage } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

const SideBar = () => {
    return(
    <div className="sidebar">    
        <img className="sidebar__logo" src={Logo} alt=""/>
    
        <div className="sidebar__icons">
            <HiMenuAlt4 className="sidebar__icon-menu"/>
            <GoPersonFill className="sidebar__icon"/>
            <FaShoppingBasket className="sidebar__icon sidebar__icon-basket"/>
            <FaPhoneAlt className="sidebar__icon"/>
            <FaLanguage className="sidebar__icon sidebar__icon-languages"/>
            <IoMdMoon className="sidebar__icon"/>
        </div>
    </div>
    );
};

export default SideBar;