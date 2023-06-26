import './carCardPage.component.scss'
import Avatar from './avatar.jpg'
import MapPin from './map-pin-2-line.svg'
import Scales from './scales.svg'
import Heart from './heart.svg'
import Phone from './phone-line.svg'

import Speedometer from './speedometer.svg'
import Oil from './oil-line.svg'
import MapPinBlue from './map-pin-2-line-blue.svg'
import Steering from './steering-fill.svg'
import DoubleCheck from './check-double-line.svg'

import UAFlag from './UA.svg'
import Scale from './scaleIcon.svg'
import ArrowRight from './arrow-right-line.svg'


import Map from './map.png'
import MainCar from './mainCar.png'

import sCar1 from './1.png'
import sCar2 from './2.png'
import sCar3 from './3.png'
import sCar4 from './4.png'

import { useState } from 'react';
import CardSlider from '../mainPage/cardSlider/cardslider.component'
import { unstable_deprecatedPropType } from '@mui/utils'
import CreateCar from '../../../models/car.model'
import { AdaptCity, AdaptFuelType, AdaptRegion, cars } from '../../../models/fakeDB'
import { currencyService } from '../../../services/currency.service'
import { Link } from 'react-router-dom'
export default function CarCardPage(props) {
    let car = props.car
    console.log(car);
    if(car == undefined){
        car = cars[0]
    }
    const [isPhoneNumberShown, setState] = useState(false);
    
    function showPhoneNumber(e){
        return setState(true);
    }

    return (
        <div className="content" id='carCardPage'>
            <div className="row">
                <div className="leftSide">
                <div className="navigation"><p><span><Link to='/'>Домашня сторінка</Link></span> / <span>Вживані авто</span> / Volkswagen Golf Alltrack 2018 </p></div>
                <div className="button linkButton"><img src={Scale} alt="" />Повернутись до пошуку</div>
                    <div className="images">
                        <div className="main">
                            <img src={MainCar} alt="" />
                        </div>
                        <div className="list">
                            <div className="image"><img src={sCar1} alt="" /></div>
                            <div className="image"><img src={sCar2} alt="" /></div>
                            <div className="image"><img src={sCar3} alt="" /></div>
                            <div className="image"><img src={sCar4} alt="" /></div>
                        </div>
                    </div>
                    <div className="breefInfo">
                        <div className="stat"><img src={Speedometer} alt="" />{car.drivenDistance} тис. км</div>
                        <div className="stat"><img src={Oil} alt="" />{car.fuelType}</div>
                        <div className="stat"><img src={Steering} alt="" />{car.transmission}</div>
                        <div className="stat"><img src={MapPinBlue} alt="" />{car.region}</div>
                    </div>
                    <div className="vinAndCarCodes">
                        <div className="carCode vcc"><div className="countryBadge"><img src={UAFlag} alt="" />UA</div><div className='code'>ВС 4849 ЕН</div></div>
                        <div className="vinBadge vcc"><img src={DoubleCheck} alt="" />Перевірений VIN-код</div>
                        <div className="vinCode vcc"><div><img src={DoubleCheck} alt="" /></div> WN1ZZZ7PZ5LA2076</div>
                    </div>
                    <div className="generalSettings">
                        <div className="title">Основні характеристики</div>
                        <div className="stat">
                            <div className="statName">
                            Марка, модель, рік випуску
                            </div>
                            <div className="statValue">
                            {`${car.brand} ${car.model} ${car.year}`}
                            </div>
                        </div>
                        <div className="stat">
                            <div className="statName">
                            Двигун
                            </div>
                            <div className="statValue">
                            {car.engineVolume} л
                            </div>
                        </div>
                        <div className="stat">
                            <div className="statName">
                            Пробіг
                            </div>
                            <div className="statValue">
                            {car.drivenDistance} тис. кілометрів
                            </div>
                        </div>
                        <div className="stat">
                            <div className="statName">
                            Пальне
                            </div>
                            <div className="statValue">
                            {car.fuelType}
                            </div>
                        </div>
                        <div className="stat">
                            <div className="statName">
                            Коробка передач
                            </div>
                            <div className="statValue">
                            { car.transmission}
                            </div>
                        </div>
                        <div className="stat">
                            <div className="statName">
                            Привід
                            </div>
                            <div className="statValue">
                            {car.wheelDrive}
                            </div>
                        </div>
                    </div>
                    <div className="ownerDescription">
                        <div className="title">
                        Опис від власника
                        </div>
                        <div className="text">
                        {car.description}
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                <div className="button linkButton">Дивитись наступне авто<img src={ArrowRight} alt="" /></div>
                    <div className="title">
                    {`${car.brand} ${car.model} ${car.year}`}
                    </div>
                    <div className="price">
                        <div className="usd">{currencyService.format(car.price)} $</div>
                        <div className="uah">~ {currencyService.format(currencyService.toUAH(car.price))} грн.</div>
                    </div>
                    <div className="ownerInfo">
                        <div className="userTitle">
                            <div className="avatar"><img src={Avatar} alt="" /></div>
                            <div className="info">
                                <div className="role">Продавець</div>
                                <div className="name">{car.ownerName?car.ownerName:'Невідомо'}</div>

                            </div>
                        </div>
                        <div className="button" onClick={showPhoneNumber}>
                            <span>
                                {
                                    !isPhoneNumberShown?'Показати телефон':`${car.phoneNumber}`
                                }
                            </span><img src={Phone} alt="" /></div>
                    </div>
                    <div className="location">
                        <div className="text"><div className="title">Місцезнаходження</div>
                            <div className="locationName"><img src={MapPin} alt="" />{`${car.region}, ${car.city?car.city:''}`}</div></div>
                        <div className="image"><img src={Map} alt="" /></div>
                    </div>
                    <div className="compareNsave">
                        <div className="button"><img src={Heart} alt="" />Зберегти</div>
                        <div className="button"><img src={Scales} alt="" />Порівняти</div>
                    </div>
                    <div className="markOffer">
                        <p className="title">
                            Вважаєте це авто унікальним?
                        </p>
                        <p className="text">Ставте оцінку та беріть участь у формуванні ТОП-100 найцікавіших моделей на сайті</p>
                        <div className="button">Подобається</div>
                        <div className="button">Не подобається</div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="recomendations">
                <p>Рекомендації для вас</p>
                <CardSlider />
                </div>
            </div>
        </div>

    )
}