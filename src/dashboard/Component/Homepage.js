import React from 'react'

function Homepage() {
  return (
   

      <div id="carouselExampleCaptions" className="carousel slide" style={{marginTop:'60px', }}>
 <div className="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
 </div>
 <div className="carousel-inner">
   <div className="carousel-item active carouselimg cimg1">
     {/* <img src="pic/slider-1.jpg" className="d-block w-100" alt="ss"/> */}
     <div className="carousel-caption  ">
       <h1>WELCOME TO <span className='carsoltext'>APPSquadz</span> PLATFORM </h1>
     </div>
   </div>
   <div className="carousel-item carouselimg cimg2">
     {/* <img src="pic/slider-2.jpg" className="d-block w-100" alt="ss"/> */}
     <div className="carousel-caption  ">
       <h1>WE REALLY LOVE <br/>WHAT WE DO</h1>
     </div>
   </div>
   <div className="carousel-item carouselimg cimg3">
     {/* <img src="pic/slider-3.jpg" className="d-block w-100" alt="ss"/> */}
     <div className="carousel-caption ">
       <h1>AND DO <br/> WHAT WE LOVE!</h1>
     </div>
   </div>
 </div>
 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="true"></span>
   <span className="visually-hidden">Next</span>
 </button>
 </div> 

  )
}

export default Homepage