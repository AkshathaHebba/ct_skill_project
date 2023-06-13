import React from 'react';
import styles from './Footer.module.css'
import HeaderLogo2 from '../../images/HeaderLogo2.png'
const Footer = () => {
    return (
       <footer>
           <div className={styles.Footer__OuterContainer}>
               <div className={styles.Footer__Container}>
                   <div>
                       <img src={HeaderLogo2}/>
                   </div>
                   <div className={styles.Footer__copyrights}>
                       copyright 2016. All rights reserved
                   </div>
               </div>
           </div>
       </footer>
    );
};

export default Footer;