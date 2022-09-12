import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">Ethereum Meta V2</h1>
            <h1 className="home-text01 headingOne">Join the Merge!</h1>
            <span className="home-text02 lead">
              <span className="lead">
                Ethereum Meta V2 addresses a major weakness in Ethereum: the
                lack of privacy. Ethereum Meta V2 mixes transaction tokens by
                using other wallets controlled by Smart Contracts.
              </span>
              <br></br>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <div className="home-container04">
                  <button className="home-button button buttonSmall">
                    buy now
                  </button>
                </div>
              </div>
              <OutlineGrayButton button="read more"></OutlineGrayButton>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/logo-1500h.png"
        className="home-image"
      />
      <section className="home-features">
        <div className="home-container05">
          <img
            alt="image"
            src="/playground_assets/cube1.svg"
            className="home-image01"
          />
          <h5 className="home-text05 headingThree">How ETHMV2 Works</h5>
          <span className="home-text06">
            With the new Ethereum Meta V2 Smart Contracts, ETHMV2 allows direct
            anonymous payments between parties.
          </span>
        </div>
        <div className="home-container06">
          <img
            alt="image"
            src="/playground_assets/person1.svg"
            className="home-image02"
          />
          <h5 className="home-text07 headingThree">Mixing Tokens</h5>
          <span className="home-text08">
            Ethereum Meta mixes transaction tokens by using other wallets
            controlled by Smart Contracts
          </span>
        </div>
        <div className="home-container07">
          <img
            alt="image"
            src="/playground_assets/rocket1.svg"
            className="home-image03"
          />
          <h5 className="home-text09 headingThree">ROI</h5>
          <span className="home-text10">
            ETHMV2 is accessible through normal Ethereum wallets (see all
            supported wallets below), which allows for an easy transition of
            normal Ethereum to a Meta layer.
          </span>
        </div>
        <div className="home-container08">
          <img
            alt="image"
            src="/playground_assets/credit%20card1.svg"
            className="home-image04"
          />
          <h5 className="home-text11 headingThree">Privacy Layer</h5>
          <span className="home-text12">
            <span>Untraceable Transactions</span>
            <br></br>
            <span>powered by</span>
            <br></br>
            <span>Smart Contracts</span>
            <br></br>
            <span>
              If Ethereum is like http then Ethereum Meta V2 is https — a secure
              transport layer
            </span>
          </span>
        </div>
      </section>
      <section className="home-container09">
        <div className="home-container10">
          <h1 className="home-text20">Coin Specifications</h1>
          <span className="home-text21">
            Ethereum Meta V2 addresses a major weakness in Ethereum: the lack of
            privacy. Ethereum Meta V2 enables smart contracts where no friend,
            family, nor foe can see what you bought or for how much.
          </span>
        </div>
        <div className="home-container11">
          <div className="home-container12">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1641580543317-4cea85891afe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxldGhlcmV1bXxlbnwwfHx8fDE2NjMwMTQ0ODU&amp;ixlib=rb-1.2.1&amp;w=1100"
              className="home-image05"
            />
            <span className="home-text22 small">
              <span className="home-text23">
                &quot;Ethereum community should do more to be friendly to anon
                contributors&quot;
              </span>
              <br></br>
              <span className="home-text25">-vitalik.eth</span>
            </span>
            <div className="home-container13">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg2fHxjcnlwdG98ZW58MHx8fHwxNjYzMDE0ODI0&amp;ixlib=rb-1.2.1&amp;w=1000"
                className="home-image06"
              />
            </div>
          </div>
          <div className="home-container14">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5Mnx8ZXRoZXJldW18ZW58MHx8fHwxNjYzMDE1MDMy&amp;ixlib=rb-1.2.1&amp;w=1100"
              className="home-image07"
            />
            <div className="home-container15">
              <h3 className="headingTwo">How Ethereum Meta V2 Works!</h3>
              <p>
                <br></br>
                <span>
                  With the new Ethereum Meta V2 Smart Contracts, Ethereum Meta
                  V2 allows direct anonymous payments between parties. Ethereum
                  Meta V2 transactions exist alongside normal (non-anonymous)
                  transactions. Each user can convert non-anonymous coins
                  (Ethers) into anonymous coins, which we call Ethereum Meta V2.
                  Users can then send Ethereum Meta V2 to other users, and split
                  or merge Ethereum Meta V2 they own in any way that preserves
                  the total value. Users can also convert Ethereum Meta V2 back
                  into normal Ether, obfuscating any possible traceability.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container16">
          <div className="home-container17">
            <div className="home-container18">
              <h2 className="home-text31 headingOne">
                Adding ETHMV2 into your wallet
              </h2>
              <p className="home-text32">
                <span>
                  Ethereum Meta V2 can be easily added to any ERC20 compatible
                  wallets. simply by copying information below: token address
                  and symbol to the custom token tab. We believe everything has
                  to be easy.
                </span>
                <br></br>
              </p>
              <p className="home-text35">contract information</p>
              <p className="home-text36">Coming Soon!</p>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container19">
              <div className="home-container20">
                <div className="home-container21">
                  <img
                    alt="image"
                    src="/playground_assets/logo_eidoo-200h.png"
                    className="home-image08"
                  />
                </div>
                <div className="home-container22">
                  <img
                    alt="image"
                    src="/playground_assets/imtoken-logo-200h.png"
                    className="home-image09"
                  />
                </div>
                <div className="home-container23">
                  <img
                    alt="image"
                    src="/playground_assets/metamask_logo-200h.png"
                    className="home-image10"
                  />
                </div>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <img
                    alt="image"
                    src="/playground_assets/myetherwallet-logo-200h.png"
                    className="home-image11"
                  />
                </div>
                <div className="home-container26">
                  <img
                    alt="image"
                    src="/playground_assets/parity_logo-200h.png"
                    className="home-image12"
                  />
                </div>
                <div className="home-container27">
                  <img
                    alt="image"
                    src="/playground_assets/proxy_logo-200h.png"
                    className="home-image13"
                  />
                </div>
              </div>
              <div className="home-container28">
                <div className="home-container29">
                  <img
                    alt="image"
                    src="/playground_assets/mist_logo-200h.png"
                    className="home-image14"
                  />
                </div>
                <div className="home-container30">
                  <img
                    alt="image"
                    src="/playground_assets/trust_logo-200h.png"
                    className="home-image15"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image16"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container31">
          <div className="home-container32">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text37 headingTwo">Roadmap 2022/2023</h2>
          <h3 className="home-text38 headingTwo">
            <span className="home-text39">Merging into new heights</span>
            <br></br>
          </h3>
          <span className="home-text41">
            This is the Roadmap for simultaneous implementation to place
            Ethereum Meta among top 100 cryptos in 2019
          </span>
        </div>
        <div className="home-container33">
          <div className="home-container34">
            <div className="home-container35">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon2">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-container36">
            <div className="home-container37">
              <h5 className="home-text42 headingThree">1. Q4 2022</h5>
              <span>
                All current Ethereum Meta V1 tokens will be swapped with
                Ethereum Meta V2 tokens. This will fix the current pricing
                errors on multiple exchanges and regain expandability.
              </span>
            </div>
            <div className="home-container38">
              <h5 className="home-text44 headingThree">2. Q1 2023</h5>
              <span>
                Expansion of Ethereum Meta V2 community. We see a healthy
                growing community as the basis to support and spread the word
                about Ethereum Meta V2
              </span>
            </div>
            <div className="home-container39">
              <h5 className="home-text46 headingThree">3. Q1 2023</h5>
              <span>
                Implementing the fully decentralization and anonymity of
                Ethereum Meta V2 across multiple platforms. 
              </span>
            </div>
          </div>
        </div>
        <div className="home-divider"></div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
