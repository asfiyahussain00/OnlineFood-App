import React, { useEffect } from 'react'
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Items from './Pages/Items';
import Restuarent from './Pages/Restuarent';
import Categories from './Pages/Categories';
import AdminNav from './Components/AdminNav';
import {BiDish} from 'react-icons/bi';
import {BiSolidCategoryAlt} from 'react-icons/bi';
import {FaHotel} from 'react-icons/fa'
import {BsClipboardCheckFill} from 'react-icons/bs';
import Order from './Pages/Order';
import './App.css'


export default function App() {
    const location = useLocation()
    const NavItems = [
        {
            tab: 'Items',
            link: '/',
            icon: <BiDish/>
        },
        {
            tab: 'Restuarent',
            link: '/restuarent',
            icon: <FaHotel/>
          
        },
        {

            tab: 'Category',
            link: '/category',
            icon: <BiSolidCategoryAlt/>
        },
        {
            tab: 'Order',
            link: '/order',
            icon: <BsClipboardCheckFill/>
          
        }

    ]

   

    return (
        <>
             <AdminNav />
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-2  sidebar "  >
                        <Nav defaultActiveKey="/" className="flex-column pt-3">
                             {
                                NavItems.map((val, key) => <li key={key} className={`nav-item m-2  ${location.pathname == val.link ? 'bg-dark rounded' : null}`}>
                                    <Link to={val.link} className='text-light nav-link d-flex align-item-center gap-2'>
                                        <span>{val.icon}</span>
                                        {val.tab}</Link></li>)
                            }
                         </Nav>
                         
                    </div>
                    
                    <div className="col-md-10 ">
                        <Routes>
                            <Route path="/*" element={<Items/>} />
                            <Route path="/restuarent" element={<Restuarent />} />
                            <Route path="/category" element={<Categories />} />
                            <Route path="/order" element={<Order />} />
                            <Route path="*" element={<div>Page-404</div>} />
                        </Routes>
                    </div>
                    </div>
                </div>
            
        
</> 

    )
}