import HomeCentral from './centralComponents/HomeCentral';
import SpeseRicorrentiCentral from './centralComponents/SpeseRicorrentiCentral';
import styles from './Central.module.css';

function Central(props){
    let pageText=props.pageText; 
    let  dataPage  = {...props.dataPage};

    if(pageText==="speseRicorrentiPage"){
        return(
            <div id={styles.centralContainer}>
                <SpeseRicorrentiCentral></SpeseRicorrentiCentral>
            </div>
        );
    }
    else if (pageText==="homePage"){
        return(
            <div id={styles.centralContainer}>
                <HomeCentral dataPage={dataPage}></HomeCentral>
            </div>
        );
    }

}
export default Central;