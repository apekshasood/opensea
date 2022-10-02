import React from 'react'
import './Style.css'
import { marketContent } from '../Data.js'
function Sellingpage() {
  return (
    <div className="marketingsection">
      <div className="container block2 text-center">
        <div className="header">
          <h1>Create & Sell your NFT's</h1>
          <p>A play and light shadow realem between dark and light</p>
        </div>
        <div className="content justify-content-center">
          <div className="row">
            {marketContent.map((el) => {
              return (
                <div
                  className="card col-12 col-md-6 col-lg-3 cardy"
                  key={el.id}
                >
                  <div className="card-body">
                    <h5 className="card-title py-3">{el.title}</h5>
                    <p className="card-text">{el.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sellingpage
