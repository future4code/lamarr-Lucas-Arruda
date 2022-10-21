export const goToHomePage=(navigate)=>{
    navigate(`/`)
}
export const goToListTripsPage=(navigate)=>{
    navigate(`/trips/list`)
}
export const goToLoginPage=(navigate)=>{
    navigate(`/login`)
}
export const goToCreateTripPage=(navigate)=>{
    navigate(`/admin/trips/create`)
}
export const goToApplicationFormPage=(navigate)=>{
    navigate(`/trips/application`)
}
export const goToAdminHomePage=(navigate)=>{
    navigate(`/admin/trips/list`)
}
export const goToTripDetailsPage=(navigate, id)=>{
    navigate(`/admin/trips/${id}`)
}