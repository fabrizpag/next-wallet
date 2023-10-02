
import LayoutHome from './LayoutHome';

export default function App({ Component, pageProps }) {
  console.log("eskere");
  let i = 0 // di prova per differenziare login da home 0 == home , 1 == login da cancellare
  if(i===0){
    console.log("uff1");
    return(
      <LayoutHome>
        <Component {...pageProps} />
      </LayoutHome>
    )
  }else{
    console.log("uff0");
    return <Component {...pageProps} />
  }
 
}