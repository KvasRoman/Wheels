import CreateCar from "./car.model"


export const engineVolumes = [
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    5,
    6,
    7,
    8
]
export const vehicleTypes = [
    'lehkovy',
    'moto',
    'vantazhny',
    'spetz',
    'silhos',
    'avtobus',
    'prychepy',
    'avtobudynky'
]
const vehicleTypesUA = [
    'Легкові',
    'Мото',
    'Вантажівки',
    'Спецтехніка',
    'Сільгосптехніка',
    'Автобуси',
    'Причепи',
    'Автобудинки',
]
export function AdaptVehicleType(VT) {
    let index = vehicleTypes.findIndex((r) => r == VT)
    if (index == -1)
        return;
    else
        return vehicleTypesUA[index];
}
export const regions = [
    'Vinnytsia',
    'Volyn',
    'Dnipropetrovsk',
    'Donetsk',
    'Zhytomyr',
    'Zakarpattia',
    'Zaporizhzhia',
    'Ivano-Frankivsk',
    'Kyiv',
    'Kirovohrad',
    'Luhansk',
    'Lviv',
    'Mykolaiv',
    'Odesa',
    'Poltava',
]

const regionsUA = [
    'Вінницька',
    'Волинська',
    'Дніпропетровська',
    'Донецька',
    'Житомирська',
    'Закарпатська',
    'Запорізька',
    'Івано-Франківська',
    'Київська',
    'Кіровоградська',
    'Луганська',
    'Львівська',
    'Миколаївська',
    'Одеська',
    'Полтавська',
]
export function AdaptRegion(region) {
    let index = regions.findIndex((r) => r == region)
    if (index == -1)
        return;
    else
        return regionsUA[index];
}
export const bodyTypes = [
    'SEDAN',
    'COUPE',
    'SPORTCAR',
    'STATIONWAGON',
    'HATCHBACK',
    'CONVERTIBLE',
    'SUV',
    'MINIVAN',
    'PICKUPTRUCK'
]
export const brandTypes = [
    'Toyota',
    'Volkswagen',
    'Ford',
    'Chevrolet',
    'Honda',
    'BMW',
    'MercedesBenz',
    'Audi',
    'Nissan',
    'Hyundai',
    'Kia',
    'Volvo',
    'Subaru',
    'Tesla',
    'Mazda',
    'Lexus',
    'LandRover',
    'Jeep',
    'GMC',
    'Chrysler',
    'Dodge',
    'Jaguar',
    'Porsche',
    'Mitsubishi',
    'Fiat',
    'Mini',
    'Acura',
    'Buick',
    'Cadillac',
    'Infiniti',
    'Lincoln',
    'Ram',
    'AlfaRomeo',
    'Genesis',
    'McLaren',
    'AstonMartin',
    'Bentley',
    'Ferrari',
    'Lamborghini',
    'Maserati',
    'RollsRoyce',
    'Bugatti',
    'Lotus',
    'Karma',
    'Rivian',
    'LucidMotors',
    'Byton',
    'Polestar',
    'FaradayFuture',
    'NIO',
]
export const modelTypes = [
    'Accord',
    'Corolla',
    'Civic',
    'Mustang',
    'Silverado',
    'Golf',
    '3 Series',
    'C-Class',
    'Q5',
    'Rogue',
    'Sonata',
    'Sorento',
    'XC60',
    'Outback',
    'Model 3',
    'CX-5',
    'RX',
    'Range Rover',
    'Wrangler',
    'Sierra',
]
export const transmissionTypes = [
    'mechanical',
    'auto',
    'typtronik',
    'robot',
    'variator',
]
const transmissionTypesUA = [
    'Ручна / Механіка',
    'Автомат',
    'Типтронік',
    'Робот',
    'Варіатор',
]
export function AdaptTransmission(transmission) {
    let index = transmissionTypes.findIndex((r) => r == transmission)
    if (index == -1)
        return;
    else
        return transmissionTypesUA[index];
}
export const fuelTypes = [
    'patrol',
    'disel',
    'gas',
    'gasAndPatrol',
    'hybrid',
    'electro',
    'gas-metan',
    'gas-propan',
]
const fuelTypesUA = [
    'Бензин',
    'Дизель',
    'Газ',
    'Газ / Бензин',
    'Гібрид',
    'Електро',
    'Газ-метан',
    'Газ пропан-бутан',
]
export function AdaptFuelType(fuel) {
    let index = fuelTypes.findIndex((r) => r == fuel)
    if (index == -1)
        return;
    else
        return fuelTypesUA[index];
}
export const wheelDriveTypes = [
    'front',
    'back',
    'full',
]
const wheelDriveTypesUA = [
    'Передній',
    'Задній',
    'Повний',
]
export function AdaptWheelDrive(WD) {
    let index = wheelDriveTypes.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return wheelDriveTypesUA[index];
}
export const technicalStates = [
    'old',
    'new',
]
const technicalStatesUA = [
    'старі',
    'нові',
]
export const years = [
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
]

export const cars = [
    CreateCar(
        vehicleTypes[0],
        regions[0],
        bodyTypes[0],
        10000,
        100000,
        brandTypes[0],
        modelTypes[0],
        2005,
        transmissionTypes[0],
        fuelTypes[0],
        wheelDriveTypes[0],
        true,
        false,
        technicalStates[0],
        '',
        10,
        ['card image.png'],
        'some description',
        '098 666 66 66',
        1
    ),
    CreateCar(
        vehicleTypes[1],
        regions[1],
        bodyTypes[1],
        10000,
        8000,
        brandTypes[1],
        modelTypes[1],
        2005,
        transmissionTypes[1],
        fuelTypes[1],
        wheelDriveTypes[1],
        true,
        false,
        technicalStates[1],
        '',
        10,
        ['volkswagen_golf__418081862f.webp'],
        'some description',
        '098 666 66 66',
        2
    ),
    CreateCar(
        vehicleTypes[1],
        regions[1],
        bodyTypes[1],
        10000,
        6000,
        brandTypes[1],
        modelTypes[1],
        2005,
        transmissionTypes[1],
        fuelTypes[1],
        wheelDriveTypes[1],
        true,
        false,
        technicalStates[1],
        '',
        10,
        ['volkswagen_golf__418081862f.webp'],
        'some description',
        '098 666 66 66',
        5
    ),
    CreateCar(
        vehicleTypes[1],
        regions[1],
        bodyTypes[1],
        10000,
        6000,
        brandTypes[1],
        modelTypes[1],
        2005,
        transmissionTypes[1],
        fuelTypes[1],
        wheelDriveTypes[1],
        true,
        false,
        technicalStates[1],
        '',
        10,
        ['volkswagen_golf__418081862f.webp'],
        'some description',
        '098 666 66 66',
        4
    )


]






