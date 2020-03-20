import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import contactStyles from './contactSection.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const ContactSection = (props) => {
    return (
        <div id="contact" className={contactStyles.contactWrapper}>
            {props.children}
        </div>
    );
};

export default ContactSection;