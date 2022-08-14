import React from 'react';
import cx from 'classnames';
import styles from './FormUnitComponent.module.scss';

const Direction = {
    ROW: "row",
    COLUMN: "column"
}

const ClassNameByDirection = {
    [Direction.ROW]: styles.rowContainer,
    [Direction.COLUMN]: styles.columnContainer
}

export default function FormUnitComponent(props) {
    const {className, children, labelName = "", direction = Direction.ROW} = props;

    return <div className={cx(ClassNameByDirection[direction], className)}>
        <label className={styles.label}>{labelName}</label>
        <div className={styles.content}>
            {children}
        </div>
    </div>
}