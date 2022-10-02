import React from 'react'
import logo from '../Images/logo.png'
import footersocial from '../Images/footersocial.png'
function Footer() {
  return (
    <div className="footer">
      <div className="container foot">
        <div className="row">
          <div className="col-12 footer-left col-md-12 col-lg-5">
            <div className="logo d-flex">
              <img src={logo} alt="" />
              <span>OpeaSea</span>
            </div>
            <div className="footerleft">
              <p>
                From Opensea.io, go to your profile icon and click “Create” in
                the top right corner. You’ll be taken to the NFT item creation
                page. This page will allow you to upload your NFT file, name it
                and add a description.
              </p>

              <div className="footerimg">
                <img src={footersocial} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-7">
            <div className="footerright">
              <div className="row">
                <div className="col-lg-4 col-12 col-md-6">
                  <h7>Resources</h7>
                  <ul>
                    <li>Help Center</li>
                    <li>Platform Status</li>
                    <li>Patner</li>
                    <li>Help Center</li>
                    <li>Platform Status</li>
                    <li>Patner</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-12 col-md-6">
                  <h7>Resources</h7>
                  <ul>
                    <li>Help Center</li>
                    <li>Platform Status</li>
                    <li>Patner</li>
                    <li>Help Center</li>
                    <li>Platform Status</li>
                    <li>Patner</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-12 col-md-6">
                  <h7>Resources</h7>
                  <ul>
                    <li>Help Center</li>
                    <li>Platform Status</li>
                    <li>Patner</li>
                    <li>Help Center</li>
                    <li>Platform Status</li>
                    <li>Patner</li>
                  </ul>
                </div>
              </div>
              <h4>Stay In The Loop</h4>
              <p>
                Join our mailing list to stay in the loop with out newest
                feature releases, NFT drops, and tips & tricks for navigating
                OpenSea.
              </p>
            </div>
            <form class="form-inline my-2 my-lg-0 d-flex w-50">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="butn filled my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
          <div class="d-flex align-items-end flex-column">
            <div class="p-2">
              <span>Privacy Policy</span>
              <span>Team and Condition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
