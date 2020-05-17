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
          <p>content_left</p>
          <p>content_left</p>
          <p>content_left</p>
          <p>content_left</p>
          <p>content_left</p>
        </div>
        <aside className="content_right">
          <p>aside</p>
        </aside>
      </div>

      <footer>footer</footer>
    </section>
}

export default KyonggiStoreList