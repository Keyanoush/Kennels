import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory } from "react-router"

export const Employee = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("Employee: useEffect - getEmployees")
    getEmployees()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory()

  return (
    <>
    <h2>Employee</h2>
      <button onClick={
        () => history.push("/employees/create")
      }>
        Add Employee
      </button>
    <div className="employees">
      {
        employees.map(employee => {
          return (
            <div className="employee" id={`employee--${employee.id}`} key={employee.id}>
              <div className="employee__name">
                Name: { employee.name }
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}