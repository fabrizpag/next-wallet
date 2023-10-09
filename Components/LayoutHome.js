import SideMenu from "./SideMenu.js";
import LayHomeStyle from "../styles/LayoutHome.module.css";
import SideLayout from "./SideLayout.js";
import { useState } from "react";

function LayoutHome(props){
    let pageText=props.pageText;
    let  dataPage  = {...props.dataPage};
    let [reduced,setReduced] = useState(false)

    let toReduce = () =>{
        if(reduced===false){
            setReduced(true);
        }else{
            setReduced(false);
        }
    }
    
    return (
    <div id={LayHomeStyle.sideMenuContainer}>
        <SideMenu onReduxed={toReduce}></SideMenu>
        <SideLayout dataPage={dataPage} pageText={pageText} isReduced={reduced}></SideLayout>
    </div>
    );
}
export default LayoutHome;