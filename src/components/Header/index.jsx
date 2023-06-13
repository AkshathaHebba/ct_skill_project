import React from 'react';
import cs from 'classnames';
import HeaderLogo1 from '../../images/HeaderLogo1.png';
import HeaderLogo2 from '../../images/HeaderLogo2.png';
import styles from './Header.module.css';
import {Link} from "react-router-dom";

const Header = ({inverted}) => {
    const linksClass = cs(styles.Header__Links, inverted && styles['Header__Links--inverted']);
    return (
        <header className={cs(styles.Header__OuterContainer, inverted && styles['Header__OuterContainer--inverted'])}>
            <div className={styles.Header__Container}>
                <div className={styles.Header__LeftSection}>
                    <Link
                        to={{
                            pathname: '/'
                        }}
                        className={linksClass}>
                        {inverted ?
                            <img className={styles.Header__Logo} src={HeaderLogo2}/>
                            : <img className={styles.Header__Logo} src={HeaderLogo1}/>}
                    </Link>

                </div>
                <div className={styles.Header__RightSection}>
                    <div className={styles.Header__LinksContainer}>
                        <Link
                            to={{
                                pathname: '/about',
                                hash: "history"
                            }}
                            className={linksClass}>
                            01. History
                        </Link>
                        <Link
                            to={{
                                pathname: '/about',
                                hash: "climb"
                            }}
                            className={linksClass}>
                            02. Team
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;