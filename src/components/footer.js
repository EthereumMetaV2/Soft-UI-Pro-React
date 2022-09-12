import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">Ethereum Meta V2</span>
          <span>
            Copyright © 2022
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02 large">Company</span>
            <span className="footer-text03 large">About Us</span>
            <span className="footer-text04 large">Careers</span>
            <span className="footer-text05 large">Press</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text06 large">Pages</span>
            <span className="footer-text07 large">Login</span>
            <span className="footer-text08 large">Register</span>
            <span className="footer-text09 large">About</span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjcnlwdG98ZW58MHx8fHwxNjYzMDE0Mzk5&amp;ixlib=rb-1.2.1&amp;w=1500"
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
