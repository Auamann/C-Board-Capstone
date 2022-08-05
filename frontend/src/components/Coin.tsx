import React from "react"
import "./Coin.css"


interface CoinProps{

    name: string,
    key: number,
    price: number,
    market_cap: number,
    volume: number,
    image: string,
    priceChange:number,
    symbol: string
}

export default function Coin(props : CoinProps){
    return (
        <div className='coin-card'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={props.image}/>
                    <h1 className="coin-name">{props.name}</h1>
                    <p className='coin-symbol'>{props.symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${props.price}</p>
                    <p className='coin-volume'>${props.volume.toLocaleString()}</p>



                    <p className='coin-market_cap'>
                        Mkt Cap: ${props.market_cap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

