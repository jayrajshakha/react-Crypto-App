import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import coinsData from "../Data/DataBase";

const A = () => {
  const [coins, setCoins] = useState({});
  const [error, setError] = useState(false);
  const [curruncy , setCurruncy ] = useState('inr')

  const param = useParams()

  console.log(param.id, 'pp');

  useEffect(()=>{

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curruncy
  }&order=market_cap_desc&per_page=20&page=1&spine=falsarkle`)
    .then(res => {
      return res.json() 
    }).then(data =>{
      setCoins(data[param.id])
      console.log(coins , 'co');
    }).catch(error =>{
      console.log(error);
      setError(true)
      setCoins(coinsData[param.id])
    })



  },[curruncy])
  


    

  return (
    <div
      className={`flex flex-col justify-center items-center  w-[100%] h-[89.3vh]  bg-[url("https://wallpapercave.com/wp/wp4678534.jpg")]`} >

        <div>
          <button 
          onClick={() => curruncy === 'usd' ? setCurruncy('inr') : setCurruncy('usd')}
          className="text-center p-2 m-2 w-[130px] bg-amber-200 text-black rounded-md text-lg">{curruncy === 'usd' ? 'Price In Inr' : 'Price In Usd'} </button>
        </div>





      <div className=" sm:w-[100px] sm:m-0 md:w-[70%] sm:h-[75%] md:h-[70vh] md:mt-3 bg-white rounded-md">

    


        <h1 className="text-center text-black text-2xl font-medium m-2">{coins.id}</h1>
        <div className="flex justify-around items-center">
        <img className="h-[200px] mr-2 m-2 p-2" src={coins.image} alt="pic" />
        <div className="flex flex-col ">
        <h3 className=" font-bold text-2xl"> <span className="text-blue-700">Current Price </span> : {curruncy === 'inr' ? '₹' : "$"}{coins.current_price}</h3>
        <h3 className=" font-bold text-2xl"> <span className="text-green-700">All Time High </span> : {curruncy === 'inr' ? '₹' : "$"}{coins.ath}</h3>
        <h3 className=" font-bold text-2xl"> <span className="text-red-600">All Time Low </span> : {curruncy === 'inr' ? '₹' : "$"}{coins.atl}</h3>
        </div>
     


        </div>

        



      </div>
        
      


      
    </div>
  );
};

export default A;
