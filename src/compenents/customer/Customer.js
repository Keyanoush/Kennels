import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useHistory } from "react-router"

export const Customer = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("Customer: useEffect - getCustomers")
    getCustomers()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory()

  return (
    <>
    <h2>Customer</h2>
      <button onClick={
        () => history.push("/customers/create")
      }>
        Add Customer
      </button>
    <div className="customers">
      {
        customers.map(customer => {
          return (
            <div className="customer" id={`customer--${customer.id}`} key={customer.id}>
              <div className="customer__name">
                Name: { customer.name }
              </div>
              <div className="customer__address">
                Address: { customer.address }
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}