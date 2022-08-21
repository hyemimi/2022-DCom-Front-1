import React, { useEffect, useState } from 'react';
import TopMenu from '../Layout/TopMenu';
import SideMenu from '../Layout/SideMenu';
import styles from '../assets/styles.module.css';
import { useLocation } from "react-router-dom"

const BaseLayout = (props) => {
    const loc = useLocation();
    const [location, setLocation] = useState(loc);
    useEffect(()=>{
        setLocation(loc);
    },[location])

    return (
    <div className={styles.layout}>
       <TopMenu/>
        <div className={styles.mainContainer}>
            <SideMenu/>
            <main className={styles.main}>{props.children}</main>:
            {/* {location?.pathname !== '/record' ? 
                <main className={styles.main}>{props.children}</main>:
                <main className={styles.main} style={{padding: '0px 0px 0px 250px'}}>{props.children}</main>
            } */}
        </div>
    </div>
    );
};

export default BaseLayout;
