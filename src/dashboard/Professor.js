import React from 'react'

function Professor() {
  return (

    <div className='container-fluid ' style={{marginTop:'60px'}}>
        <div className='row'>
            <div className='col-md-12 text-center'>
            <h1>MEET OUR <span className='carsoltext'>Expert Instructors</span> </h1>
            
            <h4><span className='carsoltext'>"Become a top IT professional with advanced tech skills"</span> </h4>

            </div>
        </div>

        <div className='row mt-5' >
            <div className='col-md-2'></div>
        <div className='col-md-4'>
        <div class="card mb-3"  >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="pic/shubham.jpg" class="img-fluid rounded-start" alt="er shubham"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">ER. Shubham Tiwari</h5>
        <p class="card-text">I teach you how to build web applications using JavaScript across the front-end and back-end Including Database.</p>
        <p class="card-text"><small class="text-body-secondary">MERN FULL STACK </small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className='col-md-4'>
        <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="pic/akshay.png" class="img-fluid rounded-start" alt="er akshay"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">ER. Akshay Singh</h5>
        <p class="card-text">I teach you how to build Websites using Java Full Stack across the front-end and back-end Including Database.</p>
        <p class="card-text"><small class="text-body-secondary">JAVA FULL SHOP</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className='col-md-2'></div>

        </div>

        <div className='row mt-5'>
           <div className='col-md-2'></div>
           <div className='col-md-8'>
           <p className='fw-bold fst-italic lh-base ' style={{color:'darkslategray'}}>
            ER. Shubham Tiwari & Akshay Singh is one of the best industry experts providing Java training,MERN Stack training,front-END,Web Designer
             with more than 3 years of experience at APPSquadz. He has expertise in shaping the IT 
             career of many students. He follows a unique approach to enable students to learn all the
              concepts and become job-ready.
            </p>

           </div>
           <div className='col-md-2'></div>

        </div>
        

    </div>
  )
}

export default Professor