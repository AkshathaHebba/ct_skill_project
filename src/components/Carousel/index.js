import React, {useState} from 'react';
import cs from 'classnames';

import styles from './Carousel.module.css'

const Carousel = ({ images, numberOfImagesPerPage = 3 }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const numberOfPage = Math.ceil(images.length / numberOfImagesPerPage);
    let carouselNavigation = []
    for (let i = 0; i < numberOfPage; i++) {
        carouselNavigation.push(<button
            className={cs(styles.Carousel__NavigationButton, i === currentPageIndex && styles['Carousel__NavigationButton--selected'])}
            onClick={() => setCurrentPageIndex(i)}
        />)
    }

    const imagesToDisplay = images.slice(currentPageIndex * numberOfImagesPerPage, (currentPageIndex + 1) * numberOfImagesPerPage)

    return (
        <div className={styles.Carousel__Container}>
            <div className={styles.Carousel__ImageContainer}>
                {imagesToDisplay.map((image) => <img className={styles.Carousel__Image} src={image}/>)}
            </div>
            <div className={styles.Carousel__NavigationButtonContainer}>{carouselNavigation}</div>
        </div>
    );
};

export default Carousel;