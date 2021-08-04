import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute({ component: Component, ...rest }) {

  //instead of true below we will control if a user is exist 

  return (
    <Route
      {...rest}
      render={props => {
        return false ? <Component {...props} /> : <Redirect to="/signup" />
      }}
    ></Route>
  )
}
