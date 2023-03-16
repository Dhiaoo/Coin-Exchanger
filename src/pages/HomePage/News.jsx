import React from 'react'

export default function News() {
  return (
    <>
    <div class="row">
    <h1 className='px-3 py-5 '>Latest News :</h1>
        <div class="col-sm-3 mb-3 ">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">title</h5>
                    <p class="card-text">subject</p>
                    <a href="#" class="btn btn-outline-secondary">See All</a>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">title </h5>
                    <p class="card-text">Subject</p>
                    <a href="#" class="btn btn-outline-secondary">See All</a>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">title </h5>
                    <p class="card-text">Subject</p>
                    <a href="#" class="btn btn-outline-secondary">See All</a>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">title </h5>
                    <p class="card-text">Subject</p>
                    <a href="#" class="btn btn-outline-secondary">See All</a>
                </div>
            </div>
        </div>

        
    </div>
    <button className='btn btn-outline-success mx-3 my-4 align-items-center'>Show All News</button>
    </>
  )
}
