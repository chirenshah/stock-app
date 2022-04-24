import { Button, TextField, Alert } from '@mui/material';
import React, { useState} from 'react';

const StockForm = (props) => {
    const[sym,setSym] = useState("")
    const[err,seterr] = useState(false)
    const token_id = "sandbox_c9i5ulqad3i9bpe283tg";
    const addSym = (sym) => {
        sym = sym.toUpperCase()
        const a = fetch("https://finnhub.io/api/v1/quote?symbol="+sym+"&token="+token_id)
        .then(ele => ele.json())
        .then(res => {
            if(res['c'] > 0){
                props.addtoList(sym,res['c'])
                seterr(false)
            }else{
                seterr(true)
            }
    },
        (error) => {
            seterr(true)
        }
        )}

    return (
        <div className='form'>
            {err == true &&
            <Alert severity="error">Wrong Symbol</Alert>
            }
            <TextField onChange={(event) => {
                setSym(event.target.value);
            }} >Stock Symbol</TextField>
            <Button variant="outlined" onClick={() => addSym(sym) }>Add to List</Button>
        </div>
    );
};

export default StockForm;