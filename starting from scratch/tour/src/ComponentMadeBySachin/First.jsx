import React from 'react'
import H1css from "../ComponentMadeBySachin/First.module.css"
import Stays from '../ComponentMadeBySachin/Stays'
const First = () => {
  return (
    <div className={H1css.Container}>
<div className={H1css.background_image}>
    <Stays/>
</div>
    </div>
  )
}

export default First