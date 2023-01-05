import React from 'react'

const BikeCard = () => {
  return (
    <div>
        <h4>Honda Activa 5G</h4>
        <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811" alt="" />
        <hr />
        <h3>$ 18/hour</h3>
        <div style={{
            background:"#fed24d",
            borderRadius: "0 0 5px 5px",
            padding: "5px"
        }}>
            <p>BOOK NOW</p>
        </div>
    </div>
  )
}

export default BikeCard