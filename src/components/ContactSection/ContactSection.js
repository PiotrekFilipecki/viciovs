import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import contactStyles from './contactSection.module.css';

const ContactSection = (props) => {
    return (
        <div id="contact" className={contactStyles.contactWrapper}>
            {props.children}
        </div>
    );
};

export default ContactSection;