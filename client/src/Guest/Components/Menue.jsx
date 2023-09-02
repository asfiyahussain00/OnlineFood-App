import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from 'react-bootstrap/Card';
import { AppRoute } from '../../App';
import Image from 'react-bootstrap/Image';

function Menue() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        AOS.init();
        axios.get(`${AppRoute}api/categoryByName`)
            .then((json) => {
                setCategory(json.data.category);
            });
    }, []);
  return (
    <div className="container">
            <div className=" text-center" data-aos="zoom-in-up">
                <h2 style={{ fontFamily:'Georgia, Times, serif',fontSize:'60px' }}>Our <i className='yel'>Menue</i></h2>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit quos perferendis ipsum neque id culpa.
                </p>
            </div>
            <div className="container" >
                <div className="row">
                    {category.map((val, key) => (
                        <div className="col-lg-4 col-md-4 my-2"  key={key}>
                            <Card style={{width:'360px'}}>
                                
                                    <Card.Img 
                                        variant="top"
                                        src={val.CategoryImage} 
                                        style={{ width: '100%', height: '190px', objectFit: 'cover' }}
                                        data-aos="zoom-in-up"
                                    />
                                    
                                
                                
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Menue