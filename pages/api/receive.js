import path from 'path';
import fs from 'fs/promises';
 async function handler (req,res){
    if(req.method==="POPST"){
        if(req.body.type==="all"){
            //restituisci tutte le spese effettuate
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
            debitiPagati = data.debiti.filter(n=>n.dataFine!=null);
            toRet.spesa.push(...data.spesa);
            toRet.crediti.push(...creditiPagati);
            toRet.debiti.push(...debitiPagati);
            res.status(200).json(toRet);
            
           // sono disordinati in base al tempo per il momento
        }
        else if(req.body.type==="crediti"){
            // restituisci tutti i crediti da pagare,
        } else if(req.body.type==="debiti"){
            // restituisci tutti i debiti da pagare
            
        }
    }
 }
 export default handler;