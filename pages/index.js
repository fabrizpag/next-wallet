
import path from 'path';
import fs from 'fs/promises';
import { useRef } from 'react';
import { useRouter } from 'next/router';

function login(props){
  const router = useRouter();
  const { data } = props;
  const usernameInput = useRef();
  const pswInput = useRef();

  function checkLogin(event){
    event.preventDefault();
    console.log("ciaooo1");
    let obj = {username:usernameInput.current.value, psw:pswInput.current.value};
    fetch("api/log",{
        method:"POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json" 
        }
    }).then((Response)=>Response.json())
    .then((data)=> {
        if(data.message===true){
            router.push('homePage');
        }else{

        }
    });
  }
    return (
        <div>
            questa è la login brutta
            <form onSubmit={checkLogin}>
                <input type="text" placeholder="username" ref={usernameInput}></input>
                <input type="text" placeholder="password" ref={pswInput}></input>
                <button type="submit">fatto</button>
            </form>
        </div>
    );
}

export async function getStaticProps(){
    const filePath = path.join(process.cwd(),'data','DataTry.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return{
        props:{data}
    }
}

export default login;
