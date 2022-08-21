import React from 'react';
import TopMenu from '../Layout/TopMenu';
import SideMenu from '../Layout/SideMenu';
import styles from '../assets/styles.module.css';

const BaseLayout = (props) => {
    return (
    <div className={styles.layout}>
       <TopMenu/>
        <div className={styles.mainContainer}>
            <SideMenu/>
            <main className={styles.main}>{props.children}</main>
        </div>
    </div>
    );
};

export default BaseLayout;
