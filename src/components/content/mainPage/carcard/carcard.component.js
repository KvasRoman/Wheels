import CarImage from './card image.png'

import Like from './like.svg'
import Dislike from './dislike.svg'
import Clock from './clock.svg'
import Heart from './heart.svg'
import Scales from './scales.svg'

import DashBoard from './statSVGs/dashBoard.svg'
import FuelTank from './statSVGs/fuelTank.svg'
import Location from './statSVGs/location.svg'
import Steering from './statSVGs/steering.svg'
import './carcard.component.scss';

export default function CarCard() {


    return (
        <div className="card">
            <div className="budge"><span>Перевірений VIN-код</span><div className='corner'><div></div></div></div>
            <div className="like"><img src={Like} alt="" /></div>
            <div className="dislike"><img src={Dislike} alt="" /></div>
            <div className="image">
                <img src={CarImage} alt="" />
            </div>
            <div className="wrapper">

                <div className="info">
                    <div className="title">Audi A6 2015 </div>
                    <div className="price"><span className='usd'>28 000 $</span><span className='uah'>~ 1 081 920 грн.</span></div>
                    <div className="stats">
                        <div className="col">
                            <div className="stat">
                                <img src={DashBoard} alt="" /> 150 тис. км
                            </div>
                            <div className="stat">
                                <img src={Location} alt="" /> Київ
                            </div>
                        </div>
                        <div className="col">
                            <div className="stat">
                                <img src={FuelTank} alt="" />Дизель
                            </div>
                            <div className="stat">
                                <img src={Steering} alt="" />Автомат
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="published">
                       <img src={Clock} alt="" /> 17 хвилин тому 
                    </div>
                    <div className="actions">
                        <div className="compare"><img src={Scales} alt="" /></div>
                        <div className="favorite"><img src={Heart} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}