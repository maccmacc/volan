'use client';

import styles from './base-layout.module.scss';
//@ts-ignore
const BaseLayout = ({ children }) => {
    return <div className={styles['base-layout']}>{children}</div>;
};

export default BaseLayout;
