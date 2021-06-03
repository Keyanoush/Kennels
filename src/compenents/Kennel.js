import React from "react"
import "./Kennel.css"
//import { Animal } from "./animal/Animal"
//import { Employee } from "./employee/Employee"
//import { Customer } from "./customer/Customer"
//import { Location } from "./location/Location"
//import { AnimalProvider } from "./animal/AnimalProvider"
//import { CustomerProvider } from "./customer/CustomerProvider"
//import { EmployeeProvider } from "./employee/EmployeeProvider"
//import { LocationProvider } from "./location/LocationProvider"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationView"

export const Kennel = () => (
    <>
        <NavBar />
        
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        
        <ApplicationViews />
    </>
)