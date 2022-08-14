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

    handleOpenToggle = () => {
        this.setState({showBox: true});
    }

    handleCloseToggle = () => {
        this.setState({showBox: false});
    }

    renderSubNavList = (item) => {
        return (<DropDownItem key={item?.dropDownItemName} {...item} />)
    }

    render() {
        const {dropDownList = [], className, itemName} = this.props;
        const {showBox} = this.state;


        return (
            <div
                onClick={this.handleBoxToggle}
                onMouseOver={this.handleOpenToggle}
                onMouseOut={this.handleCloseToggle}
                className={cx(styles.container, className)}
            >
                {itemName}
                <i className="nav-arrow-down ti-angle-down"/>
                {showBox && dropDownList && dropDownList.map(this.renderSubNavList)}
            </div>
        );
    }

}

export default DropDownList;