import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useHistory } from "react-router"

export const Location = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("Location: useEffect - getLocations")
    getLocations()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory()

  return (
    <>
    <h2>Location</h2>
      <button onClick={
        () => history.push("/locations/create")
      }>
        Add Location
      </button>
    <div className="locations">
      {
        locations.map(location => {
          return (
            <div className="location" id={`location--${location.id}`} key={location.id}>
              <div className="location__name">
                Name: { location.name }
              </div>
              <div className="location__address">
                Address: { location.address }
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}