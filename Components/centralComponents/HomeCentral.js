function HomeCentral(props){
    let  dataPage  = {...props.dataPage};
    let arrSpese= dataPage.spesa;
    let arrCrediti = dataPage.crediti;
    let arrDebiti = dataPage.debiti;

    return(
        <div>
            <h1>questa è l'home page</h1>
            <h1>{dataPage.spesa[0].cosa}</h1>
        </div>
    )
}
export default HomeCentral;