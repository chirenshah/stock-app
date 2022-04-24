import React,{useState,useEffect} from 'react';
import StockChart from './StockChart';
import StockForm from './StockForm';
import StockList from './StockList';


const Dashboard = () => {
    const [symList,setsymList] = useState({})
    const addtoList = (sym,price) => {
        setsymList({...symList,[sym]:[price]})
        console.log(symList);
    }
    
    
    useEffect(() => {
        const update = setInterval(() => {
            //updatePrices();
        }, 1000);
        return () => {
          clearInterval(update);
        };
      }, []);
    
    
    
    const updatePrices = () => {
        console.log(symList);
        const token_id = "sandbox_c9i5ulqad3i9bpe283tg";
        Object.entries(symList).map(([key,value]) => {
            const a = fetch("https://finnhub.io/api/v1/quote?symbol="+key+"&token="+token_id)
            .then((res) => res.json())
            .then((result) => {
                
                setsymList({...symList,[key]:[...symList[key],result["c"]]})
            },
            (error) => {
                console.log(error)
            })
        })
    }
    
    return (
        <div className='container'>
            <StockForm addtoList = {addtoList}/>
            <div className='content'>
                <StockList stocks = {symList} />
                <StockChart stocks = {symList}/>
            </div>
        </div>
    );
};



export default Dashboard;