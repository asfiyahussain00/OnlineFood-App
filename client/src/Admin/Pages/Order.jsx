import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AppRoute } from '../../App'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
// import {GoTrash} from 'react-icons/go'
import {PiNotePencilThin} from 'react-icons/pi'

function Order() {
    const [order, setOrder] = useState([])

    useEffect(() => {
axios.get(`${AppRoute}api/allOrders`)
.then(json => {setOrder(json.data.order)})
.catch(err => {console.log(err)})
    },[])
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-item-center my-2">
        <span className='text-dark fw-bold fs-4'> Customer Details </span>
        {/* <RestuarentModal newRestuarent={newRestuarent}/> */}
        {/* <button className='btn btn-secondary my-2'>Add Category</button> */}
      </div>
      <div className="table-container bg-dark text-light">
      <table className='table'>
  <thead>
    <tr>
      <th scope="col" style={{background:'white', color:'black'}} className='header'>Id</th>
      <th scope="col" style={{background:'white', color:'black'}} className='header'>Name</th>
      <th scope="col" style={{background:'white', color:'black'}} className='header'>Email</th>
      <th scope="col" style={{background:'white', color:'black'}} className='header'>Contact</th>
      <th scope="col" style={{background:'white', color:'black'}} className='header'>Address</th>
      <th scope="col" style={{background:'white', color:'black'}} className='header'>TotalBill</th>
      <th scope="col" style={{background:'white', color:'black'}} className='header'>Status</th>
      <th scope="col" style={{background:'white', color:'black'}} className='header'>Action</th>
        </tr>
  </thead>
  <tbody>
    {
    order.map((val, key) =>
    <tr key={key}>
      <th scope="row" style={{background:'white', color:'black'}}>{val._id}</th>
      <td style={{background:'white', color:'black'}}>{val.CustomerName}</td>
      <td style={{background:'white', color:'black'}}>{val.CustomerEmail}</td>
      <td style={{background:'white', color:'black'}}>{val.CustomerContact}</td>
      <td style={{background:'white', color:'black'}}>{val.CoutomerAddress}</td>
      <td style={{background:'white', color:'black'}}>{val.TotalBill}</td>
      <td style={{background:'white', color:'black'}}>{val.Status}</td>
      <td style={{background:'white', color:'black'}}> <Button ><PiNotePencilThin/></Button>
      {/* <Button onClick={() => deleteRestuarent(val._id)} ><GoTrash/></Button> */}
      </td>
        </tr>
   )}
  </tbody>
</table>

      </div>
    </div>
  )
}

export default Order