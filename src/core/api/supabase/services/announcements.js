import { supabase } from ".."

class AnnouncementsService {
  // create announcement and return it
  async createAnnouncment(payload, photos) {
    const { data, error } = supabase.from('Announcement').insert(payload).select(`
    id,
    VehicleTypes(id, name),
    Brands(id, name),
    CarModels(id, name),
    mileage,
    mileage_unit,
    BodyTypes(id, name),
    States(id, name),
    Cities(id, name),
    description,
    no_car_dealers_calls,
    color:Colors(id, name),
    shipped_from,
    crashed,
    TechnicalStates(id, name),
    PaintCoatings(id, name),
    AirConditioners(id, name),
    ElectricWindows(id, name),
    InteriorMaterials(id, name),
    interior_color:Colors(id, name),
    PowerSteerings(id, name),
    SteeringWheelAdjustments(id, name),
    SpareWheels(id, name),
    Headlights(id, name),
    SeatAdjustments(id, name),
    SeatHeatings(id, name),
    SeatVentilations(id, name),
    price_us,
    discrount_for_uaf,
    cleared_by_cuctoms,
    possible_bargaing,
    possible_exchange,
    possible_partial_pay,
    FuelTypes(id, name),
    TransimissionTypes(id, name),
    DriveTypes(id, name),
    engine_volume,
    created_at
    `)

    photos.forEach((photo) => {
      supabase.storage.from('').upload(photo.filename)
    })

    if(error) {
      throw error
    }

    return data
  }
} 

export const announcementsService = new AnnouncementsService()