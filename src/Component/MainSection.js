import React from 'react'
import Mainscreen from './Mainscreen'
import Navbar from './Navbar'
import Sellingpage from './Sellingpage'
import './Style.css'

function MainSection() {
  return (
    <>
      <div className="mainsection">
        <Navbar />
        <Mainscreen />
      </div>
    </>
  )
}

export default MainSection
