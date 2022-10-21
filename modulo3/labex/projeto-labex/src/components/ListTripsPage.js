import React from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../constants/constants"
import useRequestData from "../hook/UseRequestData"

const ListTripsPage=()=>{
    const navigate = useNavigate()

const [data,isLoading,erro]=useRequestData(`${BASE_URL}/trips`)

const viagens = data&&data.trips&&data.trips.map((trip)=>{
    return(
        <p>{trip.name}</p>
    )
}) 

console.log()

    return( 
        <>
            <h1>listas de viagens</h1>
                {isLoading&&"...Carregando!"}
                <ul>
                {!isLoading&&data&&viagens}
                </ul>
                {!isLoading&&!data&&erro}
        </>
    )

}

export default ListTripsPage;