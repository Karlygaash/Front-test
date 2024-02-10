import '../styles/MainPage.scss'
import { RiBatteryChargeFill } from "react-icons/ri";
import { FaCircleQuestion } from "react-icons/fa6";
import { BsPciCardNetwork } from "react-icons/bs";

const IpAddress = () => {
    return(
        <div className='section'>
            <h3 className='section__title'>Блок IP-адресов</h3>
            <div className='section__list'>
                <div className='section__item'>
                    <BsPciCardNetwork className='section__item-icon'/>
                   <form className='form'>
                        <div className='select-wrapper'>
                            <label className="label" for="hero">Блок IP-адресов <FaCircleQuestion className='label-icon'/></label>
                            <select className='form-select' size="1" name="hero">
                                <option className='form-option' value="t1">Блок из 4 IP-адресов (/30)</option>
                                <option value="t2">Intel</option>
                                <option value="t3">Intel</option>
                                <option value="t4">Intel</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className='section__item'>
                    <RiBatteryChargeFill className='section__item-icon'/>
                    <p className='section__description'>Мы поддерживаем IPv6 и можем предоставить
                    блок IP-адресов /64 бесплатно. </p>
                </div>
            </div>

            <p className='section__price-currency'><p className='section__price'>4 000</p>тг/мес</p>
        </div>
    );
};

export default IpAddress;