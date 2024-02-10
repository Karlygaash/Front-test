import '../styles/MainPage.scss'
import { RiBatteryChargeFill } from "react-icons/ri";
import { FaCircleQuestion } from "react-icons/fa6";
import { HiMiniCpuChip } from "react-icons/hi2";
import { MdOutlineLaptopWindows } from "react-icons/md";
import { FaMemory } from "react-icons/fa6";

const Server1 = ()=>{
    return(
        <div className='section'>
                <h3 className='section__title'>Сервер 1</h3>
                <div className='section__list'>
                    <div className='section__item item-first'>
                        <HiMiniCpuChip className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">Процессор</label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">2 × Intel Xeon E5-2620 v3 2.40/3.20 Ггц (всего 12 ядер, 24 потока)</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>19 000 тг/мес</p>
                        </form>
                    </div>

                    <div className='section__item'>
                        <FaMemory className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">ОЗУ</label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">32 Гб</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>19 000 тг/мес</p>
                        </form>
                    </div>

                    <div className='section__item'>
                        <RiBatteryChargeFill className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">Системный диск 1</label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">SSD 120 Гб SATA</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>19 000 тг/мес</p>
                        </form>
                    </div>

                    <div className='section__item'>
                        <RiBatteryChargeFill className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">Диск 2</label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">Нет</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>0 тг/мес</p>
                        </form>
                    </div>

                    <div className='section__item'>
                        <RiBatteryChargeFill className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">Системный диск 3</label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">Нет</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>0 тг/мес</p>
                        </form>
                    </div>
                </div>
                <p className='section__add-disk'>Добавить еще дисков</p>
                <div className='section__list'>
                    <div className='section__item'>
                        <MdOutlineLaptopWindows className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">Сетевой порт 1</label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">1 Gbit/s</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>19 000 тг/мес</p>
                        </form>
                    </div>

                    <div className='section__item'>
                        <MdOutlineLaptopWindows className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">Сетевой порт 2</label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">1 Gbit/s</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>19 000 тг/мес</p>
                        </form>
                    </div>

                    <div className='section__item'>
                        <MdOutlineLaptopWindows className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">RAID 12Gbit/s</label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">Нет</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>0 тг/мес</p>
                        </form>
                    </div>

                    <div className='section__item'>
                        <MdOutlineLaptopWindows className='section__item-icon'/>
                        <form className='form'>
                            <div className='select-wrapper'>
                                <label className="label" for="hero">IPMI <FaCircleQuestion className='label-icon'/></label>
                                <select className='form-select' size="1" name="hero">
                                    <option className='form-option' value="t1">Нет</option>
                                    <option value="t2">Intel</option>
                                    <option value="t3">Intel</option>
                                    <option value="t4">Intel</option>
                                </select>
                            </div>
                            <p className='select-price'>0 тг/мес</p>
                        </form>
                    </div>
                </div>

                <p className='section__description description_1'>Все сервера комплектуются двумя блоками питания и подключаются к независимым линиям электроснабжения.</p>
                <p className='section__price-currency'><p className='section__price'>232 000</p>тг/мес</p>
            </div>
    )
}

export default Server1;