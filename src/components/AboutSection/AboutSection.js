import React from 'react';

import aboutSectionStyles from './aboutSection.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutSection = (props) => {
    return (
        <div id="publishing" className={aboutSectionStyles.Publishing}>
            {props.children}
            <div className={aboutSectionStyles.PublishingInner}>
            <ScrollAnimation animateIn="fadeIn">
                <p>{props.content}</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay="1">
                <div className={aboutSectionStyles.upperContent}>
                    <img src={props.coverSrc} />
                    <iframe src={props.youtubeVideoSrc}></iframe>
                </div>
            </ScrollAnimation>
                {/* <iframe src={props.vimeoVideoSrc}></iframe>  */}
            <ScrollAnimation animateIn="fadeIn" delay="2">
                 <div className={aboutSectionStyles.vimeoWrapper}>
                    <iframe className={aboutSectionStyles.iframe} src={props.vimeoVideoSrc}  frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
            </ScrollAnimation>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </div>
    );
};

export default AboutSection;


//style={{padding:'56.25% 0 0 0' position:'relative'}} - div
//style="position:absolute;top:0;left:0;width:100%;height:100%;" - iframe



