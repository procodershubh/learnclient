import React from 'react'

function Placement() {
  return (
      <div className='container-fluid ' >
        <div className='row'>
         <div className='col-md-12 text-center'>
         <h1>MEET OUR <span className='carsoltext'>Placed Students</span> </h1>

         </div>

           
        </div>
        <div className='row'>
        <div className='col-md-12'>
                <img className='w-100 '  src='pic/placement.png' alt='placement'/>
            </div>
        </div>
        <hr/>
        
        <div className='row'>
            <div className='col-md-3'>
                 <img className='placedimg' src='pic/g1.png' alt='placed'/>
            </div>
            <div className='col-md-3'>
            <img className='placedimg' src='pic/g2.png' alt='placed'/>

                
                </div>
                <div className='col-md-3'>
                <img className='placedimg' src='pic/g3.png' alt='placed'/>

                </div>
                <div className='col-md-3'>
                <img className='placedimg' src='pic/g4.png' alt='placed'/>

                </div>

        </div>
      </div>
)
}

export default Placement