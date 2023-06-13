import React from 'react';
import Hero1 from '../../images/Hero1.png';
import Hero2 from '../../images/Hero2.png';
import Hero3 from '../../images/Hero3.png';
import Hero4 from '../../images/Hero4.png';

import styles from './Background.module.css'

const PAGE_BACKGROUND_IMAGE_MAP = {
    Hero1,
    Hero2,
    Hero3,
    Hero4,
}

const PageBackground = ({ imageName, children, imageHeight }) => {
    const image = PAGE_BACKGROUND_IMAGE_MAP[imageName];
    const imageStyleOverride = imageHeight ? { height: imageHeight}: {}
    return (
        <div className={styles.PageBackground__Container} style={imageStyleOverride}>
            <img className={styles.Background__ImageContainer} src={image} />
            {children}
        </div>
    );
};

export default PageBackground;