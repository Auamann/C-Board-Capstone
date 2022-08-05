import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CoinData from "../components/CoinData"
import "./CoinBoard.css"


function CoinBoard() {
    const [coins, setCoins] = useState<any[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(e.target.value);
    };


    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()
        ))

    return (
        <div className='coin-app'>
            <div className='coin-row'>
                <h1 className='search-text'>Search a Coin</h1>
                <form>
                    <input
                        className='search-bar'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </div>
            <div className="coin-container">
                {filteredCoins.map(coin => {
                    return (
                        <CoinData
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            market_cap={coin.total_volume}
                            image={coin.image}
                            price_change_percentage_24h={coin.price_change_percentage_24h}
                            ath={coin.ath}
                        />

                    );
                })}
            </div>
        </div>

    );
}

export default CoinBoard