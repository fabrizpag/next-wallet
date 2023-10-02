import SideMenu from "../Components/SideMenu.js";
import LayHomeStyle from "../styles/LayoutHome.module.css"

function LayoutHome(props){
    
    return (
    <div id={LayHomeStyle.sideMenuContainer}>
        <SideMenu></SideMenu>
        {props.children} 
    </div>
    );
}
export default LayoutHome;