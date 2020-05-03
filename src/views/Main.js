import React from 'react'
import { Link } from 'react-router-dom'
import './../css/Main.css'

function Main() {

  return <section>
    <div className="title">
      <h3>Hello, world</h3>
    </div>
    <div>
      <div className="list">
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/242/clapper-board_1f3ac.png" alt="movie" />
        <br/>
        <span>
          <Link to="/movieList">무비월드</Link>
        </span>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/247/money-with-wings_1f4b8.png" alt="money" />
        <br/>
        <span>
          <Link to="/kyonggiStoreList">경기지역화폐</Link>
        </span>
      </div>
    </div>
    </section>
}

export default Main