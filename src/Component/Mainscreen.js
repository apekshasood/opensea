import React from 'react'
import { Link, Route } from 'react-router-dom'
import mainsmimg from '../Images/smmainscreen.png'
function Mainscreen() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-sm-12 col-lg-6">
          <div className="mainScreenContent ">
            <h1>Discover. Collect. & Sell Extraordinary</h1>
            <h4>NFT's</h4>
            <p>On the world's first & largest NFT marketplace</p>
            <button className="butn filled ">Explore</button>
            <button type="button" className="butn outline">
              Create
            </button>
            {/* <Link to="/">Get Featured On The Homepage</Link> */}
            <div className="my-5">
              <a href="/">Get Featured On The Homepage</a>
            </div>
          </div>
        </div>
        <div className="mainScreenImg col-12 col-md-12 col-sm-12 col-lg-6">
          <div className="mainScreenImage">
            <img src={mainsmimg} alt="" />
            <h3>SoulCurryArt</h3>
            <p>
              A play of light and shade, chairoscurso is the realm between the
              light and dark
            </p>
            <button className="butn outline">Place Bid</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainscreen
