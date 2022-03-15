import React from 'react'

function Video() {
  return (
    <div class="ratio ratio-16x9">
    {/* <iframe width="420" height="315" src="https://www.youtube.com/watch?v=kQURbofO1i0" frameborder="0" allowfullscreen></iframe> */}
    {/* <video src=""></video> */}
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kQURbofO1i0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  )
}

export default Video;