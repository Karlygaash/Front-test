import { RiBatteryChargeFill } from "react-icons/ri";
import { FaCircleQuestion } from "react-icons/fa6";
import { BsPciCardNetwork } from "react-icons/bs";

const FortiGate = () => {
    return(
        <div className='section'>
            <h3 className='section__title'>Фаервол FortiGate</h3>
            <div className='section__list'>
                <div className='section__item'>
                    <BsPciCardNetwork className='section__item-icon'/>
                   <form className='form'>
                        <div className='select-wrapper'>
                            <label className="label" for="hero">Выберите блок <FaCircleQuestion className='label-icon'/></label>
                            <select className='form-select' size="1" name="hero">
                                <option className='form-option' value="t1">Не заказывать</option>
                                <option value="t2">Intel</option>
                                <option value="t3">Intel</option>
                                <option value="t4">Intel</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            <p className='section__price-currency'><p className='section__price'>0</p>тг/мес</p>
        </div>
    );
};

export default FortiGate;