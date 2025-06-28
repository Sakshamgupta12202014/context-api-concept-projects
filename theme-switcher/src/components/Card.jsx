import React, { useEffect } from 'react'
import './Card.css'
import CardImage from '../assets/card-image.jpg'
import useTheme from '../context/ThemeContext'
 
function Card() {

  const {themeMode} = useTheme()

  useEffect(() => {

    let component = document.getElementsByClassName("card-component")[0]
    if(themeMode === "light"){
      component.classList.remove("card-component-dark")
      component.classList.add("card-component-light")
    }
    else{
      component.classList.remove("card-component-light")
      component.classList.add("card-component-dark")
    }

  },[themeMode])
  return (
    <>
        <div className='card-component'>
            <h2>This is a Card Component</h2>

            <img src={CardImage}  width="300px" alt='card image' style={{borderRadius : "20px"}}/>

            <p>This is udan khatola</p>
            <button className='card-btn'>Like this</button>
        </div>
    </>
  )
}

export default Card