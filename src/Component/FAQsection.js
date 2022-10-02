import React, { useState } from 'react'
import { faqs } from '../Data'
function FAQsection() {
  const [toggle, settoggle] = useState(true)
  function handletoggle() {
    settoggle(!toggle)
    console.log('toggle=', toggle)
  }
  return (
    <div className="faqsection">
      <div className="container">
        <div className="row my-5">
          <div className="col-12 faqheading col-lg-6">
            <h4 className="heading mb-5">
              We will try to help you if you are confused.
            </h4>
            <p className="subcontent my-4">
              A fequently asked question (FAQ) forum is often used in articles,
              websites, email lists, and online forums where common questions
              tend to recur.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div id="accordion">
              {faqs.map((el) => {
                return (
                  <div className="card" key={el.id}>
                    <div className="card-header" id="headingOne">
                      <div className="mb-0 d-flex justify-content-between">
                        <div className="faq">
                          <h5>{el.question}</h5>
                        </div>
                        <div className="faqsymbol">
                          <button
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            onClick={handletoggle}
                          >
                            <i class="fas fa-light fa-angle-down"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      key={el.id}
                      id="collapseOne"
                      className={toggle ? 'collapse ' : ''}
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">{el.answer}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <button className="butn filled my-5">View All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQsection
