import React from 'react'
import './Categories.css'
import { category } from '../Data.js'
function Categories() {
  return (
    <div className="categories">
      <div className="container text-center">
        <div className="header">
          <h1>Create & Sell your NFT's</h1>
          <p>A play and light shadow realem between dark and light</p>
        </div>
        <div className="sortItem">
          <a href="/">Recently Added </a>
          <span>|</span>
          <a href="/"> Mostly Added</a>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cards-wrapper">
                {category.map((el) => {
                  return (
                    <div className="category_card p-5 " key={el.id}>
                      <div
                        className="card"
                        style={{ width: '18rem', borderRadius: '1rem' }}
                      >
                        <img
                          className="card-img-top"
                          src={el.image}
                          alt="Card image cap"
                        />
                        <span className="profile">
                          <img src={el.mainimg} alt="" />
                        </span>
                        <div className="card-bodyy text-center">
                          <h5 className="card-title">
                            {el.title}
                            <span>
                              <i class="fa fa-solid fa-badge-check"></i>
                            </span>
                          </h5>
                          <p className="card-text">{el.content}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
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

export default Categories
