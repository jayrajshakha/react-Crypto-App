import { useEffect, useState } from 'react'
import coinsData from '../Data/DataBase'


const Price = () => {

    const [info, setInfo] = useState([])
    const [errror , setError] = useState(false)

    useEffect(() =>{

        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&spine=falsarkle')
        .then(res => {
            if(!res.ok){
                console.log('error');
                
                //  return coinsData;
            
            }
            return res.json()
        })
        .then(data => {
            setInfo(data)
            console.log(info);

        }).catch(error => {
            console.log(error);
            // setInfo(coinsData)
        })


    },[])


        if(errror){
            return setInfo(coinsData)
        }

  return (
    <div  className='w-[100%] h-[100%] sm:justify-center md:justify-center flex flex-wrap  pt-6  bg-[url("https://wallpapercave.com/wp/wp4678534.jpg")]'>

        {  
           
           info.map((i) => (

            <div  
            key={i.id}
            className='w-[370px] h-[400px] border-2 m-3 rounded-lg border-white'>
            <h2 className='text-center text-xl font-medium p-2 m-3 text-white '>{i.id}</h2>
           <div>
            <h4 className='text-center m-2 font-light text-white'>Current Price : ₹{i.current_price}</h4>
            <h4 className='text-center m-2 font-light text-white'>ATH Price : ₹{i.ath}</h4>
            <h4 className='text-center m-2 font-light text-white'>ATL Price : ₹{i.atl}</h4>
            <h4 className='text-center m-2 font-light text-white'>Total Volume : {i.total_volume}</h4>
            <h4 className='text-center m-2 font-light text-white'> Market Cap Rank : {i.market_cap_rank}</h4>
            <h4 className='text-center m-2 font-light text-white'>Total Supply : {i.total_supply}</h4>

            <br />
            <h3 className='text-center m-2 font-medium text-white'>Market Cap : ₹{i.market_cap}</h3>
           </div>

        </div>




           ))
 


        }

    
      
    </div>
  )
}

export default Price
