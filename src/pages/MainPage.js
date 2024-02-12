import FortiGate from '../components/FortiGate';
import IpAddress from '../components/IpAddress';
import Server1 from '../components/Server1';
import '../styles/MainPage.scss'

const MainPage = () => {
    return(
        <div className="main__page">
            <Server1/>
            <button className='button__add-server'>Добавить сервер</button>
            <IpAddress/>
            <FortiGate/>
            <div className='section__button-price'>
                <button className='button__add-order'>Добавить в корзину</button>
                <div>
                <p className='section__price-currency'>за<p className='section__price'>415 000</p>тг/мес</p>
                </div>
                <p className='section__description description_last'> В стоимость входит подключение к сети Интернет на скорости 
                до 100 Мбит/c, без ограничения объема трафика. </p>
            </div>
        </div>
    );
};

export default MainPage;