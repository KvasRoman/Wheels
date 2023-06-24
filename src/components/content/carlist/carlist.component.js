import { Slider } from '@mui/material';
import DropDown from '../mainPage/dropdown/dropdown.component';
import './carlist.component.scss'
import ValueSlider from '../mainPage/slider/slider.component';
import Search from '../mainPage/svgs/search.svg'
import BluePlus from './bluePlus.svg'
import CrossedFilter from './crossedFilter.svg'
import CloseLine from './closeLine.svg'
import CarCard from '../mainPage/carcard/carcard.component';
import CreateCar from '../../../models/car.model';
import {
    AdaptFuelType, AdaptRegion,
    cars as FDBCars,
    fuelTypes as FDBFuelTypes,
    regions as FDBRegions,
    bodyTypes as FDBBodyTypes,
    brandTypes as FDBBrandTypes,
    modelTypes as FDBModelTypes,
    transmissionTypes as FDBTransmissionTypes,
    AdaptTransmission
} from '../../../models/fakeDB';
export default function CarList() {
    // 
    // 
    // 
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //  тут задати колекції для форми
    // 
    // 
    // 
    //     
    //
    const fuelTypes = FDBFuelTypes.map(ft => {
        return { value: ft, title: AdaptFuelType(ft) }
    })
    const regions = FDBRegions.map(ft => {
        return { value: ft, title: AdaptRegion(ft) }
    })
    const bodyTypes = FDBBodyTypes.map(ft => {
        return { value: ft, title: ft }
    })
    const brandTypes = FDBBrandTypes.map(ft => {
        return { value: ft, title: ft }
    })
    const modelTypes = FDBModelTypes.map(ft => {
        return { value: ft, title: ft }
    })

    const transmissionTypes = FDBTransmissionTypes.map(ft => {
        return { value: ft, title: AdaptTransmission(ft) }
    })
    // 
    // 
    // 
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function changeActiveVType(e) {
        let childernList = document.getElementById('vTypeList1').children;
        for (let child of childernList) {
            child.classList.remove("active");
        }
        childernList = document.getElementById('vTypeList2').children;
        for (let child of childernList) {
            child.classList.remove("active");
        }
        e.target.classList.add("active");
    }
    function changeActiveCarWear(e) {
        let childernList = document.getElementById('carWear').children;
        for (let child of childernList) {
            child.classList.remove("active");
        }
        e.target.classList.add("active");
    }
    console.log(FDBCars[0])

    return (
        <>
            <div className="content" id='searchPage'>
                <div className="wrapper">
                    <div className="row navigation"><span>Домашня сторінка</span> / Вживані </div>
                    <div className="row types" id='vTypeList1'>
                        <div className="button" onClick={changeActiveVType} value='lehkovy'>Легкові</div>
                        <div className="button" onClick={changeActiveVType} value='moto'>Мото</div>
                        <div className="button" onClick={changeActiveVType} value='vantazhny'>Вантажівки</div>
                        <div className="button" onClick={changeActiveVType} value='spetz'>Спецтехніка</div>
                    </div>
                    <div className="row types" id='vTypeList2'>
                        <div className="button" onClick={changeActiveVType} value='silhos'>Сільгосптехніка</div>
                        <div className="button" onClick={changeActiveVType} value='avtobus'>Автобуси</div>
                        <div className="button" onClick={changeActiveVType} value='prychepy'>Причепи</div>
                        <div className="button" onClick={changeActiveVType} value='avtobudynky'>Автобудинки</div>
                    </div>
                </div>
                <div className="row filtersAndResults">
                    <div className="filters">
                        <p className='title'>Фільтри</p>
                        <div className="carWear" id='carWear'>
                            <div className="button" onClick={changeActiveCarWear} value='any'>Всі</div>
                            <div className="button" onClick={changeActiveCarWear} value='old'>Вживані</div>
                            <div className="button" onClick={changeActiveCarWear} value='new'>Нові</div>
                        </div>
                        <div className="region dropdown">
                            <p>Регіон</p>
                            <DropDown items={regions} />
                        </div>
                        <div className="carBody dropdown">
                            <p>Тип кузова</p>
                            <DropDown items={bodyTypes} />
                        </div>
                        <div className="Price slider">
                            <p>Ціна</p>
                            <ValueSlider width="360px" />
                            <div className="sliderRange">
                                <span>6000$</span>
                                <span>12000$</span>
                            </div>

                        </div>
                        <div className="distanceTraveled slider">
                            <p>Пробіг</p>
                            <ValueSlider width="360px" />
                            <div className="sliderRange">
                                <span>6000$</span>
                                <span>12000$</span>
                            </div>
                        </div>
                        <div className="Brand dropdown">
                            <p>Марка</p>
                            <DropDown items={brandTypes} />
                        </div>
                        <div className="Model dropdown">
                            <p>Модель</p>
                            <DropDown items={modelTypes} />
                        </div>
                        <div className="Age dropdown fromto">
                            <p>Роки</p>
                            <div className='row'>
                                <DropDown />
                                <p>до</p>
                                <DropDown />
                            </div>
                        </div>
                        <div className='button addMark '><img src={BluePlus} alt="" /> Додати ще марку</div>
                        <div className="includeModel dropdown">
                            <p>Виключити модель</p>
                            <DropDown />
                        </div>
                        <div className="checkbox">
                            <p>Коробка передач</p>
                            <div className="box">
                                {
                                    transmissionTypes.map((f, index) =>
                                        <div>
                                            <input type='checkbox' name={'TM'} value={f.value} id={'TM' + index} />
                                            <label htmlFor={'TM' + index}>{f.title}</label>
                                        </div>)
                                }
                                

                            </div>
                        </div>
                        <div className="checkbox">
                            <p>Паливо</p>

                            <div className="box">
                                {
                                    fuelTypes.map((f, index) =>
                                        <div>
                                            <input type='checkbox' name={'FT'} value={f.value} id={'FT' + index} />
                                            <label htmlFor={'FT' + index}>{f.title}</label>
                                        </div>)
                                }
                                <div>
                                    <input type='checkbox' name='thing8' value='valuable' id="thing8" />
                                    <label htmlFor="thing8">Інше</label>
                                </div>
                            </div>
                        </div>
                        <div className="checkbox">
                            <p>Тип приводу</p>
                            <div className="box">
                                <div>
                                    <input type='checkbox' name='thing0' value='valuable' id="thing0" />
                                    <label htmlFor="thing0">Повний</label>
                                </div>
                                <div>
                                    <input type='checkbox' name='thing11' value='valuable' id="thing11" />
                                    <label htmlFor="thing11">Передній</label>
                                </div>
                                <div>
                                    <input type='checkbox' name='thing12' value='valuable' id="thing12" />
                                    <label htmlFor="thing12">Задній</label>
                                </div>
                            </div>
                        </div>
                        <div className="Age dropdown fromto">
                            <p>Роки</p>
                            <div className='row'>
                                <DropDown />
                                <p>до</p>
                                <DropDown />
                            </div>
                        </div>
                        <div className="checkbox">
                            <p>Розмитнений</p>
                            <div className="box">
                                <div>
                                    <input type='checkbox' name='thing0' value='valuable' id="thing0" />
                                    <label htmlFor="thing0">Розмитнений</label>
                                </div>
                                <div>
                                    <input type='checkbox' name='thing11' value='valuable' id="thing11" />
                                    <label htmlFor="thing11">Нерозмитнений</label>
                                </div>
                            </div>
                        </div>
                        <div className="state dropdown">
                            <p>Стан</p>
                            <DropDown />
                            <DropDown />
                            <DropDown />
                        </div>
                        <div className='dropAllFilters'><img src={CrossedFilter} alt="" /> Скинути всі фільтри</div>
                        <div className='ExtendedSearch'><img src={Search} alt="" />Розширений пошук</div>
                    </div>
                    <div className="rightSide">
                        <div className="searchBar"><input type="text" /><div>Шукати<img src={Search} alt="" /></div></div>
                        {/* <div className="tags"><div><div className="tag"><img src={CloseLine} alt="" />a</div></div>
                            <div className='saveSearch'><div>Зберегти пошук</div>
                            </div>
                        </div> */}
                        <div className="resultCount"><p>216 результатів</p></div>
                        <div className="orderByAndOfferQuantity">
                            <div className="orderBy">
                                <DropDown />
                            </div>
                            <div className="offerQuantity">
                                <DropDown />
                            </div>
                        </div>
                        <div className="carCollection">
                            <CarCard />
                            <CarCard />
                            <CarCard />
                            <CarCard />
                            <CarCard />
                            <CarCard />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}