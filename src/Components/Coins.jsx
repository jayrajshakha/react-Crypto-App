import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import coinsData from "../Data/DataBase";

const Coins = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [page, SetPage] = useState(10);
  console.log(page);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${page}&page=1&spine=falsarkle`
      )
        .then((res) => {
          if (!res.ok) {
            setError(true)
            setError(true);
            // setData(coinsData)
          }

          return res.json();
        })
        .then((data) => {
          console.log("data", data);
          setData(data);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          setData(coinsData)

        });
    };

    fetchData();
  }, [page]);

  return (
    <div className="flex flex-wrap md:justify-between sm:justify-center">
      {data.map((i, index) => (
        <div
          key={i.id}
          className="bg-white rounded-md p-2 m-9 w-[170px] h-[170px]"
        >
          <Link to={`/a/${index}`}>
            <h1 className="text-center font-medium text-xl">{i.id}</h1>
            <img className="h-[100px] mx-auto my-5" src={i.image} alt="coin" />
          </Link>
        </div>
      ))}
          
          <button 
          onClick={() => SetPage(preve => preve + 10 )}
          className=" hover:bg-slate-300 duration-75  block  text-center sm:text-sm  md:text-xl text-white bg-black rounded-md p-2 mx-auto mb-2 "> Next Page</button>

    </div>
  );
};

export default Coins;
