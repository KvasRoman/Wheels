import CreateCar from "./car.model"
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
export function AdaptRegion(region){
    let index = regions.findIndex((r) => r == region)
    if(index == -1)
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
    'Land Rover',
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
    'Alfa Romeo',
    'Genesis',
    'McLaren',
    'AstonMartin',
    'Bentley',
    'Ferrari',
    'Lamborghini',
    'Maserati',
    'Rolls Royce',
    'Bugatti',
    'Lotus',
    'Karma',
    'Rivian',
    'Lucid Motors',
    'Byton',
    'Polestar',
    'Faraday Future',
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
export function AdaptTransmission(transmission){
    let index = transmissionTypes.findIndex((r) => r == transmission)
    if(index == -1)
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
export function AdaptFuelType(fuel){
    let index = fuelTypes.findIndex((r) => r == fuel)
    if(index == -1)
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
export function AdaptWheelDrive(WD){
    let index = wheelDriveTypes.findIndex((r) => r == WD)
    if(index == -1)
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
export const cars = [
    CreateCar(
        vehicleTypes[0],
        regions[0],
        bodyTypes[0],
        10000,
        1000000,
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
        10
    ),

]






