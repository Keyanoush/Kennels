import React from "react"
import { Route } from "react-router-dom"
import { Animal } from "./animal/Animal"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalProvider } from "./animal/AnimalProvider"
import { Customer } from "./customer/Customer"
import { CustomerForm } from "./customer/CustomerForm"
import { CustomerProvider } from "./customer/CustomerProvider"
import { Employee } from "./employee/Employee"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { Location } from "./location/Location"
import { LocationForm } from "./location/LocationForm"
import { LocationProvider } from "./location/LocationProvider"

export const ApplicationViews = () => {
    return (
        <>
            <AnimalProvider>
                <CustomerProvider>
                    <EmployeeProvider>
                        <LocationProvider>
                            <Route exact path="/">
                                <Animal />
                                <Customer />
                                <Employee />
                                <Location />
                            </Route>
                            <Route exact path="/locations">
                                <Location />
                            </Route>
                            <Route exact path="/animals">
                                <Animal />
                            </Route>
                            <Route exact path="/animals/create">
                                <AnimalForm />
                            </Route>
                            <Route exact path="/customers">
                                <Customer />
                            </Route> 
                            <Route exact path="/employees">
                                <Employee />
                            </Route>
                            <Route exact path="/customers/create">
                                <CustomerForm />
                            </Route>
                            <Route exact path="/employees/create">
                                <EmployeeForm />
                            </Route>
                            <Route exact path="/locations/create">
                                <LocationForm />
                            </Route>
                        </LocationProvider>
                    </EmployeeProvider>
                </CustomerProvider>
            </AnimalProvider>

        </>
    )
}