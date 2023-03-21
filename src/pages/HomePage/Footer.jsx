import React from 'react';
import binance from '../../assets/imgs/HomeImgs/binance.svg';
import paysera from '../../assets/imgs/HomeImgs/1_Paysera .svg';
import Paypal from '../../assets/imgs/HomeImgs/paypal-3.svg';



export default function Footer() {
  return (
    <div className='d-flex flex-column flex-sm-row justify-content-between py-5' style={{backgroundColor:'#f7f6f6'}}>
    <div className='col-lg-4 col-sm-12 ' style={{minWidth:390}}>
            <h1 className='py-1'>Our Partner :</h1>
            <div className='d-flex flex-row justify-content-between'>
            <img src={binance} width={100} className='mx-3' height={100} />
            <img src={paysera} width={100} className='mx-3' height={100} />
            <img src={Paypal} width={100} className='mx-3' height={100} />
            </div>
        </div>
        <div className='col-lg-4 col-sm-12 ' style={{minWidth:200}}>
            <h5 className='py-2'>E-currency & Digital currency exchange service.</h5>
            <h5 className='py-2'>Phone : +213 435 768 345</h5>
            <h5 className='py-2'>Email : MyWebsit@gmail.com</h5>
            <h5 className='py-2'>Sat – Thu 8 a.m. till 10 p.m<br /> Fri free time.</h5>
        </div>
    </div>
  )
}
