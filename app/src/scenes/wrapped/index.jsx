import React from "react"
import { Route, Routes } from "react-router-dom"
import List from "./list"
import View from "./view"

export default function Wrapped() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<View />} />
    </Routes>
  )
}
