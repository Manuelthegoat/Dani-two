import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Components/Error/Error'
import WorkDetail from './Components/WorkDetail/WorkDetail'
import WorkPage from './Pages/WorkPage/WorkPage'
import Contact from './Components/Contact/Contact'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:id" element={<WorkDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<WorkPage />}>
        <Route path="illustration" element={<WorkPage />} />
        <Route path="cover-art" element={<WorkPage />} />
        <Route path="logos" element={<WorkPage />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routing