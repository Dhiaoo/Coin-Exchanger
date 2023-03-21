import React from 'react';
import img from '../../assets/imgs/a6.jpg'
import Footer from '../HomePage/Footer';

const About = () => {
    return (
        <>
            <div className='d-flex flex-row justify-content-between  my-5' style={{backgroundColor:'#FCFDFF'}}>
                <img src={img} className='border rounded mx-5' height={500} width={600}/>
                <div className='d-flex flex-column justify-content-center' style={{width:50+'%'}}>
                    <h1>How We Are ?</h1>
                    <p>The gildan ultra cotton T-shirt is made from a substantial 6.0 oz. per sq .yd. fabric constructed form 100% cotton,
                     this classific fit preshurunkThe gildan ultra cotton T-shirt is made from a substantial 6.0 oz. per sq .yd. 
                     fabric constructed form 100% cotton, this classific fit preshurunkThe gildan ultra cotton T-shirt is made from a substantial 6.0 
                     oz. per sq .yd. fabric constructed form 100% cotton, this classific fit preshurunkThe gildan ultra cotton T-shirt is made from a 
                     substantial 6.0 oz. per sq .yd. fabric constructed form 100% cotton, this classific fit preshurunk</p>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-between mv-5 p-5'  style={{backgroundColor:'#FCFDFF'}} >
            <div class="d-flex flex-column justify-content-center">
                <span>GET IN TOUCH</span>
                <h3>Visit one of our agency locations or contact us today</h3>
                <h3>Head Office</h3>
                <div>
                        <p> 56 Glassford Street Glasgow G1 1UL New York</p>
                    
                        <p>  MyWebsit@gmail.com</p>
                   
                        <p> +213 435 768 345</p>
                
                        <p>Sat – Thu 8 a.m. till 10 p.m Fri free time.</p>
             
                </div>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.2361912219567!2d-4.2463117158034365!3d55.8585683912973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846a1bde1f8c1%3A0x488b18a5fe6f185d!2sClub%20Gym%20Wellness!5e0!3m2!1sar!2sdz!4v1677163669539!5m2!1sar!2sdz"
                width="600" height="450"  className='border rounded' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            </div>
            <Footer />
        </>
    );
}

export default About;

