import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { userUrl } from '../../apiLinks/apiLinks'

const pvtRoutes = () => {
  const Navigate = useNavigate()
  const [userCheck,setUserCheck] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem('token')
    const headers = {authorization:token}
    axios.get(`${userUrl}authorize`,{headers}).then((response)=>{
        response.status === 200 ? setUserCheck(true) : Navigate('/')
    }).catch(()=>{
        Navigate('/')
    })
  })  
  return (
   userCheck && <Outlet/>
  )
}

export default pvtRoutes
