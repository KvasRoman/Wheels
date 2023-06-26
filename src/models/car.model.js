import { v4 as uuidv4 } from 'uuid';
export default function CreateCar
(
    vehicleType,
    region,
    bodyType,
    price,
    drivenDistance,
    brand,
    model,
    year,
    transmission,
    fuelType,
    wheelDrive,
    isCustomsClear,
    hasCarAccident,
    technicalState,
    lacquerСoatingState,
    offerDelay,
    images,
    description,
    phoneNumber,
    engineVolume,
    ownerName,
    city
)
{
    return {
        id: uuidv4(),
        vehicleType: vehicleType,
        region: region,
        bodyType: bodyType,
        price: price,
        drivenDistance: drivenDistance,
        brand: brand,
        model: model,
        year: year,
        transmission: transmission,
        fuelType: fuelType,
        wheelDrive: wheelDrive,
        isCustomsClear: isCustomsClear,
        hasCarAccident: hasCarAccident,
        technicalState: technicalState,
        lacquerСoatingState: lacquerСoatingState,
        offerDelay: offerDelay,
        images: images,
        description: description,
        phoneNumber: phoneNumber,
        engineVolume: engineVolume
    }
}

