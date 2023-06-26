import './sellVehiclePage.component.scss'



import Check from './check-line.svg'
import Cam from './cam.svg'
import Shield from './shield.svg'
import Filter from './filter-line.svg'
import Plus from './add-line.svg'
import ArrowDropRight from './arrow-drop-right-line.svg'

import ToyotaRed from './toyota-corolla-red@1x 1.png'
import ToyotaBlue from './toyota-corolla-blue@1x 1.png'

import FilledOrange from './fOrange.png'
import TransparentOrange from './tOrange.png'

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import DropDown from '../mainPage/dropdown/dropdown.component'
import Input from 'react-phone-number-input/input'
import { AdaptCarAccidents, AdaptConditioner, AdaptSalonColor, AdaptSalonMaterial, AdaptSeatAdjustments, AdaptSeatsHeated, AdaptSteeringAdjustment, AdaptTechState, AdaptVehicleType, AdaptlightType, AdaptpowerSteeringAmplifies, AdaptseatVentilation, AdaptspareWheel, AdaptvarnishCoatings, AdaptwindowLifter, vehicleTypes } from '../../../models/fakeDB'
import {
    AdaptFuelType, AdaptRegion,
    cars as FDBCars,
    fuelTypes as FDBFuelTypes,
    regions as FDBRegions,
    bodyTypes as FDBBodyTypes,
    brandTypes as FDBBrandTypes,
    modelTypes as FDBModelTypes,
    transmissionTypes as FDBTransmissionTypes,
    AdaptTransmission,
    wheelDriveTypes as FDBWheelDriveTypes,
    AdaptWheelDrive,
    years as FDBYears,
    years,
    engineVolumes as FDBEngineVolumes,
    cities as FDBCities,
    AdaptCity,
    currencies as FDBCurrencies,
    colors as FDBColors,
    AdaptColor,
    coutnries as FDBCountries,
    AdaptCountry,
    varnishCoatings as FDBVarnishCoatings,
    carAccidents as FDBCarAccidents,
    techStates as FDBTechSatets,
    lightTypes as FDBlightTypes,
    salonMaterials as FDBsalonMaterials,
    salonColors as FDBsalonColors,
    windowLifters as FDBwindowLifters,
    powerSteeringAmplifies as FDBpowerSteeringAmplifies,
    steeringAdjustment as FDBsteeringAdjustment,
    spareWheel as FDBspareWheel,
    conditioners as FDBconditioners,
    seatAdjustments as FDBseatAdjustments,
    seatsHeated as FDBseatsHeated,
    seatVentilation as FDBseatVentilation,

} from '../../../models/fakeDB';
import { carService } from '../../../core/api/supabase/services/cars'

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
const wheelDriveTypes = FDBWheelDriveTypes.map(ft => {
    return { value: ft, title: AdaptWheelDrive(ft) }
})
const carYearsOfCreation = FDBYears.map(ft => {
    return { value: ft, title: ft }
})
const engineVolumes = FDBEngineVolumes.map(ft => {
    return { value: ft, title: ft }
})
const cities = FDBCities.map(ft => {
    return { value: ft, title: AdaptCity(ft) }
})
const currencies = FDBCurrencies.map(ft => {
    return { value: ft, title: ft }
})
const colors = FDBColors.map(ft => {
    return { value: ft, title: AdaptColor(ft) }
})
const coutnries = FDBCountries.map(ft => {
    return { value: ft, title: AdaptCountry(ft) }
})
const varnishCoatings = FDBVarnishCoatings.map(ft => {
    return { value: ft, title: AdaptvarnishCoatings(ft) }
})
const carAccidents = FDBCarAccidents.map(ft => {
    return { value: ft, title: AdaptCarAccidents(ft) }
})
const techStates = FDBTechSatets.map(ft => {
    return { value: ft, title: AdaptTechState(ft) }
})
const lightTypes = FDBlightTypes.map(ft => {
    return { value: ft, title: AdaptlightType(ft) }
})
const salonMaterials = FDBsalonMaterials.map(ft => {
    return { value: ft, title: AdaptSalonMaterial(ft) }
})
const salonColors = FDBsalonColors.map(ft => {
    return { value: ft, title: AdaptSalonColor(ft) }
})
const windowLifters = FDBwindowLifters.map(ft => {
    return { value: ft, title: AdaptwindowLifter(ft) }
})
const powerSteeringAmplifies = FDBpowerSteeringAmplifies.map(ft => {
    return { value: ft, title: AdaptpowerSteeringAmplifies(ft) }
})
const steeringAdjustment = FDBsteeringAdjustment.map(ft => {
    return { value: ft, title: AdaptSteeringAdjustment(ft) }
})
const spareWheel = FDBspareWheel.map(ft => {
    return { value: ft, title: AdaptspareWheel(ft) }
})
const conditioners = FDBconditioners.map(ft => {
    return { value: ft, title: AdaptConditioner(ft) }
})
const seatAdjustments = FDBseatAdjustments.map(ft => {
    return { value: ft, title: AdaptSeatAdjustments(ft) }
})
const seatsHeated = FDBseatsHeated.map(ft => {
    return { value: ft, title: AdaptSeatsHeated(ft) }
})
const seatVentilation = FDBseatVentilation.map(ft => {
    return { value: ft, title: AdaptseatVentilation(ft) }
})
const formModel = {
    images: undefined,
    vType: undefined,
    brand: undefined,
    model: undefined,
    year: undefined,
    engineVolume: undefined,
    transmission: undefined,
    fuel: undefined,
    wheelDrivenType: undefined,
    drivenDist: undefined,
    bodyType: undefined,
    region: undefined,
    city: undefined,
    description: undefined,
    color: undefined,
    deliveredFrom: undefined,
    involvmentInAccidents: undefined,
    varnishCoatings: undefined,


    techState: undefined,
    lightType: undefined,
    salonMaterial: undefined,
    salonColor: undefined,
    windowLifter: undefined,
    powerSteeringAmplifie: undefined,
    steeringAdjustment: undefined,
    spareWheel: undefined,
    conditioners: undefined,
    seatAdjustments: undefined,
    seatsHeated: undefined,
    seatVentilation: undefined,

    cover: undefined,
    price: undefined,
    phoneNumber: undefined,
}
export default function SellVehiclePage() {
    
    
    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    };

    const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 190,
        height: 119,
        padding: 0,
        boxSizing: 'border-box'
    };

    const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
    };

    const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
    };
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            let accepFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            setFiles([...files, ...accepFiles]);
            formModel.images = files;
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);



    const vTypes = vehicleTypes.map(v => {
        return { value: v, title: AdaptVehicleType(v) }
    })

    let value;
    function setValue(v) {
        formModel.phoneNumber = v;
        console.log(v);
    }

    function onSubmit(e) {
        if (e.target.classList.find(e => e == 'disabled')) {
            return;
        }


    }
    function onFormValueChange(propName, value) {
        carService.getCars().then(v => {console.log(v)})
        formModel[propName] = value;
        console.log(formModel);
    }

    return (
        <div className="content" id='SellVehicle'>
            <div className="row">
                <div className="title">Продавайте ваш автомобіль</div>
            </div>
            <div className="row">
                <p className='subTitleTip'>Ви можете обрати, як саме продати свій автомобіль</p>
            </div>
            <div className="row">
                <div className="sellAdvert">
                    <div className="title">
                        Розмістіть оголошення на Wheels.com
                    </div>
                    <div className="advertContent">
                        <div className="item"><img src={Check} alt="" />Миттєве розміщення оголошень</div>
                        <div className="item"><img src={Check} alt="" />Просування вашого оголошення</div>
                        <div className="item"><img src={Check} alt="" />Наша команда підтримки</div>
                    </div>
                    <div className="button">
                        Створити оголошення
                    </div>
                    <div className="imageHolder">
                        <img src={ToyotaBlue} alt="" />
                    </div>
                </div>
                <div className="sellAdvert">
                    <div className="title">
                        Миттєва пропозиція від Wheels.com
                    </div>
                    <div className="advertContent">
                        <div className="item"><img src={Check} alt="" />Швидко продайте своє авто за готівку</div>
                        <div className="item"><img src={Check} alt="" />Без торгу щодо вашої ціни</div>
                        <div className="item"><img src={Check} alt="" />Дійсна протягом 7 днів</div>
                    </div>
                    <div className="button">
                        Отримати пропозицію
                    </div>
                    <div className="imageHolder">
                        <img src={ToyotaRed} alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="guide">
                    <div className="guideTitle">Як швидко продати свій автомобіль</div>
                    <div className="boxes">
                        <div className="box">
                            <div className="logo">
                                <img src={Cam} alt="" />
                            </div>
                            <div className="title">
                                Робіть якісні фотографії
                            </div>
                            <div className="text">
                                Це може здатися очевидним, але якісні фотографії можуть значно вплинути на час, необхідний для продажу вашого автомобіля. Оголошення з хорошими фотографіями продаються втричі швидше
                            </div>
                        </div>
                        <div className="box">
                            <div className="logo">
                                <img src={Filter} alt="" />
                            </div>
                            <div className="title">
                                Робіть якісні фотографії
                            </div>
                            <div className="text">
                                Це може здатися очевидним, але якісні фотографії можуть значно вплинути на час, необхідний для продажу вашого автомобіля. Оголошення з хорошими фотографіями продаються втричі швидше
                            </div>
                        </div>
                        <div className="box">
                            <div className="logo">
                                <img src={Shield} alt="" />
                            </div>
                            <div className="title">
                                Робіть якісні фотографії
                            </div>
                            <div className="text">
                                Це може здатися очевидним, але якісні фотографії можуть значно вплинути на час, необхідний для продажу вашого автомобіля. Оголошення з хорошими фотографіями продаються втричі швидше
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="row stretch">
                <div className="saleAnnouncement">
                    <div className="title">
                        <div>Створити оголошення</div>
                    </div>
                    <div className="stages">
                        <div className="stage first"><div className="background"><img src={FilledOrange} alt="" /></div>
                            <div className="title">Основна інформація</div>
                            <div className="subtitle">Вкажіть основні характеристики вашого автомобіля</div>
                        </div>
                        <div className="stage second"><div className="background"><img src={TransparentOrange} alt="" /></div>
                            <div className="title">Публікація оголошення</div>
                            <div className="subtitle">Виберіть спосіб публікації вашого оголошення</div>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="step">
                            <div className="stepTitle"><div className="index">1</div>Додайте фотографії вашого автомобіля</div>
                            <div className="form">
                                <section className="dragNDrop container">
                                    <div {...getRootProps({ className: 'dropzone' })}>
                                        <input {...getInputProps()} />
                                        <p><img src={Plus} alt="" />Додати фото</p>
                                    </div>
                                    <aside style={thumbsContainer}>
                                        {thumbs}
                                    </aside>
                                </section>
                            </div>
                        </div>
                        <div className="step">
                            <div className="stepTitle"><div className="index">2</div>Основна інформація</div>
                            <div className="form">
                                <div className="titleAside">
                                    <div className="title">
                                        Тип транспорту
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('vType', e) }} items={vTypes} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Марка авто
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('brand', e) }} items={brandTypes} defaultTitle={'Оберіть марку'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Модель авто
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('model', e) }} items={modelTypes} defaultTitle={'Оберіть модель'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Рік випуску
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('year', e) }} items={carYearsOfCreation} defaultTitle={'Оберіть рік'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Об’єм двигуна (л)
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('transmission', e) }} items={engineVolumes} defaultTitle={"Оберіть об'єм"} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Коробка передач
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('transmission', e) }} items={transmissionTypes} defaultTitle={'Оберіть тип коробки передач'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Паливо
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('fuel', e) }} items={fuelTypes} defaultTitle={'Оберіть тип палива'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Тип приводу
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('wheelDrivenType', e) }} items={wheelDriveTypes} defaultTitle={'Оберіть тип приводу'} />
                                </div>
                                <div className="titleAside inputTextAndSelect">
                                    <div className="title">
                                        Пробіг
                                    </div>
                                    <div className='multipleInputs'>
                                        <input type="text" placeholder='Введіть пробіг' onChange={e => { onFormValueChange('drivenDist', e.target.value) }} />
                                        <DropDown items={vTypes} defaultTitle={'тис. км'} />
                                    </div>

                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Стиль кузова
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('bodyType', e) }} items={bodyTypes} defaultTitle={'Оберіть стиль кузова'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Регіон
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('region', e) }} items={regions} defaultTitle={'Оберіть регіон'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Місто
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('city', e) }} items={cities} defaultTitle={'Оберіть місто'} />
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <div className="stepTitle"><div className="index">3</div>Опис автомобіля </div>
                            <div className="form">
                                <div className="rules">
                                    <div className="title">
                                        В даному полі забороняється:
                                    </div>
                                    <div className="text">
                                        <div className="rule"><img src={ArrowDropRight} alt="" /> Залишати посилання або контактні дані</div>
                                        <div className="rule"><img src={ArrowDropRight} alt="" /> Пропонувати інші (особисті) послуги</div>
                                    </div>
                                </div>
                                <textarea name="" id="Fdescription" onChange={e => { onFormValueChange('description', e.target.value) }}></textarea>
                            </div>
                        </div>
                        <div className="step">
                            <div className="stepTitle"><div className="index">4</div>Характеристики автомобіля </div>
                            <div className="form">
                                <div className="titleAside">
                                    <div className="title">
                                        Колір
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('color', e) }} items={colors} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Пригнаний з
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('deliveredFrom', e) }} items={coutnries} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Участь в ДТП
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('involvmentInAccidents', e) }} items={carAccidents} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Технічний стан
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('techState', e) }} items={techStates} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Лакофарбове покриття
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('varnishCoatings', e) }} items={varnishCoatings} defaultTitle={'Оберіть'} />
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <div className="stepTitle"><div className="index">5</div>Додаткові опції </div>
                            <div className="form">
                                <div className="titleAside">
                                    <div className="title">
                                        Кондиціонер
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('conditioner', e) }} items={conditioners} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Електросклопідйомники
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('windowLifter', e) }} items={windowLifters} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Матеріали салону
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('salonMaterial', e) }} items={salonMaterials} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Колір салону
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('salonColor', e) }} items={salonColors} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Підсилювач керма
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('powerSteeringAmplifie', e) }} items={powerSteeringAmplifies} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Регулювання керма
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('steeringAdjustment', e) }} items={steeringAdjustment} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Запасне колесо
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('spareWheel', e) }} items={spareWheel} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Фари
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('lightType', e) }} items={lightTypes} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Регулювання сидінь
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('seatAdjustment', e) }} items={seatAdjustments} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Підігрів сидінь
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('seatsHeated', e) }} items={seatsHeated} defaultTitle={'Оберіть'} />
                                </div>
                                <div className="titleAside">
                                    <div className="title">
                                        Вентиляція сидінь
                                    </div>
                                    <DropDown onChange={e => { onFormValueChange('seatVentilation', e) }} items={seatVentilation} defaultTitle={'Оберіть'} />
                                </div>

                            </div>
                        </div>
                        <div className="step">
                            <div className="stepTitle"><div className="index">6</div>Вартість </div>
                            <div className="form">
                                <div className="titleAside inputTextAndSelect">
                                    <div className="title">
                                        Ціна
                                    </div>
                                    <div className='multipleInputs'>
                                        <input type="text" placeholder='Введіть вартість' />
                                        <DropDown items={currencies} defaultTitle={'Валюта '} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <div className="stepTitle"><div className="index">7</div>Телефон продавця </div>
                            <div className="form phonenumber">
                                <div className='titleAside'>
                                    <div className="title">
                                        Телефон
                                    </div>
                                    <Input
                                        country="UA"
                                        value={value}
                                        onChange={setValue} />
                                </div>
                            </div>

                        </div>
                        <div className="step withoutBorder">
                            <div className='agreeCheckbox'>
                                <input type='checkbox' name={'agree'} id={'formAgree'} />
                                <label htmlFor={'formAgree'}>Я згоден(на) з умовами <span>Угоди про надання послуг </span></label>
                            </div>
                            <div className="tip">
                                Ваші персональні дані будуть оброблені та захищені згідно з  <span>Політикою приватності</span>
                            </div>
                            <div className="submit" onClick={onSubmit}>
                                <div className="button disabled">
                                    Розмістити оголошення
                                </div>
                                <div className="notes">
                                    При кліці на кнопку “Розмістити оголошення”<br />
                                    Ви перейдете до публікації свого оголошення
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}