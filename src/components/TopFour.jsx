import React from 'react';
import '../assets/topNavData.css'

function TopFour({coinsData}) {
    const fourCoin = coinsData.slice(0,4)
    return (
        <div className="fourContainer">
            { 
              fourCoin.map((four, index) =>
              <article className="articleGrid" key={index} > 
              <div className="titleTop">
                  <img src={four.image} style={{position: "absolute", width:"90%", opacity:"0.5", zIndex:"-5", top:"15px" }}alt="" />
              <h3 className="coinName">{four.symbol}/USDT</h3> 
              <p className="discountNumber">{four.ath_change_percentage.toFixed(1)}%</p>
              </div>
              <h2 className="priceCoin">{four.current_price}</h2>
              <p className="loremCoin">Cap $ {Math.round(four.market_cap/1000000)} Billions</p>
               </article>)}
        </div>
    )
}

export default TopFour
