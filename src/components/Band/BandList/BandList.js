import React from 'react';
import cx from 'classnames';
import styles from './BandList.module.scss';

const BandMember = (props) => {
    const {
        nameMember, imgMember, onClick = () => {
        }
    } = props;

    function handleClick() {
        onClick(props);
    }

    return (
        <div className={styles.item} onClick={handleClick}>
            <p className={styles.name}>{nameMember}</p>
            <img src={imgMember} alt={nameMember} className={styles.img}/>
        </div>
    );
}


const BandMemberList = (props) => {
    const {
        data = [], className, onItemClick = () => {
        }
    } = props;


    const renderBandItemList = (item) => {
        return (<BandMember onClick={onItemClick} key={item?.id} {...item}/>)
    }

    return (
        <div className={cx(styles.container, className)}>
            {data.map(renderBandItemList)}
        </div>

    );
}


export default BandMemberList;