import CarImage from '../../../staticfiles/imgs/blue car img.png'
import OrangeCarImage from '../../../staticfiles/imgs/orange car img.png'
import Hand from '../../../staticfiles/imgs/hand img.png'
//SVG files
import Car from './svgs/car.svg'
import Camper from './svgs/camper.svg'
import Backhoe from './svgs/backhoe.svg'
import Caravan from './svgs/caravan.svg'
import Minibus from './svgs/minibus.svg'
import Motorbike from './svgs/motorbike.svg'
import Truck from './svgs/truck.svg'
import Truck2 from './svgs/truck2.svg'

import SearchIcon from './svgs/search.svg'
import BlueSearchIcon from './svgs/search.blue.svg'
import BlackPlus from './svgs/blackPlus.svg'

import TeamLine from './svgs/searchRequests/teamline.svg'
import CreativeCommons from './svgs/searchRequests/creative-commons.svg'
import Diamond from './svgs/searchRequests/diamon.svg'
import Footprint from './svgs/searchRequests/footprint-line.svg'
import RidingLine from './svgs/searchRequests/riding-line.svg'
import SecurePayment from './svgs/searchRequests/secure-payment-line.svg'
import SnowyLine from './svgs/searchRequests/snowy-line.svg'
import SteeringLine from './svgs/searchRequests/steering-line.svg'

import ArrowDownRight from './svgs/arrowDownRight.svg'
import ArrowToRight from './svgs/arrowToRight.svg'
import ArrowUpOrange from './svgs/arrowUpOrange.svg'

import Plus from './svgs/plus.svg'
//Brands svg
import Hyndai from './svgs/brands/hyndai.svg'
import Lexus from './svgs/brands/lexus.svg'
import Chevrolet from './svgs/brands/chevrolet.svg'
import Honda from './svgs/brands/honda.svg'
import Mercedes from './svgs/brands/mercedes.svg'
// ------------


//Components
import ValueSlider from './slider/slider.component'
import DropDown from './dropdown/dropdown.component'
import CarCard from './carcard/carcard.component'
import CardSlider from './cardSlider/cardslider.component'
//-------
//External Components


//-----


import './main.content.component.scss'
import zIndex from '@mui/material/styles/zIndex'
export default function Main(props) {
  function changeFolder(e) {
    let childernList = document.getElementsByClassName('folders')[0].children[0].children;
    for (let child of childernList) {
      child.classList.remove("active");
    }
    e.target.classList.add("active");
  }
  function changeFnQFolder(e) {
    const folders = document.getElementById('FnQFolder').children;
    for (let folder of folders) {
      folder.classList.remove('active');
    }
    e.target.classList.add('active');
  }
  return (
    <div className="content">
      <span id='hook'></span>
      <div className="introTitle">
        <div className="title">
          <p className='theBigOne'>Знайди ідеальний автомобіль</p>
          <p className='theSmallOne'>Щодня нові актуальні пропозиції <br /> від перевірених дилерів.</p>
        </div>
        <div className="image">
          <img src={CarImage} alt="car" />
        </div>
      </div>
      <div className='searchBar'>
        <div className='folders'>
          <ul>
            <li onClick={changeFolder}>Всі</li>
            <li onClick={changeFolder}>Новий</li>
            <li onClick={changeFolder}>Вживаний</li>
          </ul>
        </div>
        <div className="form">
          <div className="chooseType">
            <ul>
              <li>
                <div className="wrapper">
                  <img src={Car} alt="" />
                  <p>Легкові</p>
                </div>
              </li>
              <li>
                <div className="wrapper">
                  <img src={Truck} alt="" />
                  <p>Вантажівки</p>
                </div>
              </li>
              <li>
                <div className="wrapper">
                  <img src={Motorbike} alt="" />
                  <p>Мото</p>
                </div>
              </li>
              <li>
                <div className="wrapper">
                  <img src={Backhoe} alt="" />
                  <p>Сільгосптехніка</p>
                </div>
              </li>
              <li>
                <div className="wrapper">
                  <img src={Minibus} alt="" />
                  <p>Автобуси</p>
                </div>
              </li>
              <li>
                <div className="wrapper">
                  <img src={Truck2} alt="" />
                  <p>Спецтехніка</p>
                </div>
              </li>
              <li>
                <div className="wrapper">
                  <img src={Caravan} alt="" />
                  <p>Причепи</p>
                </div>
              </li>
              <li>
                <div className="wrapper">
                  <img src={Camper} alt="" />
                  <p>Автобудинки</p>
                </div>
              </li>

            </ul>
          </div>
          <div className="formElements">
            <div className="leftSide">
              <DropDown />
              <DropDown />
              <DropDown />
              <div className="extendedSearch">
                <img src={BlueSearchIcon} alt="" /><span>Розширений пошук</span>
              </div>
            </div>
            <div className="rightSide">
              <div className="ageRange">
                <p>Роки</p>
                <div className="row">
                  <DropDown /> <em>до</em> <DropDown />
                </div>

              </div>
              <div className="priceSlider">
                <p>Ціна</p>
                <ValueSlider width="610px"/>
                <div className="sliderRange">
                  <span>6000$</span><span>12000$</span>
                </div>
              </div>
              <div className='searchButton'>
                <img src={SearchIcon} alt="" /><span>Шукати</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="sellVehicle">
        <div className="leftSide">
          <p>Продайте свій автомобіль у 3 простих кроки!</p>
          <p>Введіть трохи деталей, розмістіть оголошення у нас, знайдіть ідеального покупця</p>
          <div className="sellButton">
            Продати автомобіль
          </div>
        </div>
        <div className="rightSide">
          <img src={OrangeCarImage} alt="" />
        </div>

      </div>
      <div className="popularSearchRequests">
        <div className="wrapper">
          <p>Популярні пошукові запити</p>
          <div className='buttons'>
            <div className='row'>
              <div className="button">
                <img src={TeamLine} alt="" /><span>Сімейний</span>
              </div>
              <div className="button">
                <img src={SnowyLine} alt="" /><span>Найкраще в снігу</span>
              </div>
              <div className="button">
                <img src={SecurePayment} alt="" /><span>Надійний і доступний</span>
              </div>
              <div className="button">
                <img src={RidingLine} alt="" /><span>Спортивний</span>
              </div>
            </div>
            <div className='row'>
              <div className="button">
                <img src={Diamond} alt="" /><span>Доступна розкіш</span>
              </div>
              <div className="button">
                <img src={Footprint} alt="" /><span>Пригоди і бездоріжжя</span>
              </div>
              <div className="button">
                <img src={CreativeCommons} alt="" /><span>Продаж від власника</span>
              </div>
              <div className="button">
                <img src={SteeringLine} alt="" /><span>Економія палива</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="freshOffers">
        <div className='wrapper'>
          <div><p>Найновіші з пропозицій</p></div>
          <CardSlider />
        </div>
        <div className="button">
          <span>Більше пропозицій </span><img src={ArrowDownRight} alt="" />
        </div>
      </div>
      <div className="favoriteBrands">
        <div className="wrapper">
          <p className='title'>Шукайте улюблені бренди</p>
          <div className="brands">
            <div className="brand">
              <img src={Hyndai} alt="" />
              <p>HYUNDAI</p>
              <p>220 в наявності</p>
            </div>
            <div className="brand">
              <img src={Lexus} alt="" />
              <p>LEXUS</p>
              <p>220 в наявності</p>
            </div>
            <div className="brand">
              <img src={Mercedes} alt="" />
              <p>MERCEDES</p>
              <p>220 в наявності</p>
            </div>
            <div className="brand">
              <img src={Honda} alt="" />
              <p>HONDA</p>
              <p>220 в наявності</p>
            </div>
            <div className="brand">
              <img src={Chevrolet} alt="" />
              <p>CHEVROLET</p>
              <p>220 в наявності</p>
            </div>
          </div>
          <div className="button">
            <span>Більше пропозицій </span><img src={Plus} alt="" />
          </div>
        </div>
      </div>
      <div className="advices">
        <div className="wrapper">
          <p>Важливо про автомобілі</p>
          <div className="list">
            <p><img src={ArrowToRight} alt="" /><span>Як вибрати авто</span></p>
            <p><img src={ArrowToRight} alt="" />Особливості техогляду</p>
            <p><img src={ArrowToRight} alt="" />Тонкощі спілкування зі співробітниками поліції</p>
            <p><img src={ArrowToRight} alt="" />Де і чим заправляти своє авто</p>
            <p><img src={ArrowToRight} alt="" />Обслуговування автомобіля</p>
            <p><img src={ArrowToRight} alt="" />Поради по страхуванню авто</p>
            <p><img src={ArrowToRight} alt="" />Як продати авто</p>
          </div>
          <div className="image">
            <img src={Hand} alt="" />
          </div>
        </div>


      </div>
      <div className="FnQ">
        <div className="wrapper">
          <p>Часті запитання</p>
          <div className="lists">
            <div className="folders" id='FnQFolder'>
              <div onClick={changeFnQFolder}>Купівля</div>
              <div onClick={changeFnQFolder}>Продаж</div>
              <div onClick={changeFnQFolder}>Фінанси </div>
            </div>
            <div className="content">
              <ul>
                <li>Як відбувається процес купівлі?<img src={BlackPlus} alt="" /></li>
                <li>Як перевірити надійність продавця?<img src={BlackPlus} alt="" /></li>
                <li>В яких країнах дійсний ваш сервіс?<img src={BlackPlus} alt="" /></li>
                <li>Які переваги вашого сервісу?<img src={BlackPlus} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="backToStart">

        <div className="button "><a  href="#hook">
          <div>
          <img src={ArrowUpOrange} alt="" />
          <span>На початок</span>
          </div>
          
        </a>
        </div>
      </div>


    </div>

  );
}