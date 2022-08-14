import React, {Component} from 'react';
import SliderList from './SliderList/SliderList';
import styles from './Slider.module.scss';
import cx from 'classnames';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...sliderInfo,
        }
    }
    render (){
        const {className} = this.props;
        return (
            <div id="slider" className={cx(styles.background, className)}>
                <div className={cx(styles.container, className)}>
                    <SliderList sliderList={sliderInfo}/>
                </div>
            </div>
        )
    }
}

const sliderInfo = [
    {
        heading: 'Los Angeles',
        description: 'We had the best time playing at Venice Beach!',
        img: require('../../assets/img/slider/slider1.jpg')
    },
    {
        heading: 'New York',
        description: 'The atmosphere in New York is lorem ipsum.',
        img: require('../../assets/img/slider/slider3.jpg')
    },
    {
        heading: 'Chicago',
        description: 'Thank you, Chicago - A night we won\'t forget.',
        img: require('../../assets/img/slider/slider2.jpg')
    },
]
export default Slider;
