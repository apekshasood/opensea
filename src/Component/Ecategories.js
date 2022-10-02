import React from 'react'
import ecat1 from '../Images/cat1.png'
import './Style.css'
import { expCategories } from '../Data'

function Ecategories() {
  return (
    <div className="categories">
      <div className="container text-center">
        <div className="header">
          <h1>Create & Sell your NFT's</h1>
          <p>A play and light shadow realem between dark and light</p>
        </div>
        <div className="row">
          {expCategories.map((el) => {
            return (
              <div className="econtent col-lg-3 col-12 py-5" key={el.id}>
                <div className="row">
                  <div className="eimage col-6">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="edesciption col-6">
                    <h6>{el.title}</h6>
                    <p>{el.content}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <button className="butn filled mb-3">Explore Market Place</button>
      </div>
    </div>
  )
}

export default Ecategories
