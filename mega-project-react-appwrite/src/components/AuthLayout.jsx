import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// all the navigation , Link tags or NavLink tags will work only after we make the router in the main.jsx or any other file 
function Protected({children, authentication=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const isLoggedIn = useSelector((state) => state.status)

    useEffect(() => {

        if(isLoggedIn === true) {
            navigate("/")
        }else if(isLoggedIn === false){
            navigate("/login")
        }
        setLoader(false)
    },[isLoggedIn, navigate, authentication])
  return (
    <div></div>
  )
}

export default Protected