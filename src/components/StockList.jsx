import React,{useState,useEffect} from 'react';

const StockList = (props) => {
    const [time, settime] = useState(0)
    useEffect(() => {
        const update = setInterval(() => {
            settime(time => (time+1)%5)
        }, 1000);
        return () => {
          clearInterval(update);
        };
      }, []);
    return (
        <div className='list'>
            {Object.keys(props.stocks).length != 0 &&
            <div>Refresh in {time}</div>}
           {Object.entries(props.stocks).map(([x,y]) => (<div key={x}> <div className='title'>{x}</div>:<span>{y[y.length-1]}</span></div>))}
        </div>
    );
};

export default StockList;