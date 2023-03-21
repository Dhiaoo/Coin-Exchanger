import React, { useState } from 'react';
import Footer from '../HomePage/Footer';

 function Reviews() {
  const [review, setReview] = useState('');
  const [Reviews, setReviews] = useState([]);

  const onClickHandler = ()=>{
      setReviews((Reviews)=>[...Reviews, review]);
  }
  const onChangeHandler = (e)=>{
      setReview(e.target.value);
  }
  return (
    <>
      <div className='container border border-2 m-5' style={{height:600+'px', overflowX:'scroll', backgroundColor:'#f7f6f6', borderRadius:20+'px'}}>
       <div className="container my-1 py-5 text-dark">
      <div className="row d-flex justify-content-center">
      <div className="col-md-12 col-lg-10 col-xl-8">
      <div className='card mb-3'>
            <div className='card-body'>
                <div className='d-flex flex-start flex-column justify-content-between'>
                    <textarea class="form-control py-3 my-3" placeholder="Leave a Review here" onChange={onChangeHandler} ></textarea> 
                 </div>
                 <button className='btn btn-outline-success' onClick={onClickHandler}>Add Review</button>               
            </div>
          </div>
        
        {Reviews.map((review)=>(
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex flex-start">
              <img className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="40"
                height="40" />
              <div className="w-100">
                <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center mb-3" style={{overflowWrap:true}}>
                  <h6 className="text-primary fw-bold mb-0">
                    lara_stewart
                  </h6>
                  <span className="text-dark ms-2">{review}</span>
                  <p className="mb-0">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        )) }
          
        </div>
    </div>
  </div>
       </div>
        <Footer />
    </>
  )
}
export default Reviews;
