import React from 'react'
import './../css/KyonggiStoreList.css'

function KyonggiStoreList() {
  return <section className="content">
      <header>
        <p>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/247/money-with-wings_1f4b8.png" alt="money" />
          경기지역화폐
        </p>
      </header>

      <div className="content_wrapper">
        <div className="content_left">
          <div>
            <select></select>
            <input></input>
            <button>검색</button>
          </div>
          <div>
            <ul>
              <li>content_left</li>
              <li>content_left</li>
              <li>content_left</li>
              <li>content_left</li>
              <li>content_left</li>
              <li>content_left</li>
              <li>content_left</li>
            </ul>
          </div>
        </div>
        <aside className="content_right">
          <p>aside</p>
        </aside>
      </div>

      <footer>footer</footer>
    </section>
}

export default KyonggiStoreList