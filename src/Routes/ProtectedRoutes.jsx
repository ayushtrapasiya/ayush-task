import React, { use } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({children}) {
  const isValid = localStorage.getItem("user")


  if(!isValid){
    return<Navigate to="/login" replace/>
  }
    return children
}
