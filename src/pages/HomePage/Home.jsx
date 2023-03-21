import React from 'react';
import { NavLink } from 'react-router-dom';
import bg from '../../assets/imgs/bgImg.jpg';
import fastEx from '../../assets/imgs/HomeImgs/icons8-fast-64.png';
import guaranty from '../../assets/imgs/HomeImgs/icons8-guarantee-64.png';
import profit from '../../assets/imgs/HomeImgs/icons8-profitable-64.png';
import bitcoin from '../../assets/imgs/HomeImgs/icons8-bitcoin-48.png';
import paypal from '../../assets/imgs/HomeImgs/icons8-paypal-96.png';
import payeer from '../../assets/imgs/HomeImgs/icons8-p-67.png';
import usdt from '../../assets/imgs/HomeImgs/icons8-tether-48.png';
import Reviews from './Review';
import exchange from '../../assets/imgs/HomeImgs/icons8-exchange-80.png'
import News from './News';
import Footer from './Footer';

 function Home() {
  return (
    <>
      
      <div className="card text-bg-dark  " style={{width:100+'%', height:100+'%', }} >
       <img src={bg} class="card-img img-fluid object-fit-cover"  alt="..." />
       <div className="card-img-overlay text-center d-flex  flex-column justify-content-center my-5 py-4 flex-fill">
              <h4 className=" fs-3  fw-bold  " style={{color:'#FCFDFF', paddingTop:20+"px", fontSize:10+"rem"}} >We are Storm in the Market  of <span style={{color:'#6868ff'}}>Exchanging</span> Coins  </h4>
              <p className='fs-6 fw-bold' style={{color:'#7C809D'}}>Sell/Buy your coins with the speed of lightning</p>
              <p className='fs-6 fw-bold' style={{color:'#7C809D'}}>More than 10 coins  avalible </p>
              <div className='d-flex flex-row justify-content-center'>
              <NavLink to='/Sell'><button className='btn btn-secondary mx-1 mx-sm-2' >Start Selling</button></NavLink>
              <NavLink to='/Buy'><button className='btn btn-secondary mx-1 mx-sm-2' >Start Buying</button></NavLink>
              </div>
        </div>
      </div>
      <div className=' p-3  ' style={{backgroundColor: '#f7f6f6'}}>
         <h1  className="px-3 py-5">Advantages :</h1>
        <div className='d-flex flex-column flex-sm-row  p-2' >
          <div className='container d-flex flex-column  p-5 m-2 border border-2 align-items-start shadow ' style={{borderRadius:20+'px', backgroundColor:"#7C809D", opacity:0.9}}>
           <img src={fastEx}   style={{height:64+'px', width:64+'px'}} className='my-4' alt="..." />
            <h3 >FAST EXCHANGING</h3>
            <p>We will provide not only reliability and the best rate, but also for quick exchange.</p>
          </div>
          <div className='container d-flex flex-column p-5 border m-2 border-2 align-items-start shadow'  style={{borderRadius:20+'px', backgroundColor:"#7C809D", opacity:0.9}}>
          <img src={guaranty}   style={{height:64+'px', width:64+'px'}} className='my-4' alt="..." />
            <h3>HIGH LEVEL RELIABILITY</h3>
            <p>If something went wrong, we will always refund your money.</p>
          </div>
          <div className='container d-flex flex-column p-5 m-2 border border-2 align-items-start shadow' style={{borderRadius:20+'px', backgroundColor:"#7C809D", opacity:0.9}}>
          <img src={profit}   style={{height:64+'px', width:64+'px'}} className='my-4' alt="..." />
            <h3>PROFITABLE EXCHANGE</h3>
            <p>Qualitatively change the currency online.</p>
          </div>
        </div>
        <div className='d-flex flex-column flex-sm-row p-2' >
          <div className='container d-flex flex-column m-2 p-5 border border-2 align-items-start shadow' style={{borderRadius:20+'px', backgroundColor:"#7C809D", opacity:0.9}}>
           <img src={fastEx}   style={{height:64+'px', width:64+'px'}} className='my-4' alt="..." />
            <h3>FAST EXCHANGING</h3>
            <p>We will provide not only reliability and the best rate, but also for quick exchange.</p>
          </div>
          <div className='container d-flex flex-column m-2 p-5 border border-2 align-items-start shadow' style={{borderRadius:20+'px', backgroundColor:"#7C809D", opacity:0.9}}>
          <img src={guaranty}   style={{height:64+'px', width:64+'px'}} className='my-4' alt="..." />
            <h3>HIGH LEVEL RELIABILITY</h3>
            <p>If something went wrong, we will always refund your money.</p>
          </div>
          <div className='container d-flex flex-column m-2 p-5 border border-2 align-items-start shadow' style={{borderRadius:20+'px', backgroundColor:"#7C809D", opacity:0.9}}>
          <img src={profit}   style={{height:64+'px', width:64+'px'}} className='my-4' alt="..." />
            <h3>PROFITABLE EXCHANGE</h3>
            <p>Qualitatively change the currency online.</p>
          </div>
        </div>
      </div>
      <div className=' p-5'  style={{backgroundColor: '#f7f6f6', opacity:0.9}}>
        <h1 className='px-3 py-5'>Currency Reserve :</h1>
        <div className='row justify-content-evenly py-5 px-2' overflowY='scroll'>
          <div className='col   m-2  border border-2 shadow' style={{borderRadius:20+'px', minWidth:300}}>
          <div className='row '>
          <img src={bitcoin}   style={{height:48+'px', width:64+'px'}} className='my-4' alt="..." />
          <div className='col py-2 px-2'>
              <h4>Bitcoin</h4>
              <p>2$</p>
            </div>
          </div>
            
          </div>
          <div className='col m-2 border border-2 shadow' style={{borderRadius:20+'px', minWidth:300}}>
          <div className='row '>
          <img src={payeer}   style={{height:48+'px', width:64+'px'}} className='my-4' alt="..." />
          <div className='col py-2'>
              <h4> Payeer USD </h4>
              <p>200$</p>
            </div>
          </div>
            
          </div>
          <div className='col m-2 border border-2 shadow' style={{borderRadius:20+'px', minWidth:300}}>
          <div className='row '>
          <img src={payeer}   style={{height:48+'px', width:64+'px'}} className='my-4' alt="..." />
          <div className='col  py-2'>
              <h4>Payeer USD </h4>
              <p>300$</p>
            </div>
          </div>
            
          </div>
          <div className='col m-2 border border-2 shadow' style={{borderRadius:20+'px', minWidth:300}}>
          <div className='row'>
          <img src={usdt}   style={{height:48+'px', width:64+'px'}} className='my-4' alt="..." />
          <div className='col  py-2'>
              <h4>USDT</h4>
              <p>1000$</p>
            </div>
          </div>
            
          </div>
        </div>
        <div className='row justify-content-evenly py-2 px-2 '>
          <div className='col m-2  border border-2 shadow ' style={{borderRadius:20+'px', minWidth:300}}>
          <div className='row'>
          <img src={bitcoin}   style={{height:48+'px', width:64+'px'}} className='my-4' alt="..." />
          <div className='col py-2'>
              <h4>Bitcoin</h4>
              <p>2$</p>
            </div>
          </div>
            
          </div>
          <div className='col m-2 border border-2 shadow' style={{borderRadius:20+'px', minWidth:300}}>
          <div className='row'>
          <img src={paypal}   style={{height:48+'px', width:64+'px'}} className='my-4' alt="..." />
          <div className='col py-2'>
              <h4> PayPal USD </h4>
              <p>2000$</p>
            </div>
          </div>
            
          </div>
          <div className='col m-2 border border-2 shadow' style={{borderRadius:20+'px', minWidth:300}}>
          <div className='row'>
          <img src={payeer}   style={{height:48+'px', width:64+'px'}} className='my-4' alt="..." />
          <div className='col  py-2'>
              <h4>Payeer USD </h4>
              <p>300$</p>
            </div>
          </div>
            
          </div>
          <div className='col m-2 border border-2 shadow' style={{borderRadius:20+'px', minWidth:300}}>
          <div className='row'>
          <img src={usdt}   style={{height:48+'px', width:64+'px'}} className='my-4' alt="..." />
          <div className='col  py-2'>
              <h4>USDT</h4>
              <p>1000$</p>
            </div>
          </div>
            
          </div>
        </div>

      </div>
      <Reviews />
      <div className=' p-5' style={{backgroundColor: '#f7f6f6', opacity:0.9}}>
        <h1 className=' px-3 py-5'>Last Exchanges :</h1>
        <div className='row justify-content-evenly py-3 px-2'>
        <div className='col  border border-2 shadow mx-3' style={{borderRadius:20+'px'}}>
          <div className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row justify-content-center align-items-center p-3'>
          <img src={bitcoin}   style={{height:64+'px', width:64+'px'}}  alt="..." />
          <div className='py-3' style={{marginRight:1+'rem'}}>
              <p> Bitcoin </p>
              <p>0.0325$</p>
            </div>
            <img src={exchange}   style={{height:48+'px', width:64+'px'}} className='my-5' alt="..." />
            
            <div className=' py-3' style={{marginLeft:1+'rem'}}>
              <p> PayPal </p>
              <p>2000$</p>
            </div>
            <img src={paypal}   style={{height:64+'px', width:64+'px'}}  alt="..." />
            
          </div>
          
          </div>
        </div>
        <div className='col  border border-2 shadow mx-3' style={{borderRadius:20+'px'}}>
          <div className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row justify-content-center align-items-center p-3'>
          <img src={bitcoin}   style={{height:64+'px', width:64+'px'}}  alt="..." />
          <div className='py-3' style={{marginRight:1+'rem'}}>
              <p> Bitcoin </p>
              <p>0.0325$</p>
            </div>
            <img src={exchange}   style={{height:48+'px', width:64+'px'}} className='my-5' alt="..." />
            
            <div className=' py-3' style={{marginLeft:1+'rem'}}>
              <p> PayPal</p>
              <p>2000$</p>
            </div>
            <img src={paypal}   style={{height:64+'px', width:64+'px'}}  alt="..." />
            
          </div>
          
          </div>
        </div>
        <div className='col  border border-2 shadow mx-3' style={{borderRadius:20+'px'}}>
          <div className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row justify-content-center align-items-center p-3'>
          <img src={bitcoin}   style={{height:64+'px', width:64+'px'}}  alt="..." />
          <div className='py-3' style={{marginRight:1+'rem'}}>
              <p> Bitcoin </p>
              <p>0.0325$</p>
            </div>
            <img src={exchange}   style={{height:48+'px', width:64+'px'}} className='my-5' alt="..." />
            
            <div className=' py-3' style={{marginLeft:1+'rem'}}>
              <p> PayPal</p>
              <p>2000$</p>
            </div>
            <img src={paypal}   style={{height:64+'px', width:64+'px'}}  alt="..." />
            
          </div>
          
          </div>
        </div>
      </div>
      <News />
      <Footer />
      </div>

    </>
  )
}
export default Home;