import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const Animal = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("Animal: useEffect - getAnimals")
    getAnimals()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory()

  return (
    <>
      <h2>Animals</h2>
      <button onClick={
        () => history.push("/animals/create")
      }>
        Add Animal
      </button>
    <div className="animals">
      {
        animals.map(animal => {
          return (
            <div className="animal" id={`animal--${animal.id}`} key={animal.id}>
              <div className="animal__name">
                Name: { animal.name }
              </div>
              <div className="animal__breed">
                Breed: { animal.breed }
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}