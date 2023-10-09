import path from 'path';
import fs from 'fs/promises';
 async function handler (req,res){
    if(req.method==="POST"){
        let toReturn;
        const username = req.body.username;
        const psw = req.body.psw;
        const filePath = path.join(process.cwd(),'data','DataTry.json');
        const jsonData = await fs.readFile(filePath);
        const data = JSON.parse(jsonData);
        if( data.utenti[0].username=== username && data.utenti[0].psw===psw){
            console.log("dentro l'if username e psw corretti");
            data.isLogged = true;
            await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
            res.status(200).json({message:true});
            //login successo
        }else{
            console.log("dentro l'else username e psw scorretti");
            res.status(200).json({message:false});
            //login fallito
        }
    }

}
export default handler;