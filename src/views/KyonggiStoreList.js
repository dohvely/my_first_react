import React from 'react'
import './../css/KyonggiStoreList.css'
import Map from './../components/Map'


// 클래스형
class KyonggiStoreList extends React.Component {

  render() {
    // const {isLoading, movies} = this.state
    return  <section className="content">
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
                  {/* 네이버 지도 */}
                  <div><Map lat={37.554722} lng={126.970833} /></div>
                </aside>
              </div>

              <footer>footer</footer>
            </section>
  }
}

// 함수형
/* function KyonggiStoreList() {
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
          <div><Map lat={37.554722} lng={126.970833} /></div>
        </aside>
      </div>

      <footer>footer</footer>
    </section>
} */

export default KyonggiStoreList