import React from 'react'
import notic1 from '../Images/notic1.png'
import notic2 from '../Images/notic2.png'
import notic3 from '../Images/notic3.png'
import notic4 from '../Images/notic4.png'

function Notable() {
  return (
    <div className="notable">
      <div className=" container">
        <div className="row">
          <div className="col-12  col-md-12 col-lg-6 text-center p-5">
            <div className="d-flex notableImg p-3">
              <img className="p-1" src={notic1} alt="" />
              <img className="p-3" src={notic2} alt="" />
            </div>
            <div className="d-flex notableImg px-2">
              <img className="p-1" src={notic3} alt="" />
              <img className="p-3" src={notic4} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 notableContent ">
            <h4>Notable Drops</h4>
            <p>
              Upload your work (image, video, audio, or 3D art), add a title and
              description, and customize your NFTs stats, and unlockable
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notable
