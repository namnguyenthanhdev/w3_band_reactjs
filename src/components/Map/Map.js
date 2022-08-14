import React, {Component} from "react";
import styles from './Map.module.scss';
import cx from 'classnames';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...mapInfo,
        }
    }

    render () {
        const {className = {}} = this.props;
        const {img: image, alt: alt} = this.state;
        return (
            <div >
                <img src={image} alt={alt} className={cx(styles.container, className)}/>
            </div>
        );
    }
}

const mapInfo = {
    img: require('../../assets/img/map/map.jpg'),
    alt: 'Map',
}

export default Map;