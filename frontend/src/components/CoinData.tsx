import React from "react"
import "./CoinData.css"


interface CoinProps {

    name: string,
    key: number,
    price: number,
    market_cap: number,
    image: string,
    symbol: string
    price_change_percentage_24h: number,
    ath: number

}

export default function CoinData(props: CoinProps) {
    return (

        <div className='coin-card'>
            <div className='coin-row'>
                <div>

                    <img className="coin-image" src={props.image}/>
                    <div className="coin-name-wrap"/>
                    <h1 className="coin-name">{props.name} </h1>
                    <p className='coin-symbol'>{props.symbol.toUpperCase()} </p>
                </div>

                <div className='coin-data'>
                    <p className='coin-price'>${props.price} </p>
                    <p className='coin-market_cap'>Mkt Cap: ${props.market_cap.toLocaleString()} </p>
                    <p className="coin-change">24h Change: {props.price_change_percentage_24h.toFixed(2)}%</p>
                    <p className="coin-ath">ATH: ${props.ath}</p>

                </div>
            </div>
        </div>
    )
}

