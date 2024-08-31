import React from 'react';
import { useNavigate } from 'react-router-dom';



function Course() {

  const navigate =useNavigate();

  const routeChange =() =>{
      navigate('/join')
  }






  return (
    <div className='container-fluid ' >
        <div className='row'>
            <div className='col-md-12 text-center'>
           
            <h1><span className='carsoltext'>We offer Training on Live Projects
            </span> </h1>

            </div>
        </div>


        <div className='row mt-5'>
            <div className='col-md-2'>
              <img src='pic/learn.svg' alt='sk'/>
            </div>

                    <div className='col-md-2'>
                    <div class="card course" >
  <img src="pic/cor1.jpg" class="card-img-top" alt="java"/>
  <div class="card-body">
    <h5 class="card-title">JAVA full Stack</h5>
    <p class="card-text">In This Course You Will Learn Front-End with React or Angular with java as a Backed And MY-SQL DB.</p>
    <input type='button' className='btn btn-info position-absolute top-100 start-50 translate-middle joinbtn' value='Join Now' onClick={routeChange}/>
    </div>
</div>

                    </div>

                    <div className='col-md-2'>
                    <div class="card course" >
  <img src="pic/c2.jpg" class="card-img-top" alt="webdesign"/>
  <div class="card-body">
    <h5 class="card-title">Web Design</h5>
    <p class="card-text">In This Course You Will Learn HTML,CSS,JavaScript,PHOTOSHOP,FIGMA,UX </p>
    <input type='button' className='btn btn-info position-absolute top-100 start-50 translate-middle joinbtn ' value='Join Now' onClick={routeChange} />
    </div>
</div>
                        
                        </div>

                        <div className='col-md-2'>
                        <div class="card course" >
  <img src="pic/c3.jpg" class="card-img-top" alt="frontend"/>
  <div class="card-body">
    <h5 class="card-title">frontend Dev...</h5>
    <p class="card-text">In This Course You Will Learn Front-End with React or Angular .</p>
    <input type='button' className='btn btn-info position-absolute top-100 start-50 translate-middle joinbtn' value='Join Now' onClick={routeChange}/>
    </div>
</div>
                        
                        </div>
                        
                        <div className='col-md-2 '>
                        <div class="card course" >
  <img src="pic/c4.jpg" class="card-img-top" alt="...mern"/>
  <div class="card-body">
    <h5 class="card-title">MERN Full Stack</h5>
    <p class="card-text">In This Course We Will Learn Front-End with React or Angular with NODE.JS & EXPRESS.JS as a Backed And Mongo DB.</p>
    <input type='button' className='btn btn-info position-absolute top-100 start-50 translate-middle joinbtn' value='Join Now' onClick={routeChange} />

  </div>
</div>
                        
                        </div>
           
            <div className='col-md-2'>
            <img src='pic/placements.svg' alt='sk'/>

            </div>

        </div>
    </div>
  )
}

export default Course