import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './whitepaper.css'

const Whitepaper = (props) => {
  return (
    <div className="whitepaper-container">
      <Helmet>
        <title>Whitepaper - Soft UI Pro</title>
        <meta property="og:title" content="Whitepaper - Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="whitepaper-container01">
        <div className="whitepaper-main">
          <div className="whitepaper-container02">
            <h1 className="whitepaper-text">Whitepaper</h1>
            <h1 className="whitepaper-text01">Coming Soon!</h1>
            <p className="whitepaper-text02 lead">
              We are working hard to get our new whitepaper ready! Subscribe now
              to get notified.
            </p>
            <div className="whitepaper-container03">
              <input
                type="text"
                placeholder="Email here"
                className="whitepaper-textinput small input"
              />
              <a
                href="mailto:info@ethermetav2.com?subject=Subscribed"
                className="whitepaper-link"
              >
                <div className="whitepaper-container04">
                  <button className="whitepaper-button button buttonSmall">
                    Subscribe
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className="whitepaper-grid">
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="whitepaper-image"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="whitepaper-image1"
            />
            <img
              alt="image"
              src="/playground_assets/960x0-1000h.jpg"
              className="whitepaper-image2"
            />
          </div>
        </div>
      </div>
      <footer className="whitepaper-footer">
        <div className="whitepaper-divider"></div>
        <div className="whitepaper-container05">
          <div className="whitepaper-container06">
            <div className="whitepaper-container07">
              <span className="whitepaper-text03">Ethereum Meta V2</span>
              <span className="whitepaper-text04">Social</span>
              <div className="whitepaper-container08">
                <a
                  href="https://facebook.com/ethermetav2"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="whitepaper-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="whitepaper-icon"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/ethermetav2"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="whitepaper-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="whitepaper-icon2"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/EtherMetaV2"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="whitepaper-link3"
                >
                  <svg viewBox="0 0 1024 1024" className="whitepaper-icon4">
                    <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/ethermetav2"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="whitepaper-link4"
                >
                  <svg viewBox="0 0 1024 1024" className="whitepaper-icon6">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="whitepaper-container09">
              <div className="whitepaper-container10">
                <span className="whitepaper-text05 large">Company</span>
                <span className="whitepaper-text06 large">About Us</span>
                <span className="whitepaper-text07 large">Buy Now</span>
                <span className="whitepaper-text08 large">Partners</span>
              </div>
              <div className="whitepaper-container11">
                <span className="whitepaper-text09 large">Resources</span>
                <span className="whitepaper-text10 large">Login</span>
                <span className="whitepaper-text11 large">Register</span>
                <span className="whitepaper-text12 large">About</span>
              </div>
              <div className="whitepaper-container12">
                <span className="whitepaper-text13 large">
                  Help &amp; Support
                </span>
                <span className="whitepaper-text14 large">Contact Us</span>
                <span className="whitepaper-text15 large">
                  Knowledge Center
                </span>
                <span className="whitepaper-text16 large">Whitepaper</span>
                <span className="whitepaper-text17 large">Sponsorships</span>
              </div>
              <div className="whitepaper-container13">
                <span className="whitepaper-text18 large">Legal</span>
                <span className="whitepaper-text19 large">
                  Terms &amp; Conditions
                </span>
                <span className="whitepaper-text20 large">Privacy Policy</span>
                <span className="whitepaper-text21 large">Licenses (EULA)</span>
              </div>
            </div>
          </div>
          <span className="whitepaper-text22 small">
            All rights reserved. Copyright © 2022 Ethereum Meta V2
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Whitepaper
