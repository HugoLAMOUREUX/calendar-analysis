import React from "react"
import { Route, Routes } from "react-router-dom"

import Signin from "./signin"

const Auth = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  )
}

export default Auth
