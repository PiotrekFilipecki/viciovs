import React from 'react';
import { Link } from "gatsby"
import backgroundVideoStyles from './background-video.module.css';
// import scrollTo from 'gatsby-plugin-smoothscroll';
// import ScrollAnimation from 'react-animate-on-scroll';


const BackgroundVideo = (props) => {
    const ScrollToLink = () => (
    
        <div className={backgroundVideoStyles.scrollNavigation}>
            <img src={props.siteLogo} />
            <Link to="/#merchandise">Merchandise</Link>
            <Link to="/#publishing">Publishing</Link>
            <Link to="/#contact">Contact</Link>
        </div>
    )
    return (
        <div className={backgroundVideoStyles.backgroundWrapper}>
            <video className={backgroundVideoStyles.video} autoPlay="autoplay" loop="loop" muted playsInline>
                <source src={props.videoSource} />
            </video>
            {/* <button onClick={() => scrollTo('#merch')}>My link</button> */}
            <ScrollToLink />
            {/* <div className={backgroundVideoStyles.scrollNavigation}>
                <a href="#">Merchandise</a>
                <a href="#">Publishing</a>
                <a href="#">Contact</a>
            </div> */}
            <div className="adjustDiv"></div>
        </div>
    );
};

export default BackgroundVideo;