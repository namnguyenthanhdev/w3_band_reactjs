import React, {Component} from 'react';
import styles from './DropDownList.module.scss';
import cx from 'classnames';

const DropDownItem = (props) => {
    const {idLink: id, dropDownItemName: itemName} = props;
    return (      
        <li className={styles.item}>
            <a href={id} className={styles.link}>{itemName}</a>
        </li>      
    );
}



class DropDownList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBox: false,
        }
    }

    handleBoxToggle = () => {
        this.setState({showBox: !this.state.showBox});
    }


    render() {
        const {dropDownList = [], className, showBox } = this.props;
        const renderSubNavList = (item) => {
            return (<DropDownItem {...item} />)
        }
        return (
            <div className={cx(styles.container ,className)}>
                <i className="nav-arrow-down ti-angle-down"></i>
                <div >
                    {dropDownList && dropDownList.map(renderSubNavList)}
                </div>
            </div>
        );
    }

}

export default DropDownList;