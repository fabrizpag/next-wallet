import LayoutHome from "../Components/LayoutHome.js";
import path from 'path';
import fs from 'fs/promises';

function homePage(props){
    let  dataPage  =  {...props.s};
    return(
        <div>
            <LayoutHome dataPage={dataPage} pageText={"homePage"}></LayoutHome>
        </div>
    )

}
export default homePage;
export async function getStaticProps(){
    let toRet={
        spesa: [],
        crediti: [],
        debiti: []
    };
    let creditiPagati = [];
    let debitiPagati = [];
    const filePath = path.join(process.cwd(),'data','DataTry.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    creditiPagati = data.crediti.filter(n=>n.dataFine!=null);
    debitiPagati = data.debiti.filter((n)=>n.dataFine!=null);
    toRet.spesa.push(...data.spesa);
    toRet.crediti.push(...creditiPagati);
    toRet.debiti.push(...debitiPagati);
    return {
        props: {
            s:toRet
        }
    }

}