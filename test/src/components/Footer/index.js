import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';
import symbol from '../../images/symbol.png';

const Footer = () => {
    return (
      <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
      <section className="footer-info-left">
        <section className="footer-image">
             <img src ={symbol} alt="" />
        </section>
        <section className="footer-info__returns">
          COPYRIGHT @PANDORAE GAMES 2021
        </section>        
      </section>
      <section className="footer-info-center">
        <section className="footer-info__email">
          SUBCRIBES FOR THE LATEST UPDATE
        </section>
        <section className="footer-info__terms">
        <form>
          <label>
              <input type="email" name="email" placeholder="Enter your email here " />
          </label>
          <input type="submit" value="Subcribe" />
        </form>
        </section>
      </section>
      <section className="footer-new">
        <section >
          JOIN OUR COMMUNITY
        </section>
        <section className="">
        <div className="social-container">
        <a href="https://www.youtube.com/c/jamesqquick" className="youtube social"> 
             <FontAwesomeIcon icon={faYoutube} size="2x" >
             </FontAwesomeIcon>
         </a>
         <a href="" className="facebook social"> 
             <FontAwesomeIcon icon={faFacebook} size="2x" >
             </FontAwesomeIcon>
         </a>
         <a href="" className="twitter social"> 
             <FontAwesomeIcon icon={faTwitter} size="2x" >
             </FontAwesomeIcon>
         </a>
         <a href="" className="paper social"> 
             <FontAwesomeIcon icon={faPaperPlane} size="2x" >
             </FontAwesomeIcon>
         </a>
         </div>
        </section>
      </section>
    </section>
      <hr className="footer-seperator" />
    </section>
    )
}

export default Footer
