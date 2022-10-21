import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminHomePage from "../AdminHomePage";
import ApplicationFormPage from "../ApplicationFormPage";
import CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import ListTripsPage from "../ListTripsPage";
import LoginPage from "../LoginPage";
import TripDetailsPage from "../TripDetailsPage";

const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTripsPage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
                <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;