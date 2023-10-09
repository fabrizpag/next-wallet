import styles from './SideLayout.module.css';
import { useState } from 'react';
import Central from './Central';
import HeadMenu from './HeadMenu';


function SideLayout(props){
    let pageText=props.pageText;
    let  dataPage  = {...props.dataPage};
    let notreduced = props.isReduced;
    let w="";
    notreduced?w="97%" : w="86%";

    return(
        <div id={styles.sideLayoutContainer} style={{width:w,backgroundColor:'green'}}>
            <HeadMenu></HeadMenu>
            <Central dataPage={dataPage} pageText={pageText} ></Central>
        </div>
    );

}
export default SideLayout;