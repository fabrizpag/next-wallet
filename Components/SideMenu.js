import styles from './SideMenu.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

function SideMenu(props){
    const router = useRouter();
    let w = "";
    let op;
    let obj = {
        lab1: "home",
        lab2: "spese",
        lab3: "crediti",
        lab4: "debiti",
        lab5: "spese ricorrenti"
    }
    let [reduced,setReduced] = useState(false);
    reduced?w="3%":w="14%";
    reduced?op=0:op=1;
    
    let Riduci = ()=>{
        if(reduced===false){
            console.log("ridottooo");
            console.log(reduced);
            setReduced(true);
            props.onReduxed();
        }else{
            console.log("espandi");
            console.log(reduced);
            setReduced(false);
            props.onReduxed();
        }
    }
    function clickHome(){
        router.push('homePage');
    }

    function clickSpeseR(){
        router.push('speseRicorrenti');
    }

    return(
        <div id={styles.sideMenuContainer} style={{width:w}}>
            <div id={styles.sideMenuDivMenu}>
                <img id={styles.sideMenuMenuImg} src='/icons8-menu-24.png' alt='m' onClick={Riduci} ></img>
            </div>
            <div className={styles.sideMenuItem} style={{top: "35px"}}>
                <img className={styles.sideMenuImg} id={styles.sideMenuHomeImg} src='/icons8-casa-24W.png' alt='d'/>
                <label onClick={clickHome} id={styles.sm1} className={styles.sideMenuItemLab} style={{opacity:op}}>{reduced===false?obj.lab1:""}</label>
            </div>
            <div className={styles.sideMenuItem} style={{top: "70px"}}>
                <img className={styles.sideMenuImg}  id={styles.sideMenuSpeseImg} src='/icons8-yandex-money-24W.png' alt='d'/>
                <label id={styles.sm2} className={styles.sideMenuItemLab} style={{opacity:op}}>{reduced===false?obj.lab2:""}</label>
            </div>
            <div className={styles.sideMenuItem} style={{top: "105px"}}>
                <img className={styles.sideMenuImg}  id={styles.sideMenuSpeseRImg} src='/icons8-bills-24W.png' alt='d'/>
                <label onClick={clickSpeseR} id={styles.sm3} className={styles.sideMenuItemLab} style={{opacity:op}}>{reduced===false?obj.lab5:""}</label>
            </div>
            <div className={styles.sideMenuItem} style={{top: "140px"}}>
                <img className={styles.sideMenuImg}  id={styles.sideMenuCreditiImg} src='/icons8-ricevi-il-dollaro-24W.png' alt='d'/>
                <label id={styles.sm4} className={styles.sideMenuItemLab} style={{opacity:op}}>{reduced===false?obj.lab3:""}</label>
            </div>
            <div className={styles.sideMenuItem} style={{top: "175px"}}>
                <img className={styles.sideMenuImg}  id={styles.sideMenuDebitiImg} src='/icons8-debito-24W.png' alt='d'/>
                <label id={styles.sm5} className={styles.sideMenuItemLab} style={{opacity:op}}>{reduced===false?obj.lab4:""}</label>
            </div>
        </div>
    );
}
export default SideMenu;