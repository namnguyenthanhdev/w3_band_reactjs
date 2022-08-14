import React from 'react';
import '../../assets/fonts/themify-icons/themify-icons.css';
import styles from './Footer.module.scss';
import cx from 'classnames';

const Footer = (props) => {
    const {className} = props;
    return (
        <div id="footer" className={cx(styles.background, styles.container)}>
            <div className={styles.iconLayout}>
                <a href="" className={styles.link}><i className={cx(styles.icon, "ti-facebook", className)}></i></a>
                <a href="" className={styles.link}><i className={cx(styles.icon, "ti-instagram", className)}></i></a>
                <a href="" className={styles.link}><i className={cx(styles.icon, "ti-youtube", className)}></i></a>
                <a href="" className={styles.link}><i className={cx(styles.icon, "ti-pinterest", className)}></i></a>
                <a href="" className={styles.link}><i className={cx(styles.icon, "ti-twitter", className)}></i></a>
                <a href="" className={styles.link}><i className={cx(styles.icon, "ti-linkedin", className)}></i></a>
            </div>
            <p className={styles.endLine}>Powered by <a href="" className={styles.linkFinal}>w3.css</a></p>
        </div> 
    );
}



export default Footer;