
import React,{useEffect} from "react";
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Slider.css"
import Menue from "../../Guest/Components/Menue";
import { TbTruckDelivery } from 'react-icons/tb'
import { GrCurrency } from 'react-icons/gr'
import {MdFastfood} from 'react-icons/md'
import {FaHotel} from 'react-icons/fa'
// import { FaBuildingColumns } from 'react-icons/fa'

function slider() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (


<>

<div className=" con d-flex bg-dark">
  
  <div className="col-md-5 text-center my-3 mt-3">
    <h1 style={{fontFamily:'Georgia, Times, serif',fontSize:'60px'}} className='yell text-light'data-aos="fade-left" >Get Fresh <i className='yel'>Food</i></h1>

<h1 style={{fontFamily:'Georgia, Times, serif',fontSize:'60px'}} className='yell text-light'  data-aos="fade-left">In Easy Way</h1>
<p className="my-0 mt-0 text-light">Lorem ipsum dolor,  amet consectetur adipisicing elit.Esse reiciendis </p>
<p className="my-0 mt-0 text-light">deleniti amet non inventore. Reprehenderit recusandae voluptatibus </p>
<p className="my-0 mt-0 text-light">numquam cum quos dolorem maxime. Quas, quaerat nisi. Lorem ipsum </p>
<p className="my-0 mt-0 text-light">consectetur adipisicing elit. Cumque facilis, quaerat cupiditate </p>
     </div>
  
  <div className="col-md-7 ">
  <div>
    <img data-aos="zoom-in" src="./main_img.png" 
    style={{width:'500px', }} className="" />
  </div> 
  </div>
</div>

{/* ./main_img.png */}


    
    
  <div className=" con d-flex ">
    <div className="col-md-5 my-3 mt-3">
      <div>< img data-aos="zoom-in" src="https://www.pngmart.com/files/15/Food-Plate-Top-View-Snack-PNG.png"/></div>
    </div>

    
    
    <div className="col-md-7 text-center">

<div>
<h1 style={{fontFamily:'Georgia, Times, serif',fontSize:'60px'}} className='yell text-light my-3 mt-3'data-aos="fade-left" > <i className='yel'>About Us</i></h1>

<h3 className="my-3 mt-3"> Why Choose Us?</h3>
<p className="my-0 mt-0 text-dark">Lorem ipsum dolor,  amet consectetur adipisicing elit.Esse reiciendis quaerat nobis</p>
<p className="my-0 mt-0 text-dark">deleniti amet non inventore. Reprehenderit recusandae voluptatibus minus tenetur itaque</p>
<p className="my-0 mt-0 text-dark">numquam cum quos dolorem maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, ame</p>
<p className="my-0 mt-0 text-dark">consectetur adipisicing elit. Cumque facilis, quaerat cupiditate nulla quibusdam quo sunt</p>
<p className="my-0 mt-0 text-dark">consectetur adipisicing elit. Cumque facilis, quaerat cupiditate nulla quibusdam quo sunt</p>
<p className="my-0 mt-0 text-dark">consectetur adipisicing elit. Cumque facilis, quaerat cupiditate nulla quibusdam quo sunt</p>

</div>
    </div>
  </div>

<div >
 
  <Menue/>
  </div>
  <div className=" d-flex  justify-content-center  my-3 mt-3">
    <div className="row">
      {/* Ist */}
      <div className="col-md-3 ">
         <Card > 
          <h1 className="text-center"><FaHotel/></h1>
         <div className="text-center fw-bold" style={{fontSize:'20px', fontFamily:'gerogia'}}>Discover Restaurants</div>
         <div  className="text-center">Lorem ipsum dolor,  amet consectetur adipisicing elit</div>
         </Card> 
         </div>
         {/* 2nd */}
         <div className="col-md-3 ">
         <Card >
          <h1 className="text-center"><MdFastfood /></h1>
           <div className="text-center fw-bold" style={{fontSize:'20px', fontFamily:'gerogia'}}>Choose Delicious Food</div>
         <div  className="text-center">Lorem ipsum dolor,  amet consectetur adipisicing elit</div>
         </Card> 
         </div>
         {/* 3rd */}
         <div className="col-md-3 ">
         <Card > 
          <h1 className="text-center"><GrCurrency /></h1>
          <div className="text-center fw-bold" style={{fontSize:'20px', fontFamily:'gerogia'}}>Easy Online Payment</div>
         <div  className="text-center">Lorem ipsum dolor,  amet consectetur adipisicing elit</div>
         </Card> 
         </div>
{/* 4th */}
         <div className="col-md-3 ">
         <Card > 
          <h1 className="text-center"> <TbTruckDelivery /> </h1>
          <div className="text-center fw-bold" style={{fontSize:'20px', fontFamily:'gerogia'}}>Delivery On Time</div>
         <div  className="text-center">Lorem ipsum dolor,  amet consectetur adipisicing elit</div>
         </Card> 
         </div>

      
    </div>
    </div>



  </>
  
  )
}

export default slider