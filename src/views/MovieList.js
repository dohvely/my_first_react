import React from 'react'
import './../css/MovieList.css'

function MovieList() {
  return <section>
    <div className="header">
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/242/clapper-board_1f3ac.png" className="header_image" alt="movie" />
      <span>무비월드</span>
    </div>
    <div className="content">
      <span>Movie List...</span>
    </div>
  </section>
}

export default MovieList