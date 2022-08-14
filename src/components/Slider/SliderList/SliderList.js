import React from "react";
import styles from './SliderList.module.scss';
import cx from 'classnames';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const SliderItem = (props) => {
    const {
        heading,
        description,
        img,
        className
    } = props;
    return (
        <div className={cx(styles.container, className)}>
            <img className={styles.img} src={img} alt={heading}/>
            <div className={styles.content}>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.text}>{description}</p>
            </div>
        </div>
    );
}

const SliderList = (props) => {
    const {sliderList = []} = props;

    const renderSliderList = (item) => {
        return (<SliderItem {...item}/>);
    }
    return (
        <div>
            <Slide className={styles.indicator}>
                {sliderList && sliderList.map(renderSliderList)}
            </Slide>
        </div>
    );
}

// const slideIndex = 0;
// carousel();
//
// function carousel() {
//     const i;
//     const x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1}
//     x[slideIndex-1].style.display = "block";
//     setTimeout(carousel, 2000); // Change image every 2 seconds
// }

export default SliderList;