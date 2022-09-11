import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserProfile } from '../Pages/UserProfile'

export const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<UserProfile/>} />
    </Routes>
  )
}
