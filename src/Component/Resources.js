import React from 'react'
import resource1 from '../Images/resource1.png'
function Resources() {
  return (
    <div className="resources">
      <div className="container text-center">
        <div className="header">
          <h1>Create & Sell your NFT's</h1>
          <p>A play and light shadow realem between dark and light</p>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item ">
              <div className="cards-wrapper">
                <div className="block d-flex col-12 col-lg-4 col-md-4">
                  <div className="resourceImg">
                    <img src={resource1} alt="" />
                  </div>
                  <div className="resourceContent">
                    <p>10 tips for avoiding scams and staying safe.</p>
                  </div>
                </div>
                <div className="block d-flex col-12 col-lg-4 col-md-4">
                  <div className="resourceImg">
                    <img src={resource1} alt="" />
                  </div>
                  <div className="resourceContent">
                    <p>10 tips for avoiding scams and staying safe.</p>
                  </div>
                </div>
                <div className="block d-flex col-12 col-lg-4 col-md-4">
                  <div className="resourceImg">
                    <img src={resource1} alt="" />
                  </div>
                  <div className="resourceContent">
                    <p>10 tips for avoiding scams and staying safe.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="cards-wrapper">
                <div className="block d-flex col-12 col-lg-4 col-md-4">
                  <div className="resourceImg">
                    <img src={resource1} alt="" />
                  </div>
                  <div className="resourceContent">
                    <p>10 tips for avoiding scams and staying safe.</p>
                  </div>
                </div>
                <div className="block d-flex col-12 col-lg-4 col-md-4">
                  <div className="resourceImg">
                    <img src={resource1} alt="" />
                  </div>
                  <div className="resourceContent">
                    <p>10 tips for avoiding scams and staying safe.</p>
                  </div>
                </div>
                <div className="block d-flex col-12 col-lg-4 col-md-4">
                  <div className="resourceImg">
                    <img src={resource1} alt="" />
                  </div>
                  <div className="resourceContent">
                    <p>10 tips for avoiding scams and staying safe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">
              <i class="fa-regular fa-chevron-left"></i>
            </span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">
              <i class="fa-regular fa-2x fa-chevron-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resources
