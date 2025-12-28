import { Route, Routes } from "react-router-dom"

import List from "./list"
import View from "./view"

export default function Event() {
  return (
    <Routes>
      <Route path="/:id" element={<View />} />
      <Route path="/" element={<List />} />
    </Routes>
  )
}
